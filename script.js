const QUESTION_POOL = [
  {
    q: "Wat is een sterk wachtwoord?",
    options: [
      "Je voornaam en geboortejaar (makkelijk te raden)",
      "123456 of een simpele reeks",
      "Een lange mix van 14+ letters, cijfers en tekens",
      "Hetzelfde als dat van je vriend"
    ],
    answer: 2
  },
  {
    q: "Waarom is het slim om MFA (extra verificatie) te gebruiken?",
    options: [
      "Dan heb je twee kansen om te vergeten in te loggen",
      "Het maakt je account extra veilig met een tweede stap",
      "Omdat je telefoon dan nooit leeg raakt",
      "Omdat het sneller is dan één wachtwoord"
    ],
    answer: 1
  },
  {
    q: "Wat doe je als je een rare link krijgt van iemand die je niet kent?",
    options: [
      "Klikken om te kijken wat het is",
      "Doorsturen naar vrienden zodat zij kunnen kijken",
      "Niet klikken, blokkeren en melden bij het platform",
      "Je wachtwoord sturen om te bewijzen dat jij echt bent"
    ],
    answer: 2
  },
  {
    q: "Wat betekent phishing?",
    options: [
      "Een computervirus dat geluid maakt",
      "Iemand die je probeert te misleiden voor jouw persoonlijke info",
      "Een spelletje met vissen",
      "Een snelle internetverbinding"
    ],
    answer: 1
  },
  {
    q: "Welke info deel je beter NIET online?",
    options: [
      "Je favoriete game",
      "Je thuisadres of school",
      "Een leuke meme",
      "Je hobby's in het algemeen"
    ],
    answer: 1
  },
  {
    q: "Wat is een privacy-instelling?",
    options: [
      "Een knop die je scherm groter maakt",
      "Een plek waar je kiest wie jouw info ziet en wat zichtbaar is",
      "Een app om te chatten",
      "Een spelmodus"
    ],
    answer: 1
  },
  {
    q: "Wat is social engineering?",
    options: [
      "Computers bouwen met LEGO",
      "Mensen manipuleren om informatie te krijgen, vaak met een smoes",
      "Een app voor social media",
      "Een type muziek"
    ],
    answer: 1
  },
  {
    q: "Wat is de veiligste plek om je wachtwoorden te bewaren?",
    options: [
      "Op een briefje op je bureau",
      "In een password manager die alles veilig bewaart",
      "In een chat met vrienden",
      "In je bio op social media"
    ],
    answer: 1
  },
  {
    q: "Wat betekent het als een website https:// heeft?",
    options: [
      "De site is sneller",
      "De site gebruikt een beveiligde (versleutelde) verbinding",
      "De site is gratis",
      "De site heeft advertenties"
    ],
    answer: 1
  },
  {
    q: "Welke gegevens mag je niet aan AI zoals ChatGPT geven?",
    options: [
      "Je persoonlijke gegevens zoals adres of wachtwoord",
      "Een grappige mop die je zelf hebt bedacht",
      "Een zelfbedacht verhaal",
      "Een algemene vraag over huiswerk"
    ],
    answer: 0
  },
  {
    q: "Wat moet je doen voordat je een app installeert?",
    options: [
      "Niks, gewoon installeren",
      "Reviews en rechten checken (wat mag de app?)",
      "Je wachtwoord delen",
      "Je telefoon uitzetten"
    ],
    answer: 1
  },
  {
    q: "Wat is een datalek?",
    options: [
      "Water in je laptop",
      "Gegevens die zonder toestemming uitlekken, zoals accounts of foto's",
      "Een kapotte kabel",
      "Een trage wifi"
    ],
    answer: 1
  },
  {
    q: "Waarom is het niet slim om overal hetzelfde wachtwoord te gebruiken?",
    options: [
      "Dan word je sneller herkend",
      "Als één account gehackt wordt, zijn al je accounts in gevaar",
      "Omdat het lastig te typen is",
      "Omdat je dan sneller inlogt"
    ],
    answer: 1
  },
  {
    q: "Wat is de veiligste wifi-plek?",
    options: [
      "Je eigen thuiswifi of persoonlijke hotspot",
      "Open wifi zonder wachtwoord",
      "Gastwifi in een hotel",
      "Wifi met de naam 'FREE'"
    ],
    answer: 0
  },
  {
    q: "Wat is een nep-profiel?",
    options: [
      "Iemand die zijn echte naam gebruikt",
      "Een account dat niet van die persoon is en doet alsof",
      "Een account met veel vrienden",
      "Een account met een goede foto"
    ],
    answer: 1
  },
  {
    q: "Wat is het doel van een antivirusprogramma?",
    options: [
      "Je computer sneller maken",
      "Virussen en malware opsporen en blokkeren",
      "Meer opslag geven",
      "Je scherm groter maken"
    ],
    answer: 1
  },
  {
    q: "Wat is malware?",
    options: [
      "Software die expres schade veroorzaakt",
      "Een coole game",
      "Een soort muis",
      "Een nieuwe telefoon"
    ],
    answer: 0
  },
  {
    q: "Wat kun je doen als je telefoon kwijt is?",
    options: [
      "Niks, hopen dat hij terugkomt",
      "Zoek mijn apparaat gebruiken en je wachtwoorden wijzigen",
      "Je wachtwoord posten",
      "Je account verwijderen"
    ],
    answer: 1
  },
  {
    q: "Wat is het beste bij online pesten?",
    options: [
      "Terug pesten",
      "Negeer, blokkeer en meld bij het platform of school",
      "Alles liken",
      "Je wachtwoord delen"
    ],
    answer: 1
  },
  {
    q: "Waarom moet je updates installeren?",
    options: [
      "Voor nieuwe beveiliging en fixes van fouten",
      "Omdat je telefoon anders kapot gaat",
      "Om meer reclame te krijgen",
      "Omdat je dan geen wifi meer nodig hebt"
    ],
    answer: 0
  },
  {
    q: "Wat is het risico van het delen van je locatie?",
    options: [
      "Mensen kunnen weten waar je bent of je route volgen",
      "Je batterij gaat langer mee",
      "Je telefoon wordt sneller",
      "Je krijgt meer likes"
    ],
    answer: 0
  },
  {
    q: "Welke van deze is een sterk wachtwoord?",
    options: [
      "Qwerty",
      "Welkom123",
      "J9!kZ#2pL (mix van letters, cijfers en tekens)",
      "mijnnaam"
    ],
    answer: 2
  },
  {
    q: "Wat is tweestapsverificatie?",
    options: [
      "Inloggen met twee accounts",
      "Extra stap naast je wachtwoord, zoals een code op je telefoon",
      "Twee keer achter elkaar klikken",
      "Een dubbele internetkabel"
    ],
    answer: 1
  },
  {
    q: "Wat doe je als een vriend om je wachtwoord vraagt?",
    options: [
      "Geef het door, het is maar een vriend",
      "Stuur een foto van je wachtwoord",
      "Zeg nee, wachtwoorden zijn persoonlijk",
      "Schrijf het op de muur zodat iedereen het ziet"
    ],
    answer: 2
  },
  {
    q: "Wat is een goede gewoonte met e-mails?",
    options: [
      "Altijd op links klikken",
      "Afzender en link controleren voordat je klikt",
      "Je wachtwoord terugmailen",
      "Alles verwijderen zonder te lezen"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'delen met alleen vrienden'?",
    options: [
      "Iedereen kan het zien",
      "Alleen mensen op je vriendenlijst",
      "Alleen de politie",
      "Alleen je ouders"
    ],
    answer: 1
  },
  {
    q: "Wat is een veilig antwoord op een onbekend nummer dat om info vraagt?",
    options: [
      "Alles vertellen",
      "Niet reageren en blokkeren als het verdacht is",
      "Je adres sturen",
      "Je foto's sturen"
    ],
    answer: 1
  },
  {
    q: "Wat is het beste voor je privacy op social media?",
    options: [
      "Alles openbaar zetten",
      "Je profiel afschermen en goed kiezen wat je deelt",
      "Je wachtwoord in je bio zetten",
      "Iedereen taggen"
    ],
    answer: 1
  },
  {
    q: "Wat is een deepfake?",
    options: [
      "Een echte foto",
      "Een video of foto die door AI is gemaakt om echt te lijken",
      "Een nieuw spel",
      "Een virus"
    ],
    answer: 1
  },
  {
    q: "Wat moet je doen als je een deepfake ziet?",
    options: [
      "Alles geloven",
      "Checken of het echt is en melden als het nep is",
      "Delen met iedereen",
      "Niet nadenken"
    ],
    answer: 1
  },
  {
    q: "Wat is het doel van een firewall?",
    options: [
      "Je huis verwarmen",
      "Ongewenst verkeer tegenhouden van buitenaf",
      "Je computer sneller maken",
      "Je scherm groter maken"
    ],
    answer: 1
  },
  {
    q: "Wat is een goede manier om AI te gebruiken?",
    options: [
      "Alles zonder nadenken kopiëren",
      "AI gebruiken en zelf blijven checken of het klopt",
      "AI gebruiken om te spieken",
      "AI gebruiken om wachtwoorden te raden"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'privé account'?",
    options: [
      "Iedereen kan alles zien",
      "Alleen goedgekeurde mensen zien je posts",
      "Je account is kapot",
      "Je account is gratis"
    ],
    answer: 1
  },
  {
    q: "Wat moet je doen als je een bericht krijgt dat 'te mooi om waar te zijn' is?",
    options: [
      "Gelijk klikken",
      "Twijfelen, controleren en bewijs vragen",
      "Je wachtwoord sturen",
      "Geld sturen"
    ],
    answer: 1
  },
  {
    q: "Wat is het risico van openbare wifi in een café?",
    options: [
      "Je internet is sneller",
      "Iemand kan meelezen of je gegevens onderscheppen",
      "Je batterij gaat vol",
      "Je krijgt korting"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'cookie' op websites?",
    options: [
      "Een echt koekje",
      "Een klein bestandje met info over je bezoek",
      "Een virus",
      "Een wachtwoord"
    ],
    answer: 1
  },
  {
    q: "Wat is een goede regel voor foto's online?",
    options: [
      "Alles posten",
      "Alleen delen als je het oké vindt dat iedereen het ziet",
      "Nooit nadenken",
      "Altijd je locatie erbij"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'toestemming' bij apps?",
    options: [
      "De app vraagt wat hij mag gebruiken (bijv. camera, locatie)",
      "De app is gratis",
      "De app kan alles",
      "De app is langzaam"
    ],
    answer: 0
  },
  {
    q: "Wat is een 'sterke pincode'?",
    options: [
      "0000",
      "1111",
      "Een code die niet makkelijk te raden is",
      "Je geboortedag of huisnummer"
    ],
    answer: 2
  },
  {
    q: "Wat is het beste als je een vreemd bestand krijgt?",
    options: [
      "Meteen openen",
      "Eerst checken of het veilig is, of vragen aan een volwassene",
      "Doorsturen",
      "Je wachtwoord sturen"
    ],
    answer: 1
  },
  {
    q: "Wat is het gevaar van klikken op pop-ups?",
    options: [
      "Je krijgt snoep",
      "Je kunt malware krijgen of op een nep-site komen",
      "Je wordt sneller",
      "Je scherm wordt groter"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'back-up' maken?",
    options: [
      "Je bestanden kopiëren als reserve voor als iets misgaat",
      "Je scherm omdraaien",
      "Je wachtwoord delen",
      "Je camera uitzetten"
    ],
    answer: 0
  },
  {
    q: "Wat is een veilige reactie op een nepwedstrijd?",
    options: [
      "Je gegevens invullen",
      "Niet meedoen en melden bij het platform",
      "Alles delen",
      "Je wachtwoord sturen"
    ],
    answer: 1
  },
  {
    q: "Waarom moet je je toestel vergrendelen?",
    options: [
      "Dan kan niemand zomaar bij je spullen en apps",
      "Dan gaat hij sneller",
      "Dan wordt het scherm groter",
      "Dan krijg je meer opslag"
    ],
    answer: 0
  },
  {
    q: "Wat betekent 'log uit' op een gedeelde computer?",
    options: [
      "Alles open laten",
      "Afmelden zodat anderen niet kunnen inloggen",
      "Je wachtwoord delen",
      "Je computer weggooien"
    ],
    answer: 1
  },
  {
    q: "Wat is het risico van je wachtwoord opslaan op een openbare pc?",
    options: [
      "Niks, dat is handig",
      "Iemand anders kan inloggen op jouw account",
      "Je pc wordt sneller",
      "Je krijgt extra punten"
    ],
    answer: 1
  },
  {
    q: "Wat is een goede manier om AI-teksten te checken?",
    options: [
      "Niets checken",
      "Feiten controleren in betrouwbare bronnen",
      "Alles blind geloven",
      "Alleen aan vrienden vragen"
    ],
    answer: 1
  },
  {
    q: "Wat is het doel van een sterke beveiligingsvraag?",
    options: [
      "Makkelijk te raden",
      "Iets wat anderen niet weten of kunnen raden",
      "Je naam",
      "Je huisnummer"
    ],
    answer: 1
  },
  {
    q: "Wat is een veilig gebruik van social media?",
    options: [
      "Iedereen toevoegen",
      "Alleen mensen accepteren die je echt kent",
      "Je wachtwoord delen",
      "Alles openbaar"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'scam'?",
    options: [
      "Een sport",
      "Oplichting om geld of gegevens te stelen",
      "Een download",
      "Een telefoon"
    ],
    answer: 1
  },
  {
    q: "Wat doe je als je denkt dat je account is gehackt?",
    options: [
      "Niks",
      "Wachtwoord wijzigen en melden bij het platform",
      "Je wachtwoord posten",
      "Je account delen"
    ],
    answer: 1
  },
  {
    q: "Wat is het veiligste om te doen met onbekende USB-sticks?",
    options: [
      "Gelijk in je laptop",
      "Niet gebruiken en wegleggen of melden",
      "Delen met vrienden",
      "Je telefoon opladen"
    ],
    answer: 1
  },
  {
    q: "Wat betekent 'digitale voetafdruk'?",
    options: [
      "Je schoenmaat",
      "Alles wat je online achterlaat, zoals posts of likes",
      "Een game",
      "Een printer"
    ],
    answer: 1
  },
  {
    q: "Waarom is het slim om je camera af te plakken?",
    options: [
      "Omdat hij sneller wordt",
      "Voor extra privacy, zodat niemand mee kan kijken",
      "Voor betere foto's",
      "Omdat het grappig is"
    ],
    answer: 1
  },
  {
    q: "Wat is een goede gewoonte bij downloads?",
    options: [
      "Alles downloaden",
      "Alleen uit betrouwbare bronnen zoals officiële winkels",
      "Je wachtwoord typen",
      "Altijd op pop-ups klikken"
    ],
    answer: 1
  },
  {
    q: "Wat is een veilig gebruik van AI in school?",
    options: [
      "AI laten spieken",
      "AI gebruiken als hulp en daarna eigen werk maken",
      "AI gebruiken om te hacken",
      "AI nooit gebruiken"
    ],
    answer: 1
  }
];

const QUIZ_LENGTH = 10;
const PASS_SCORE = 7;

const PASS_GIFS = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGxnOW0xZXMxb2t6NWhoZGFpaDJzYXowdW43MXV5ZWdlNjJybGxudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o75ajIFH0QnQC3nCeD/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWJxdjRvMDlocTFzY2pqanJ4ZmIyeXBxc2ZwMXJtemJ0c3g4NndyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7Wiozceem6Vt2eMFxO/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnQ0MDM0dzFsaDU2YnkybTBmcXlwZGpldDVwM2FsM3ltN2p6bGMybyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kfRlTZDvhLCPvOEey8/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDdjdHhqdjhoaXBlOXBwdWY2NzVycWVscml6aTViZ2U1eDVyY3R5aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d31w24psGYeekCZy/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnc5YzZxZWNwaTdnd2Vsc2l3bGpxbG92cnExZDY0bXBvdTVyeTlwdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/K3raI0cXTkzNC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2c3N2w0eTdiNWZrdnlrNG5kNHQxcnkyZ29mdDFtc2FnNmQ5djZzZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IorAqDrjKiDcc3QdN3/giphy.gif"
];

const FAIL_GIFS = [
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnZ3M3BnOGUzOHl2bzFlejBmM2VuNXo0ZnowZjAwMjNvNnNvZTIzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cr9vIO7NsP5cY/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2ZlejJ2b2lveTAzeGdvbGV6NDlqcGZiNHVzMXMxY2w3aXlqbTh1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohjV5uukLAvnhS7vy/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRxOGRoZ2twNmsyOTN0MDYybXQybzJrdmlvYm9paWVtY2IyMnB1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7MjPCDkiuodyXXzGAz/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NDdtNnFmdzdrMmJheGJsbWN3djVjbXJqYmd6dTcyMmhxOWRhYmJhciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/5fzpHGYypHvHnaz2J1/giphy.gif"
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const questionCountEl = document.getElementById("question-count");
const progressBar = document.getElementById("progress-bar");
const finalScoreEl = document.getElementById("final-score");
const rewardEl = document.getElementById("reward");
const rewardTitleEl = document.getElementById("reward-title");
const rewardGifEl = document.getElementById("reward-gif");
const confettiEl = document.getElementById("confetti");

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

function shuffle(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function startQuiz() {
  quizQuestions = shuffle(QUESTION_POOL).slice(0, QUIZ_LENGTH);
  currentIndex = 0;
  score = 0;
  selectedAnswer = null;
  scoreEl.textContent = score;
  showScreen(quizScreen);
  renderQuestion();
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((section) => {
    section.classList.remove("active");
  });
  screen.classList.add("active");
}

function renderQuestion() {
  const current = quizQuestions[currentIndex];
  questionText.textContent = current.q;
  answersEl.innerHTML = "";
  selectedAnswer = null;
  nextBtn.disabled = true;

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(button, index));
    answersEl.appendChild(button);
  });

  questionCountEl.textContent = `Vraag ${currentIndex + 1}/${QUIZ_LENGTH}`;
  progressBar.style.width = `${((currentIndex + 1) / QUIZ_LENGTH) * 100}%`;
}

function selectAnswer(button, index) {
  if (selectedAnswer !== null) {
    return;
  }

  selectedAnswer = index;
  const current = quizQuestions[currentIndex];
  const buttons = answersEl.querySelectorAll(".answer");

  buttons.forEach((btn, idx) => {
    btn.classList.toggle("selected", idx === index);
    if (idx === current.answer) {
      btn.classList.add("correct");
    } else if (idx === index) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (index === current.answer) {
    score += 1;
    scoreEl.textContent = score;
  }

  nextBtn.disabled = false;
}

function showResults() {
  finalScoreEl.textContent = score.toString();
  const passed = score >= PASS_SCORE;
  const gifList = passed ? PASS_GIFS : FAIL_GIFS;
  const randomGif = gifList[Math.floor(Math.random() * gifList.length)];

  rewardTitleEl.textContent = passed
    ? "Top gedaan! 🎉 Je verdient een lolly! Laat dit scherm zien aan iemand van de ICT-afdeling."
    : "Goed geprobeerd! 💪 Volgende keer nog beter!";
  rewardGifEl.src = randomGif;
  rewardGifEl.alt = passed ? "Feest GIF" : "Motivatie GIF";
  confettiEl.classList.toggle("hidden", !passed);
  rewardEl.classList.remove("hidden");
  showScreen(resultScreen);
}

function nextQuestion() {
  if (currentIndex < QUIZ_LENGTH - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => showScreen(startScreen));
