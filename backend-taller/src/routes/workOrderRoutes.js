const express = require("express");
const router = express.Router();
const {
  createWorkOrder,
  updateStatus,
  getWorkOrderById,
  getWorkOrders,
  getStatusHistory,
} = require("../controllers/workOrderController");
const { authenticate, authorize } = require("../middlewares/auth");

// ✅ todos los endpoints requieren JWT
router.use(authenticate);

router.get("/", getWorkOrders);
router.get("/:id", getWorkOrderById);
router.get("/:id/history", getStatusHistory);
router.post("/", authorize("ADMIN"), createWorkOrder);
router.patch("/:id/status", authorize("ADMIN", "MECANICO"), updateStatus);

module.exports = router;