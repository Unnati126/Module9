const postModel = require("../models/postModel");

exports.createPost = (req, res) => {
  const { title, description, user } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!title || !description || !user || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  postModel.createPost(title, description, image, user, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Post created", postId: result.insertId });
  });
};

exports.likePost = (req, res) => {
  const { post_id, user_id } = req.body;

  if (!post_id || !user_id) {
    return res.status(400).json({ message: "Post ID and User ID are required" });
  }

  postModel.likePost(post_id, user_id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Post liked" });
  });
};

exports.commentPost = (req, res) => {
  const { post_id, user_id, comment } = req.body;

  if (!post_id || !user_id || !comment) {
    return res.status(400).json({ message: "All fields are required" });
  }

  postModel.commentPost(post_id, user_id, comment, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Comment added" });
  });
};
