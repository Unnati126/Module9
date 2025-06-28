const db = require("../config/db");

exports.createUser = (req, res) => {
  const { username, email } = req.body;
  const sql = "INSERT INTO users (username, email) VALUES (?, ?)";
  db.query(sql, [username, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, username, email });
  });
};