const express = require("express");
const cors = require("cors");

const { connectToMongoDB } = require("./configs/mongoDB.configs");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.get("/hello", (req, res) => {
  console.log("hello!!!");
});

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.listen(8000, () => {
  console.log(`listening on port : ${8000}`);
  connectToMongoDB();
});
