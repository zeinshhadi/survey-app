const express = require("express");
const router = express.Router();
const { addAnswer } = require("../controllers/answer.controllers");

router.post("/", addAnswer);

module.exports = router;
