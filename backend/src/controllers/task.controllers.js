const Task = require("../models/task.models");

const createTask = async (req, res) => {
  try {
    const { title, description, owner, status } = req.body;
    const task = await Task.create({ title, description, owner, status });
    res.status(201).json({ task });
  } catch (error) {
    console.log("error at creating a task", error);
    res.status(501).json({ message: "internal server error && createTask" });
  }
};

/* TODO :  make this in search option , if we need in future */
const GetTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findOne({ title });
    res.status(201).json({ task });
  } catch (error) {
    console.log("error at creating a task", error);
    res.status(501).json({ message: "internal server error && createTask" });
  }
};
const GetAllTask = async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.find({ title });
    res.status(201).json({ task });
  } catch (error) {
    console.log("error at creating a task", error);
    res.status(501).json({ message: "internal server error && GetAllTask" });
  }
};
const UpdateTask = async (req, res) => {};
const DeleteTask = async (req, res) => {};

module.exports = { createTask, GetTask, GetAllTask, UpdateTask, DeleteTask };
