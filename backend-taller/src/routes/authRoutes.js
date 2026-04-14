const express = require("express");
const router = express.Router();
const { login, register, me } = require("../controllers/authController");
const { authenticate, authorize } = require("../middlewares/auth");

router.post("/login", login);
router.post("/register", authenticate, authorize("ADMIN"), register);
router.get("/me", authenticate, me);

module.exports = router;