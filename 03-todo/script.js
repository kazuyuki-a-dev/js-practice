let todos = [
  { text: "牛乳を買う", done: false },
  { text: "宿題をする", done: false },
];

const todoList = document.getElementById("todoList");

function renderTodos() {
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todos[i].done;

    checkbox.addEventListener("click", function () {
      todos[i].done = checkbox.checked;
      renderTodos();
    });

    li.appendChild(checkbox);

    const span = document.createElement("span");
    span.textContent = todos[i].text;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "削除";
    deleteBtn.addEventListener("click", function () {
      todos = todos.filter(function (_todo, index) {
        return index !== i;
      });
      renderTodos();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

renderTodos();

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const newTodo = todoInput.value;
  todos.push({ text: newTodo, done: false });

  renderTodos();
});
