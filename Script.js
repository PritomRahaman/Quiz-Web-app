const quiz = [
  {
    Q: "Q1: Which type of JavaScript language is ?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    ans: "ans2",
  },
  {
    Q: "Q2: Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    ans: "ans4",
  },
  {
    Q: "Q3: In JavaScript, what is a block of statement?",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement",
    ans: "ans2",
  },
  {
    Q: "Q4: When interpreter encounters an empty statements, what it will do:",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answer = document.querySelectorAll(".answer");

let questionCount = 0;
let score = 0;

const loadquestion = () => {
  const questionList = quiz[questionCount];

  question.innerText = questionList.Q;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadquestion();

const getCheckAnswer = () => {
  let Answer;

  answer.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      Answer = curAnsElem.id;
    }
  });
  return Answer;
};

const deselectAll = () => {
  answer.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer === quiz[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quiz.length) {
    loadquestion();
  } else {
    showscore.innerHTML = ` <h3>You Scored ${score} / ${quiz.length} ✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>`;
  }
});
