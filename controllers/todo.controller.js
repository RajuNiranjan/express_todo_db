import { TodoModel } from "../models/todo.model.js";

export const createTask = async (req, res, next) => {
  try {
    const { task, isCompleted } = req.body;

    if (!task) {
      return res.status(400).json({ message: "task should not be empty" });
    }

    const newTask = TodoModel({
      task,
      isCompleted,
    });

    await newTask.save();

    return res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
