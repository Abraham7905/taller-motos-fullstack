const express = require("express");
const router = express.Router();
const { createBike, getBikes, getBikeById } = require("../controllers/bikeController");
const { authenticate, authorize } = require("../middlewares/auth");

router.use(authenticate);

router.get("/", getBikes);
router.get("/:id", getBikeById);
router.post("/", authorize("ADMIN"), createBike);

module.exports = router;