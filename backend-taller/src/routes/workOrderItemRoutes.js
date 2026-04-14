const express = require("express");
const router = express.Router();
const { createItem, deleteItem } = require("../controllers/workOrderItemController");
const { authorize } = require("../middlewares/auth");

// MECANICO y ADMIN pueden crear ítems
router.post("/work-orders/:id/items", authorize("ADMIN", "MECANICO"), createItem);

// Solo ADMIN puede eliminar ítems
router.delete("/work-orders/items/:itemId", authorize("ADMIN"), deleteItem);

module.exports = router;