const express = require("express");
const router = express.Router();
const { addSurvey } = require("../controllers/survey.controllers");

router.post("/", addSurvey);

module.exports = router;
