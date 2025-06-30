const express = require("express");
const multer = require("multer");
const path = require("path");
const postController = require("../controllers/postController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage, fileFilter });

router.post("/create", upload.single("image"), postController.createPost);

router.post("/like", postController.likePost);
router.post("/comment", postController.commentPost);

module.exports = router;