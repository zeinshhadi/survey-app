const Answer = require("../models/answer.model");

const addAnswer = async (req, res) => {
  try {
    const { questionId, userAnswers } = req.body;

    const newAnswers = questionId.map(async (id, index) => {
      const newAnswer = await Answer.create({
        questionId: id,
        userAnswers: userAnswers[index],
        userId: req.user._id,
      });
      return newAnswer;
    });

    res.status(201).json(newAnswers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
};

module.exports = { addAnswer };
