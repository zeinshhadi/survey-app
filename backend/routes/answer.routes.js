const express = require("express");
const { addAnswer } = require("../controllers/answer.controllers");
const router = express.Router();

router.post("/", addAnswer);

module.exports = router;
