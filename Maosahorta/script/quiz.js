const questions = [
    {
      question: "Qual desses alimentos pode ser facilmente cultivado em uma horta caseira?",
      answers: [
        { text: "Cenoura", correct: true },
        { text: "Banana", correct: false },
        { text: "Coco", correct: false },
        { text: "Café", correct: false }
      ]
    },
    {
      question: "Qual é uma planta medicinal muito usada para aliviar queimaduras?",
      answers: [
        { text: "Alecrim", correct: false },
        { text: "Babosa (Aloe Vera)", correct: true },
        { text: "Manjericão", correct: false },
        { text: "Hortelã", correct: false }
      ]
    },
    {
      question: "Quantas horas de sol direto por dia, no mínimo, uma horta precisa?",
      answers: [
        { text: "1 hora", correct: false },
        { text: "3 horas", correct: false },
        { text: "6 horas", correct: true },
        { text: "10 horas", correct: false }
      ]
    },
    {
      question: "Qual destas ervas é famosa por seu efeito calmante?",
      answers: [
        { text: "Camomila", correct: true },
        { text: "Tomilho", correct: false },
        { text: "Salsinha", correct: false },
        { text: "Orégano", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const backButton = document.getElementById("back-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima Pergunta";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.style.backgroundColor = "#4CAF50";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "#f44336";
    }
    Array.from(answerButtons.children).forEach(button => {
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length} perguntas!`;
    restartButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", handleNextButton);
  restartButton.addEventListener("click", startQuiz);
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  
  startQuiz();
  