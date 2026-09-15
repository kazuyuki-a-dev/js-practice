let todos = ["牛乳を買う", "宿題をする"];

const todoList = document.getElementById("todoList");

function renderTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.textContent = todos[i];
    todoList.appendChild(li);
  }
}

renderTodos();

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const newTodo = todoInput.value;
  todos.push(newTodo);

  renderTodos();
});
