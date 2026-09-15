const hands = ["グー", "チョキ", "パー"];

function getComputerHand() {
  const randomIndex = Math.floor(Math.random() * hands.length);
  return hands[randomIndex];
}

function judge(you, cpu) {
  if (you === cpu) {
    return "あいこ";
  }
  if (you === "グー" && cpu === "チョキ") {
    return "あなたの勝ち";
  }
  if (you === "チョキ" && cpu === "パー") {
    return "あなたの勝ち";
  }
  if (you === "パー" && cpu === "グー") {
    return "あなたの勝ち";
  }
  return "あなたの負け";
}

const handButtons = document.querySelectorAll(".hand-btn");
const result = document.getElementById("result");

handButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const yourHand = btn.dataset.hand;
    const cpuHand = getComputerHand();
    const resultText = judge(yourHand, cpuHand);

    result.textContent = `あなた: ${yourHand} / コンピューター: ${cpuHand} → ${resultText}`;
  });
});
