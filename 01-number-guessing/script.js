function generateSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let secretNumber = generateSecretNumber();
console.log(secretNumber);

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restartBtn");

guessBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  attempts = attempts + 1;
  if (guess === secretNumber) {
    result.textContent = `正解です！ ${attempts}回目で当てました`;
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (guess < secretNumber) {
    result.textContent = "もっと大きい数字です";
  } else {
    result.textContent = "もっと小さい数字です";
  }
});

restartBtn.addEventListener("click", function () {
  secretNumber = generateSecretNumber();
  console.log(secretNumber);
  attempts = 0;
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = "";
  result.textContent = "";
});
