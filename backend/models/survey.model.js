const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
