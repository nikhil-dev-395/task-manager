const Task = require("../models/task.models");

const createTask = async (req, res) => {
  try {
    const { title, description, owner, status } = req.body;
    const task = await Task.create({ title, description, owner, status });
    res.status(201).json({ success: true, task });
  } catch (error) {
    console.log("error at creating a task", error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && createTask" });
  }
};

/* TODO :  make this in search option , if we need in future */
const GetTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOne({ title });
    res.status(201).json({ success: true, task });
  } catch (error) {
    console.log("error at creating a task", error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && createTask" });
  }
};

/* getting all the task from the db , with their all data  */
const GetAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({ task });
  } catch (error) {
    console.log("error at creating a task", error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && GetAllTask" });
  }
};

/* updated the task status only , thats why we are using PATCH method of rest api */
const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, task });
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && UpdateTask" });
  }
};

/* delete the task if we don't want to use */

const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, task });
  } catch (error) {
    console.log(error);
    res
      .status(501)
      .json({ success: false, message: "internal server error && DeleteTask" });
  }
};

module.exports = { createTask, GetTask, GetAllTask, UpdateTask, DeleteTask };
