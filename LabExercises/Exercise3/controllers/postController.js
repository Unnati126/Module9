const path = require("path");
const Post = require("../models/postModel");

exports.createPost = (req, res) => {
  const { title, description, user } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!title || !description || !user || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Post.createPost({ title, description, userId: user, image }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Post created", postId: result.insertId });
  });
};

exports.likePost = (req, res) => {
  const { postId, userId } = req.body;

  if (!postId || !userId) {
    return res.status(400).json({ message: "Post ID and User ID are required" });
  }

  Post.likePost(postId, userId, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Post liked" });
  });
};

exports.commentPost = (req, res) => {
  const { postId, userId, text } = req.body;

  if (!postId || !userId || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  Post.commentPost(postId, userId, text, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Comment added" });
  });
};
