import express from "express";
const app = express();
import { connectDB } from "./DB/connect.js";
import { router as task } from "./router/task.js";
import dotenv from "dotenv";
dotenv.config();

const port = 5000;
app.use("/api/v1/tasks", task);
app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.TASK_MANAGER_URI);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();

app.get("/", (req, res) => {
  res.status(200).json({ title: "Home" });
});
