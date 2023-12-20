const Question = require("../models/question.model");

const addQuestion = async (req, res) => {
  const { questionName, questionType, options } = req.body;
  console.log(req.params.survey._id);
  try {
    surveyId = req.params.survey._id;
    const question = await Question.create({
      questionName,
      questionType,
      options,
    });
    res.status(201).send({ question });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { addQuestion };
