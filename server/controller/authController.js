const User = require("../models/User");
const { generateToken } = require("../services/jwtService");

exports.login = async (req, res) => {
  // ... (user validation logic with database)
  if (userIsValid) {
    const token = generateToken({ id: user._id, email: user.email }); //
    res.json({ message: "Login successful!", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
