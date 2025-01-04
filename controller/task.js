const allTask = (req, res) => {
  res.status(200).json({ title: "all Task" });
};

const createTask = (req, res) => {
    res.status(200).json({ title: "create Post" });
};
const oneTask = (req, res) => {
    res.status(200).json({ title: " one Task" });
};
const updateTask = (req, res) => {
    res.status(200).json({ title: "update Task" });
};
const deleteTask = (req, res) => {
    res.status(200).json({ title: "delete Task" });
};

module.exports = {
  allTask,
  createTask,
  oneTask,
  updateTask,
  deleteTask,
};
