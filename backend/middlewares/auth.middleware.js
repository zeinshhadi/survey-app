const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    res.status(403).send("Forbidden");
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ username: decoded.username }).select("-password");
      req.user = user;
      next();
    } catch (error) {
      res.status(403).send("Forbidden");
    }
  }
};

module.exports = {
  authMiddleware,
};
