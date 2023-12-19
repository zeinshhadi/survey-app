const Question = require("../models/question.model");

const addQuestion = async (req, res) => {
  const { questionName } = req.body;

  try {
    const question = await Question.create({
      questionName,
      //   createdBy: req.survey._id,
    });
    res.status(201).send({ question });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { addQuestion };
