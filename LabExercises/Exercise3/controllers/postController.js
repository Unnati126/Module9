const postModel = require("../models/postModel");

exports.createPost = (req, res) => {
  const { title, description, user } = req.body;
  const image = req.file ? req.file.filename : null;

  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  if (!title || !description || !user || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  postModel.createPost(title, description, image, user, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Post created", postId: result.insertId });
  });
};

exports.likePost = (req, res) => {
  const { postId, userId } = req.body;
  postModel.likePost(postId, userId, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Post liked" });
  });
};

exports.commentPost = (req, res) => {
  const { postId, userId, comment } = req.body;
  postModel.commentPost(postId, userId, comment, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Comment added" });
  });
};