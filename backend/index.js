const express = require("express");
const cors = require("cors");

const { connectToMongoDB } = require("./configs/mongoDB.configs");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const surveyRoutes = require("./routes/survey.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { adminMiddleware } = require("./middlewares/admin.middleware");
app.use("/survey", authMiddleware, adminMiddleware, surveyRoutes);

const questionRoutes = require("./routes/question.routes");

app.use("/question", authMiddleware, adminMiddleware, questionRoutes);

const answerRoutes = require("./routes/answer.routes");
app.use("/answer", authMiddleware, answerRoutes);

app.listen(8000, () => {
  console.log(`listening on port : ${8000}`);
  connectToMongoDB();
});
