import express from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  searchQuery,
  updateTask,
} from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.post("/create_task", createTask);
todoRouter.get("/getall_task", getAllTask);
todoRouter.get("/search_task", searchQuery);
todoRouter.patch("/update_task/:id", updateTask);
todoRouter.delete("/delete_task/:id", deleteTask);
