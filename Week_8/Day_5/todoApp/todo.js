export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(taskName) {
        this.tasks.push({
            name: taskName,
            completed: false,
        });
    }

    markTaskComplete(index) {
        this.tasks[index].completed = true;
    }

    listTasks() {
        this.tasks.forEach((task, index) => {
            console.log(`${index}. ${task.name} - completed: ${task.completed}`);
        });
    }
}