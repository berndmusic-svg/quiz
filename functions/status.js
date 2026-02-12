export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const leerlingnummer = url.searchParams.get("leerlingnummer");

  if (!leerlingnummer) {
    return new Response("Missing leerlingnummer", { status: 400 });
  }

  const row = await env.DB
    .prepare(
      "SELECT score FROM results WHERE leerlingnummer = ? ORDER BY created_at DESC LIMIT 1"
    )
    .bind(leerlingnummer)
    .first();

  const passed = Boolean(row && row.score >= 7);
  return Response.json({ passed });
}
