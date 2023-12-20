const express = require("express");
const router = express.Router();
const { getAllSurveys, addSurvey } = require("../controllers/survey.controllers");
const { adminMiddleware } = require("../middlewares/admin.middleware");

router.post("/", adminMiddleware, addSurvey);
router.get("/", getAllSurveys);

module.exports = router;
