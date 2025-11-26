const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./.config/db.js");
const Newspaper = require("./models/newspaper.model.js");

dotenv.config();

const app = express();

app.post("/newspapers", (req, res) => {
  const newspaper = req.body;

  if (!newspaper.name || !newspaper.price || !newspaper.date) {
    return res.status(400).json({ success: false, message: "please provide all fields"});
  }

  const newNewspaper = new Newspaper(newspaper);

  try {
    await newNewspaper.save();
    res.status(201).json({ success: true, data: newNewspaper });
  } catch (error) {
    console.error("Error in create newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5001");
});
