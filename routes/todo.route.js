import express from "express";
import { createTask } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.post("/create_task", createTask);
todoRouter.get("/getall_task");
todoRouter.get("/get_task/:id");
todoRouter.patch("/update_task/:id");
todoRouter.delete("/delete_task?:id");
