const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createPost, likePost, commentPost } = require("../controllers/postController");

// Setup multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Routes
router.post("/create", upload.single("image"), createPost);
router.post("/like", likePost);
router.post("/comment", commentPost);

module.exports = router;