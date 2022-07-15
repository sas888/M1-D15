const data = [
  {
    question: "What does CPU stand for?",
    a: "Central Process Unit",
    b: "Computer Personal Unit",
    c: "Central Processor Unit",
    d: "Central Processing Unit",
    correct: "d",
  },
  {
    question:
      "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    a: "Microsoft",
    b: "Apple",
    c: "Atari",
    d: "Commodore",
    correct: "b",
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    a: "Python",
    b: "Java",
    c: "C",
    d: "Jakarta",
    correct: "b",
  },
  {
    question: "In web design, what does CSS stand for?",
    a: "Counter Strike: Source",
    b: "Corrective Style Sheet",
    c: "Computer Style Sheet",
    d: "Cascading Style Sheet",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const optionA = document.getElementById("optionA");
const optionB = document.getElementById("optionB");
const optionC = document.getElementById("optionC");
const optionD = document.getElementById("optionD");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = data[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  optionA.innerText = currentQuizData.a;
  optionB.innerText = currentQuizData.b;
  optionC.innerText = currentQuizData.c;
  optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === data[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> You Answered ${score}/${data.length} Questions correctly</h2>
      <button onclick = "location.reload()">Try Again</button>
      `;
    }
  }
});
