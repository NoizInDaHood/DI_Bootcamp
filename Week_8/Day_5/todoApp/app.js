// Exercise 4: Todo List using ES6 module syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.

import { TodoList } from "../todoApp/toDo.js";

const myTodoList = new TodoList();

myTodoList.addTask("Learn ES6 modules");
myTodoList.addTask("Understand classes");
myTodoList.addTask("Finish the exercise");

myTodoList.markTaskComplete(1);

myTodoList.listTasks();
