const db = require("./db");

// Create Post
function createPost(title, description, image, user, callback) {
  const sql = "INSERT INTO posts (title, description, image, user) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, description, image, user], callback);
}

// Like Post
function likePost(post_id, user_id, callback) {
  const sql = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
  db.query(sql, [post_id, user_id], callback);
}

// Comment Post
function commentPost(post_id, user_id, comment, callback) {
  const sql = "INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)";
  db.query(sql, [post_id, user_id, comment], callback);
}

module.exports = {
  createPost,
  likePost,
  commentPost
};
