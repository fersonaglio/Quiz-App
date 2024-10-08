// Array de perguntas e respostas (questions and answers)
const questions = [
  {
    question: "Qual é, atualmente, o maior animal da terra?", // Pergunta (question)
    answers: [
      { text: "Tubarão-baleia", correct: false }, // Resposta incorreta (incorrect answer)
      { text: "Elefante", correct: false },
      { text: "Girafa", correct: false },
      { text: "Baleia-azul", correct: true }, // Resposta correta (correct answer)
    ],
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    answers: [
      { text: "Terra", correct: false },
      { text: "Marte", correct: false },
      { text: "Júpiter", correct: true }, // Resposta correta
      { text: "Vênus", correct: false },
    ],
  },
  {
    question: "Qual é a capital da Austrália?",
    answers: [
      { text: "Canberra", correct: true }, // Resposta correta
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
      { text: "Leonardo da Vinci", correct: true }, // Resposta correta
      { text: "Claude Monet", correct: false },
    ],
  },
]

// Referências aos elementos do DOM (Document Object Model) onde serão exibidos a pergunta e as respostas
const questionElement = document.getElementById("question") // Elemento que exibe a pergunta
const answerButtons = document.getElementById("answer-buttons") // Container dos botões de resposta
const nextButton = document.getElementById("next-btn") // Botão "Next" (Próxima)

// Variáveis que controlam o índice da pergunta atual e a pontuação do usuário
let currentQuestionIndex = 0 // Índice da pergunta atual (current question index)
let score = 0 // Pontuação do usuário (user score)

// Função que inicializa o quiz (start quiz)
function startQuiz() {
  currentQuestionIndex = 0 // Reseta o índice para a primeira pergunta
  score = 0 // Reseta a pontuação
  nextButton.innerHTML = "Next" // Define o texto do botão "Next" (Próxima)
  showQuestion() // Exibe a primeira pergunta
}

// Função que exibe a pergunta atual e as opções de resposta
function showQuestion() {
  resetState() // Limpa as respostas anteriores (reset the state)
  let currentQuestion = questions[currentQuestionIndex] // Pega a pergunta atual (current question)
  let questionNo = currentQuestionIndex + 1 // Número da pergunta (question number)
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question // Exibe a pergunta no elemento HTML

  // Cria os botões para cada resposta (answers)
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button") // Cria um botão (button)
    button.innerHTML = answer.text // Define o texto da resposta no botão
    button.classList.add("btn") // Adiciona uma classe CSS ao botão para estilização
    answerButtons.appendChild(button) // Adiciona o botão ao container de respostas
    if (answer.correct) {
      // Se for a resposta correta, armazena essa informação no dataset do botão
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer) // Adiciona o evento de clique ao botão
  })
}

// Função que reseta o estado (limpa as respostas anteriores e esconde o botão "Next")
function resetState() {
  nextButton.style.display = "none" // Esconde o botão "Next"
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild) // Remove as respostas anteriores
  }
}

// Função chamada quando o usuário seleciona uma resposta
function selectAnswer(e) {
  const selectBtn = e.target // O botão que o usuário clicou (selected button)
  const isCorrect = selectBtn.dataset.correct === "true" // Verifica se a resposta é correta
  if (isCorrect) {
    selectBtn.classList.add("correct") // Aplica a classe CSS para respostas corretas (correct answer)
    score++ // Aumenta a pontuação do usuário (increase score)
  } else {
    selectBtn.classList.add("incorrect") // Aplica a classe CSS para respostas incorretas (incorrect answer)
  }
  // Marca todas as respostas como corretas ou incorretas (answers correct or incorrect)
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct") // Adiciona a classe de resposta correta (correct answer)
    }
    button.disabled = true // Desabilita todos os botões após a escolha (disable all buttons)
  })
  nextButton.style.display = "block" // Exibe o botão "Next" (Próxima pergunta)
}

// Função que exibe a pontuação final (final score)
function showScore() {
  resetState() // Reseta o estado
  // Exibe a pontuação final no elemento da pergunta
  questionElement.innerHTML = `Você acertou ${score} questões de ${questions.length}!` // Mensagem de pontuação final
  nextButton.innerHTML = "Nova tentativa" // Altera o texto do botão para reiniciar o quiz
  nextButton.style.display = "block" // Exibe o botão para reiniciar o quiz
}

// Função que lida com o botão "Next", para avançar para a próxima pergunta ou mostrar a pontuação
function handleNextButton() {
  currentQuestionIndex++ // Avança para a próxima pergunta
  if (currentQuestionIndex < questions.length) {
    showQuestion() // Exibe a próxima pergunta
  } else {
    showScore() // Se não houver mais perguntas, exibe a pontuação final
  }
}

// Adiciona o evento de clique ao botão "Next"
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton() // Se houver mais perguntas, avança para a próxima
  } else {
    startQuiz() // Se o quiz terminou, reinicia o quiz
  }
})

// Inicia o quiz ao carregar o script
startQuiz()