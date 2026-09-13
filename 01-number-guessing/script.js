function generateSecretNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

let secretNumber = generateSecretNumber();
console.log(secretNumber);

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const result = document.getElementById("result");

guessBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);
  if (guess === secretNumber) {
    result.textContent = "正解です！";
  } else if (guess < secretNumber) {
    result.textContent = "もっと大きい数字です";
  } else {
    result.textContent = "もっと小さい数字です";
  }
});
