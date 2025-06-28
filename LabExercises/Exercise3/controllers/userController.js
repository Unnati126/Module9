const userModel = require("../models/userModel");

exports.createUser = (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ message: "All fields required" });
  }
  userModel.createUser(username, email, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "User created", userId: result.insertId });
  });
};