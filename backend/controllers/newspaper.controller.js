const Newspaper = require("../models/newspaper.model.js");
const mongoose = require("mongoose");

// GET ALL
const getNewspapers = async (req, res) => {
  try {
    const newspapers = await Newspaper.find();
    res.status(200).json({ success: true, newspapers });
  } catch (error) {
    console.error("Error in fetching newspapers:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// CREATE
const createNewspaper = async (req, res) => {
  const newspaper = req.body;

  if (!newspaper.name || !newspaper.price || !newspaper.date || !newspaper.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all fields (name, price, date, image)",
    });
  }

  const newNewspaper = new Newspaper(newspaper);

  try {
    await newNewspaper.save();
    res.status(201).json({
      success: true,
      message: "Newspaper created successfully",
      newspaper: newNewspaper,
    });
  } catch (error) {
    console.error("Error in creating newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// UPDATE
const updateNewspaper = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Newspaper ID" });
  }

  try {
    const updatedNewspaper = await Newspaper.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedNewspaper });
  } catch (error) {
    console.error("Error in updating newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// DELETE
const deleteNewspaper = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Newspaper ID" });
  }

  try {
    const deletedItem = await Newspaper.findByIdAndDelete(id);

    if (!deletedItem) {
      return res
        .status(404)
        .json({ success: false, message: "Newspaper not found" });
    }

    res.status(200).json({ success: true, message: "Newspaper deleted" });
  } catch (error) {
    console.error("Error in deleting newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  getNewspapers,
  createNewspaper,
  updateNewspaper,
  deleteNewspaper,
};
