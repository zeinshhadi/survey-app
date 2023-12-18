const mongoose = require("mongoose");
const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: 255,
    required: true,
  },
  correct: {
    type: Boolean,
    required: true,
  },
});
const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    maxlength: 1000,
    required: true,
  },
  answers: { type: [answerSchema], required: true },

  solved: {
    type: Boolean,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
