const Newspaper = require("../models/newspaper.model.js");
const mongoose = require("mongoose");

const getNewspapers = async (req, res) => {
  try {
    const newspapers = await Newspaper.find();
    res.status(200).json({ sucsess: true, data: newspapers });
  } catch (error) {
    console.error("Error in fetching newspapers:", error.message);
    res.status(500).json({ sucsess: false, massage: "server Error" });
  }
};

const createNewspaper = async (req, res) => {
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
};

const updateNewspaper = async (req, res) => {
  const { id } = req.params;
  const newspaper = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid Newspaper ID" });
  }

  try {
    const updatedNewspaper = await Newspaper.findByIdAndUpdate(id, newspaper, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedNewspaper });
  } catch (error) {
    console.error("Error in updating newspaper:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

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
