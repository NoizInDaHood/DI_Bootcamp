import express from "express";
import { getTask, getTaskByID, createTask, updateTask, deleteTask } from "./controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Task API is working" });
});

router.get("/tasks", getTask);
router.get("/tasks/:id", getTaskByID);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
