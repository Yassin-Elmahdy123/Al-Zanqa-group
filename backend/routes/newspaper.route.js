const express = require("express");

const { getNewspapers} = require("../controllers/newspaper.controller.js")
const { createNewspaper} = require("../controllers/newspaper.controller.js")
const { updateNewspaper} = require("../controllers/newspaper.controller.js")
const { deleteNewspaper} = require("../controllers/newspaper.controller.js")

const router = express.Router();

router.get("/", getNewspapers);
router.post("/", createNewspaper);
router.put("/:id", updateNewspaper);
router.delete("/:id",deleteNewspaper);

module.exports = router;
