const express = require("express");
const router = express.Router();
const { allTask, createTask, OneTask, updateTask, deleteTask} = require('../controller/task')

router.route("/").get(allTask).post(createTask);
router.route("/:id").get(OneTask).patch(updateTask).delete(deleteTask);
