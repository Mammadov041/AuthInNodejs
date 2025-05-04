import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [4, "Name must be at least 4 characthers"],
    maxlength: [10, "Name must be less than 10 characthers"],
  },
  surname: {
    type: String,
    required: [true, "Surname is required"],
    minlength: [6, "Surname must be at least 6 characters"],
    maxlength: [12, "Description must be less than 12 characthers"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exsists"],
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address`,
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characthers long"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
