// "use strict";

const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todo");

const todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});
function updateLS() {
  todosEl = document.querySelectorAll("li");
  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(todo) {
  let todoText = input.value + ` zl`;

  if (todo) {
    todoText = todo.text;
  }

  const todoEl = document.createElement("li");
  todoEl.innerText = todoText;
  todoEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todoEl.remove();
    updateLS();
  });

  todoUL.appendChild(todoEl);

  input.value = "";
  updateLS();
}
