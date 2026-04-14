const express = require("express");
const router = express.Router();

const clientRoutes = require("./clientRoutes");
const bikeRoutes = require("./bikeRoutes");
const workOrderRoutes = require("./workOrderRoutes");
const  workOrderItemRoutes  = require("./workOrderItemRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
router.use("/clients", clientRoutes);
router.use("/bikes", bikeRoutes);
router.use("/work-orders", workOrderRoutes);
router.use("/", workOrderItemRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);

module.exports = router;



