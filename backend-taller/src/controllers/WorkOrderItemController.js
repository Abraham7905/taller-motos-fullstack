const { WorkOrderItem, WorkOrder } = require("../models");

// ➕ CREAR ITEM
const createItem = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔥 sanitizar datos (CLAVE para evitar errores raros)
    const type = String(req.body.type || "").trim();
    const description = String(req.body.description || "").trim();
    const count = Number(req.body.count);
    const unitValue = Number(req.body.unitValue);

    console.log("📦 BODY LIMPIO:", { type, description, count, unitValue });

    // 🔥 validaciones
    if (!description || count <= 0 || unitValue < 0) {
      return res.status(400).json({
        message: "Datos inválidos",
      });
    }

    // 🔍 verificar orden
    const order = await WorkOrder.findByPk(id);
    if (!order) {
      return res.status(404).json({
        message: "Orden no encontrada",
      });
    }

    // ➕ crear item
    const item = await WorkOrderItem.create({
      workOrderId: id,
      type,
      description,
      count,
      unitValue,
    });

    // 🔥 recalcular total
    const items = await WorkOrderItem.findAll({
      where: { workOrderId: id },
    });

    const total = items.reduce(
      (sum, i) => sum + i.count * i.unitValue,
      0
    );

    await order.update({ total });

    return res.status(201).json(item);

  } catch (error) {
    console.error("❌ ERROR CREATE ITEM:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ❌ ELIMINAR ITEM
const deleteItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    const item = await WorkOrderItem.findByPk(itemId);

    if (!item) {
      return res.status(404).json({
        message: "Item no encontrado",
      });
    }

    const workOrderId = item.workOrderId;

    await item.destroy();

    // 🔥 recalcular total
    const items = await WorkOrderItem.findAll({
      where: { workOrderId },
    });

    const total = items.reduce(
      (sum, i) => sum + i.count * i.unitValue,
      0
    );

    await WorkOrder.update(
      { total },
      { where: { id: workOrderId } }
    );

    return res.json({
      message: "Item eliminado",
    });

  } catch (error) {
    console.error("❌ ERROR DELETE ITEM:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createItem,
  deleteItem,
};