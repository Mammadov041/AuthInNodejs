import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controllers/todos.controller.js";

const router = express.Router();

// GET method to fetch all todos
router.get("/", getTodos);

// GET method to fetch a single product by ID
router.get("/todo/:id", getTodoById);

// POST method to create a new todo
router.post("/add/", createTodo);

// PUT method to update an existing product by ID
router.put("/edit/:id", updateTodo);

// DELETE method to delete a product by ID
router.delete("/delete/:id", deleteTodo);

export default router;
