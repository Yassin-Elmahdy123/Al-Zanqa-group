const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./.config/db.js");
const Newspaper = require("./models/newspaper.model.js");

dotenv.config();

const app = express();

app.use(express.json());

app.post("/api/newspapers", async (req, res) => {
  const newspaper = req.body;

  if (!newspaper.name || !newspaper.price || !newspaper.date) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all fields" });
  }

  const newNewspaper = new Newspaper(newspaper);

  try {
    await newNewspaper.save();
    res.status(201).json({ success: true, data: newNewspaper });
  } catch (error) {
    console.error("Error in creating newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/newspapers/:id", async (req, res) => {
  const newspaperId = req.params.id;
  try {
    await newspaper.findByIdAndDelete(newspaperId);
    res.status(200).json({ success: true, message: "Newspaper deleted" });
  } catch (error) {
    console.error("Error in deleting newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(5000, () => {
  connectDB();
});
