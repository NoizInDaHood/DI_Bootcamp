import fs from "fs/promises";

export async function getTask(req,res) {
    try {
        const data = await fs.readFile(
            new URL("./tasks.json", import.meta.url),
            "utf-8"
        );
        const tasks = JSON.parse(data);
        res.json(tasks)
    }catch(error){
        res.status(500).json({ error: "Failed to read tasks" });
    }

};

export async function getTaskByID(req, res) {
    try {
        const data = await fs.readFile(
            new URL("./tasks.json", import.meta.url),
            "utf-8"
        );
        const tasks = JSON.parse(data);
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);
        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Failed to read task" });
    }
}

export async function createTask (req, res) {
    try{
        const data = await fs.readFile(
            new URL("./tasks.json", import.meta.url),
            "utf-8"
        );
        const tasks = JSON.parse(data);
        const newTask = req.body;
        if (!newTask.title) {
            return res.status(400).json({ error: "Title is required" });
        }
        if (!newTask.state) {
            return res.status(400).json({ error: "A state is required" });
        }
        const lastTask = tasks[tasks.length - 1];
        const newID = lastTask ? lastTask.id + 1 : 1;
        newTask.id = newID;

        tasks.push(newTask);
        await fs.writeFile(
            new URL("./tasks.json", import.meta.url),
            JSON.stringify(tasks, null, 2)
        );
        res.status(201).json(newTask);
    }catch(error){
        res.status(500).json({ error: "Failed to create a new task" });
    }
}

export async function updateTask(req,res) {
    try{
        const data = await fs.readFile(
            new URL("./tasks.json", import.meta.url),
            "utf-8"
        );
        const tasks = JSON.parse(data);
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);
        if (!task) {
            return res.status(404).json({ error: "Task not found"});
        }
        const update = req.body;
        if (!update.title && !update.state){
            return res.status(400).json({ error: "Update title or state is required" });
        }
        if (update.title && task.title !== update.title){
            task.title = update.title;
        };
        if (update.state && task.state !== update.state){
            task.state = update.state;
        };

        await fs.writeFile(
            new URL("./tasks.json", import.meta.url),
            JSON.stringify(tasks, null, 2)
        );
        res.status(200).json(task);
    }catch(error){
        res.status(500).json({ error: "Failed to update the task" });
    }
};

export async function deleteTask(req,res) {
    try{
        const data = await fs.readFile(
            new URL("./tasks.json", import.meta.url),
            "utf-8"
        );
        const tasks = JSON.parse(data);
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);
        if (!task) {
            return res.status(404).json({ error: "Task not found"});
        };
        const updatedTasks = tasks.filter((task) => task.id !== id);

        await fs.writeFile(
            new URL("./tasks.json", import.meta.url),
            JSON.stringify(updatedTasks, null, 2)
        );
        res.status(200).json("Task deleted successfully");

    }catch(error){
        res.status(500).json({ error: "Failed to delete the task" });
    }
};