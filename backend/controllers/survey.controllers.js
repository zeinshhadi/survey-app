const Survey = require("../models/survey.model");

const addSurvey = async (req, res) => {
  const { title } = req.body;

  try {
    const survey = await Survey.create({
      title,
      createdBy: req.user._id,
    });
    res.status(201).send({ survey });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { addSurvey };
