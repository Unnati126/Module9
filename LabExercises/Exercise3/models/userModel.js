const db = require("../config/db");

// Create a new user
exports.createUser = (username, email, callback) => {
  const sql = "INSERT INTO users (username, email) VALUES (?, ?)";
  db.query(sql, [username, email], callback);
};