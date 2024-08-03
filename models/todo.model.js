import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export const TodoModel = mongoose.model("Todo", todoSchema);
