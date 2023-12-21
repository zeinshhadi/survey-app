const express = require("express");
const router = express.Router();
const { addQuestion } = require("../controllers/question.controllers");
const { getAllQuestions } = require("../controllers/question.controllers");
const { adminMiddleware } = require("../middlewares/admin.middleware");

router.post("/", adminMiddleware, addQuestion);
router.get("/:id", getAllQuestions);
module.exports = router;
