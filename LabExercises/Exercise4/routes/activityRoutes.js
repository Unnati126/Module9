const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activityController");

router.get("/", activityController.getActivityByType);

router.get("/key/:key", activityController.getActivityByKey);

module.exports = router;