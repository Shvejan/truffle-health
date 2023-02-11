// Create express app
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var db = require("./db/api.js");

var HTTP_PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/items", async (req, res) => {
  const medicalBills = await db.getAllPatients();
  res.status(200).json({ medicalBills });
});

app.post("/items", async (req, res) => {
  const result = await db.createNewPatient(req.body);
  res.status(201).json({ message: "success", id: result[0] });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});
