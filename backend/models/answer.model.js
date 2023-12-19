const mongoose = require("mongoose");

const answerSurvey = mongoose.Schema({
  userAnswers: {
    type: String,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
});

const Answer = mongoose.model("Answer", answerSurvey);

module.exports = Answer;
