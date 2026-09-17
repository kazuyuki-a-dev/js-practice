const questions = [
  {
    question: "JavaScriptで変数を宣言するキーワードはどれ？",
    answer: "let",
  },
  {
    question: "配列の要素数を取得するプロパティは？",
    answer: "length",
  },
  {
    question: "オブジェクトのプロパティにアクセスする記法は？",
    answer: "ドット記法",
  },
];

let currentIndex = 0;
let score = 0;

const questionText = document.getElementById("questionText");

questionText.textContent = questions[currentIndex].question;

const answerInput = document.getElementById("answerInput");
const answerBtn = document.getElementById("answerBtn");
const resultText = document.getElementById("resultText");

answerBtn.addEventListener("click", function () {
  const userAnswer = answerInput.value;

  if (userAnswer === questions[currentIndex].answer) {
    resultText.textContent = "正解です！";
    score = score + 1;
  } else {
    resultText.textContent = "不正解です！";
  }
});

const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", function () {
  currentIndex = currentIndex + 1;

  if (currentIndex < questions.length) {
    questionText.textContent = questions[currentIndex].question;
    answerInput.value = "";
    resultText.textContent = "";
  } else {
    questionText.textContent = `クイズ終了！ ${questions.length}問中${score}問正解でした`;
    answerInput.style.display = "none";
    answerBtn.style.display = "none";
    nextBtn.style.display = "none";
    resultText.textContent = "";
  }
});
