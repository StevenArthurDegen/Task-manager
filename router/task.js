import express from "express";
const router = express.Router();
import {
  allTask,
  createTask,
  oneTask,
  updateTask,
  deleteTask,
} from "../controller/task.js";

router.route("/").get(allTask).post(createTask);
router.route("/:_id").get(oneTask).patch(updateTask).delete(deleteTask);

export { router };
