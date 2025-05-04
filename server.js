import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import productsRoute from "./routes/products.route.js";
import usersRoute from "./routes/users.route.js";
import todosRoute from "./routes/todos.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);
app.use("/api/auth", authRoute);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully ", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
  connectDB();
});
