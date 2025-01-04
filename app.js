const express = require("express");
const app = express();
const connectDB = require("./DB/connect");
require("dotenv").config();

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.TASK_MANAGER_URI);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start()

app.get("/", (req, res) => {
  res.status(200).json({ title: "Home" });
});
