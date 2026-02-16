const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != "undefinded") {
      const token = bearerHeader.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      console.log(user);
      req.token = user;
      next();
    } else {
      res.status(401).json({ message: "No Token Provided" });
    }
  } catch (err) {
    res.status(403).json({ message: "Invalid or expired token"});
  }
};

module.exports = auth
