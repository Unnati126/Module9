const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.post("/create", upload.single("image"), postController.createPost);
router.post("/like", postController.likePost);
router.post("/comment", postController.commentPost);

module.exports = router;