/*const db = require("./db");

const createPost = (title, description, image, userId, callback) => {
  const sql = "INSERT INTO posts (title, description, image, user_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, image, userId], callback);
};

const likePost = (postId, userId, callback) => {
  const sql = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
  db.query(sql, [postId, userId], callback);
};

const commentPost = (postId, userId, comment, callback) => {
  const sql = "INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)";
  db.query(sql, [postId, userId, comment], callback);
};*/


const db = require("./db");

exports.createPost = (title, description, image, user, callback) => {
  const sql = "INSERT INTO posts (title, description, image, user) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, image, user], callback);
};

exports.likePost = (post_id, user_id, callback) => {
  const sql = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
  db.query(sql, [post_id, user_id], callback);
};

exports.commentPost = (post_id, user_id, comment, callback) => {
  const sql = "INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)";
  db.query(sql, [post_id, user_id, comment], callback);
};

module.exports = { createPost, likePost, commentPost };