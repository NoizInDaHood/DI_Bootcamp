const form = document.getElementById("form")
const input = document.getElementById("input")
const list = document.getElementById("List")
const btnAdd = document.getElementById("btnAdd")
const btnClear = document.getElementById("btnClear")


form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const task = document.createElement("li");
    task.innerHTML = `
    <button class="delRow">X</button>
    <input type="checkbox" class="checkbox">
    <span class="task-ongoing">${input.value}</span>
    `
    const btnDel = task.querySelector(".delRow");
    const checkBox = task.querySelector(".checkbox");
    const span = task.querySelector(".task-ongoing");
    task.classList.add("task");
    list.appendChild(task);
    input.value = "";
    checkBox.addEventListener("change", (ev) => {
    ev.preventDefault();
    if (checkBox.checked) {
        span.classList.remove("task-ongoing")
        span.classList.add("task-done")
    }
    else {
        span.classList.remove("task-done")
        span.classList.add("task-ongoing")
    }
    });
    btnDel.addEventListener("click", (ev) => {
        ev.preventDefault();
        task.remove();
    })
});

btnClear.addEventListener("click", (ev) => {
    ev.preventDefault();
    list.innerHTML = ""
});
