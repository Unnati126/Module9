const db = require("./db");

const createUser = (username, email, callback) => {
  const sql = "INSERT INTO users (username, email) VALUES (?, ?)";
  db.query(sql, [username, email], callback);
};

module.exports = { createUser };