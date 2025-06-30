/*const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const postController = require("../controllers/postController");

// Storage setup
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "uploads/");
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/create", upload.single("image"), postController.createPost);

module.exports = router;*/

const express = require("express");
const multer = require("multer");
const path = require("path");
const postController = require("../controllers/postController");

const router = express.Router();

// ✅ Storage Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// ✅ File Filter (Optional)
const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png"];
  if (allowed.includes(file.mimetype)) cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage, fileFilter });

// ✅ Route for creating post with image
router.post("/create", upload.single("image"), postController.createPost);

router.post("/like", postController.likePost);
router.post("/comment", postController.commentPost);

module.exports = router;