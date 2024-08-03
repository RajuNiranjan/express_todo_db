import express from "express";
import "./db.js";
import dotenv from "dotenv";
import { todoRouter } from "./routes/todo.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => console.log(`server is running at port number ${PORT}`));

app.use("/api", todoRouter);
