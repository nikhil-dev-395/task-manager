const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a task title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a task description"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "owner is required"],
    },
    status: {
      type: String,
      enum: ["completed", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
