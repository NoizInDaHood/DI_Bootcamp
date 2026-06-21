import { TodoList } from "../todoApp/toDo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Learn ES6 modules");
myTodoList.addTask("Understand classes");
myTodoList.addTask("Finish the exercise");

myTodoList.markTaskComplete(1);

myTodoList.listTasks();
