import { Task } from "../models/task.js";

const allTask = async (req, res) => {
  try {
    const allTask = await Task.find();
    res.status(200).json({ allTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(201).json({ createTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const oneTask = async (req, res) => {
  try {
    const oneTask = await Task.findById(req.params);
    if (!oneTask) {
      return res.status(500).json({ msg: "No Task with id" });
    }
    res.status(200).json({ oneTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params);
    if (!deleteTask) {
      return res.status(500).json({ msg: "No Task with that id" });
    }
    res.status(200).json({ msg: "Task has been deleted" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateTask) {
      return res.status(500).json({ msg: "No Task with Id" });
    }
    res.status(200).json({ updateTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { allTask, createTask, oneTask, updateTask, deleteTask };
