const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
  res.status(200).json({ title: "Home" });
});
