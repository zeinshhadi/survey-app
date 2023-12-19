const Answer = require("../models/answer.model");

const addAnswer = async (req, res) => {
  try {
    const { questionId, text } = req.body;
    const newAnswer = new Answer({ questionId, text });
    await newAnswer.save();
    res.status(201).json(newAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

module.exports = { addAnswer };
