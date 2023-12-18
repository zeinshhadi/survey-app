const Survey = require("../models/survey.model");

const addSurvey = async (req, res) => {
  const { question, answers } = req.body;
  if (req.user.roleId == 1) {
    try {
      const survey = await Survey.create({
        question,
        answers,
        userId: req.user._id,
      });
      res.status(200).send({ survey });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
};
module.exports = { addSurvey };
