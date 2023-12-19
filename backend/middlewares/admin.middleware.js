const adminMiddleware = async (req, res, next) => {
  const user = req.user;
  if (user.roleId === 1) {
    next();
  } else {
    res.status(403).send({ message: "Unauthorized" });
  }
};

module.exports = {
  adminMiddleware,
};
