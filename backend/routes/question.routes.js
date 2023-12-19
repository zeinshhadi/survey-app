const express = require("express");
const router = express.Router();
const { addQuestion } = require("../controllers/question.controllers");

router.post("/", addQuestion);

module.exports = router;
