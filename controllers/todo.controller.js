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

export const getAllTask = async (req, res, next) => {
  try {
    const task_list = await TodoModel.find();
    return res.status(200).json({ message: "All tasks", task_List: task_list });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { task, isCompleted } = req.body;

    const taskId = req.params.id;

    if (!taskId) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const updatedTask = await TodoModel.findByIdAndUpdate(
      taskId,
      { task, isCompleted },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(400).json({ message: "Task ID is required" });
    }

    const delete_task = await TodoModel.findByIdAndDelete(taskId);

    if (!delete_task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res
      .status(200)
      .json({ message: "task deleted successfully", task: delete_task });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
