const express = require("express");
const router = express.Router();
const {
  getNewspapers,
  createNewspaper,
  updateNewspaper,
  deleteNewspaper,
} = require("../controllers/newspaper.controller.js");

router.get("/", getNewspapers);
router.post("/", createNewspaper);
router.put("/:id", updateNewspaper);
router.delete("/:id", deleteNewspaper);

module.exports = router;
