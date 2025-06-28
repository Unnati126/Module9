const db = require("../config/db");

// Create Post
exports.createPost = (data, callback) => {
  const { title, description, userId, image } = data;
  const sql = "INSERT INTO posts (title, description, user_id, image) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, userId, image], callback);
};

// Like Post
exports.likePost = (postId, userId, callback) => {
  const sql = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
  db.query(sql, [postId, userId], callback);
};

// Comment on Post
exports.commentPost = (postId, userId, text, callback) => {
  const sql = "INSERT INTO comments (post_id, user_id, text) VALUES (?, ?, ?)";
  db.query(sql, [postId, userId, text], callback);
};