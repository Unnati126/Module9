const Post = require("../models/Post");

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      image: req.file?.filename || "",
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const likePost = async (req, res) => {
  const { postId, userId } = req.body;
  try {
    const post = await Post.findById(postId);
    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
    }
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const commentPost = async (req, res) => {
  const { postId, userId, text } = req.body;
  try {
    const post = await Post.findById(postId);
    post.comments.push({ user: userId, text });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createPost, likePost, commentPost };