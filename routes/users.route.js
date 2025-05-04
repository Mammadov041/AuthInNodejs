import express from "express";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  editUserById,
} from "../controllers/users.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import { changeUserRoleToAdmin } from "../controllers/users.controller.js";

const router = express.Router();

// Any logged-in user can view or update their own account
router.get("/", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/edit/:id", protectRoute, editUserById);

// Only admins can delete a user by id
router.delete("/delete/:id", protectRoute, checkAdmin, deleteUserById);

// Only admins can change users' roles to admin :
router.post(
  "/change-role-to-admin/:id",
  protectRoute,
  checkAdmin,
  changeUserRoleToAdmin
);

export default router;

// This code defines a set of RESTful API routes for managing users in an Express application.
// It includes routes for fetching all users, fetching a single user by ID, creating a new user, updating an existing user, and deleting a user. The data is stored in an in-memory array for demonstration purposes. In a real application, you would typically use a database to store and manage user data.
// The routes are defined using Express Router, and each route handles the corresponding HTTP method (GET, POST, PUT, PATCH, DELETE) for user management. The code also includes error handling for cases where a user is not found.
// The routes are exported for use in the main application file, where they can be mounted on a specific path (e.g., "/api"). This modular approach helps keep the code organized and maintainable.
