const mongoose = require("mongoose");

const connectToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URL);
  const connection = mongoose.connection;

  connection.on("error", (error) => {
    console.log("error connection to mongodb : ", error);
  });

  connection.once("open", () => {
    console.log("connected to Mongo..");
  });
};

module.exports = { connectToMongoDB };
