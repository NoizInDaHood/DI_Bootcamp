
const form = document.getElementById("form")
const input = document.getElementById("input")
const list = document.getElementById("List")
const btnAdd = document.getElementById("btnAdd")
const btnDel = document.getElementById("btnDel")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = document.createElement("li");
    task.innerHTML = `
    <button class="delRow">X</button>
    <input type="checkbox" class="checkbox">
    <span class="task-ongoing">${input.value}</span>
    `
    task.classList.add("task");
    list.appendChild(task);
    input.value = ""
});