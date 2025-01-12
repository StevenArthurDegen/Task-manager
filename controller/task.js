import { Task } from "../models/task.js";

const allTask = async (req, res) => {
  const allTask = await Task.find();
  res.status(200).json({ allTask });
};

const createTask = async (req, res) => {
  res.status(200).json({ title: "create Post" });
};
const oneTask = async (req, res) => {
  res.status(200).json({ title: " one Task" });
};
const updateTask = async (req, res) => {
  res.status(200).json({ title: "update Task" });
};
const deleteTask = async (req, res) => {
  res.status(200).json({ title: "delete Task" });
};

export { allTask, createTask, oneTask, updateTask, deleteTask };
