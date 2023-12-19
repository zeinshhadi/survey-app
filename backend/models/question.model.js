const mongoose = require("mongoose");

const questionSurvey = mongoose.Schema(
  {
    questionName: {
      type: String,
      required: true,
    },

    surveyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Survey",
      required: true,
    },
    questionType: {
      type: String,
      required: true,
    },

    options: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSurvey);

module.exports = Question;
