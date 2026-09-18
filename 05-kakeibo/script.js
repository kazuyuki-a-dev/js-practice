let expenses = [
  { amount: 500, category: "食事", memo: "コンビニ" },
  { amount: 1200, category: "交通費", memo: "電車代" },
];

const expenseList = document.getElementById("expenseList");
const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const memoInput = document.getElementById("memoInput");
const addBtn = document.getElementById("addBtn");
const totalText = document.getElementById("totalText");

function renderExpenses() {
  expenseList.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${expenses[i].category}: ${expenses[i].amount}円 (${expenses[i].memo})`;
    expenseList.appendChild(li);
  }
  const total = expenses.reduce(function (sum, expense) {
    return sum + expense.amount;
  }, 0);

  totalText.textContent = `合計： ${total}円`;
}
renderExpenses();

addBtn.addEventListener("click", function () {
  const newExpense = {
    amount: Number(amountInput.value),
    category: categoryInput.value,
    memo: memoInput.value,
  };

  expenses.push(newExpense);
  renderExpenses();

  amountInput.value = "";
  categoryInput.value = "";
  memoInput.value = "";
});
