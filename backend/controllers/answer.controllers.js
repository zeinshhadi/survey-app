const Answer = require("../models/answer.model");

const addAnswer = async (req, res) => {
  try {
    const { questionId, userAnswer } = req.body;
    const newAnswer = await Answer.create({
      questionId,
      userAnswer,
    });

    res.status(201).json(newAnswer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

module.exports = { addAnswer };
