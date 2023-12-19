const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ message: "Invalid username/password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).send({ message: "Invalid username/password" });
    }

    const { password: hashedPassword, _id, ...userDetails } = user.toJSON();

    const token = jwt.sign(
      {
        ...userDetails,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2 days" }
    );

    res.status(200).send({
      user: userDetails,
      token,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  const { username, password, firstName, lastName, roleId } = req.body;
  if (!username || !password || !firstName || !lastName || !roleId) {
    res.status(400).send({ message: "All fields are required" });
  }

  try {
    const user = new User({
      username,
      password,
      firstName,
      lastName,
      roleId,
    });

    await user.save();

    res.status(200).send({ user });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

module.exports = {
  login,
  register,
};
