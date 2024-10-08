const questions = [
  {
    question: "Qual é, atualmente, o maior animal da terra?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Elefante", correct: false },
      { text: "Girafa", correct: false },
      { text: "Baleia Azul", correct: true },
    ],
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    answers: [
      { text: "Terra", correct: false },
      { text: "Marte", correct: false },
      { text: "Júpiter", correct: true },
      { text: "Vênus", correct: false },
    ],
  },
  {
    question: "Qual é a capital da Austrália?",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "Quem pintou a Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Claude Monet", correct: false },
    ],
  },
];

const questionElement = document.getElementsById("question");
const answerButton = document.getElementsById("answer-buttons")
const nextButton = document.getElementsById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}