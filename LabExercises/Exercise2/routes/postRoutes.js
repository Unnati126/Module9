const express = require('express');
const router = express.Router();
const multer = require("multer");
const { createPost, likePost, commentPost } = require('../controllers/postController');

const upload = multer({ dest: "uploads/" });

router.post("/create", upload.single("image"), createPost);
router.post("/like", likePost);
router.post("/comment", commentPost);

module.exports = router;