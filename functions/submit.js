export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { leerlingnummer, klas, score, turnstileToken } = body || {};
  if (!leerlingnummer || !klas || typeof score !== "number") {
    return new Response("Invalid payload", { status: 400 });
  }

  if (!turnstileToken) {
    return new Response("Missing Turnstile token", { status: 400 });
  }

  const verifyResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: turnstileToken
      })
    }
  );
  const verifyResult = await verifyResponse.json();
  if (!verifyResult.success) {
    return new Response("Turnstile verification failed", { status: 403 });
  }

  await env.DB
    .prepare("INSERT INTO results (leerlingnummer, klas, score) VALUES (?, ?, ?)")
    .bind(leerlingnummer, klas, score)
    .run();

  return Response.json({ ok: true });
}
