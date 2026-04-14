const express = require("express");
const router = express.Router();
const { getUsers, updateRole, toggleActive } = require("../controllers/userController");
const { authenticate, authorize } = require("../middlewares/auth");

// ✅ todos requieren JWT + ser ADMIN
router.use(authenticate);

router.get("/", authorize("ADMIN"), getUsers);
router.patch("/:id/role", authorize("ADMIN"), updateRole);
router.patch("/:id/toggle", authorize("ADMIN"), toggleActive);

module.exports = router;