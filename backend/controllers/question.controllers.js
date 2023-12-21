const Question = require("../models/question.model");

const addQuestion = async (req, res) => {
  const { questionName, surveyId, questionType, options } = req.body;

  try {
    const question = await Question.create({
      questionName,
      surveyId,
      questionType,
      options,
    });
    res.status(201).send({ question });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
const getAllQuestions = async (req, res) => {
  const surveyId = req.params.id;
  try {
    const questions = await Question.find({ surveyId });
    res.status(200).send({ questions });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { addQuestion, getAllQuestions };
