const express = require("express");
const router = express.Router();
const { createClient, getClients, getClientById } = require("../controllers/clientController");
const { authenticate, authorize } = require("../middlewares/auth");

router.use(authenticate);

router.get("/", getClients);
router.get("/:id", getClientById);
router.post("/", authorize("ADMIN"), createClient);

module.exports = router;