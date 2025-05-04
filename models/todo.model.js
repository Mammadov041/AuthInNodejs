import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxlength: [30, "Title must be less than 30 characters"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters"],
    maxlength: [100, "Description must be less than 100 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
