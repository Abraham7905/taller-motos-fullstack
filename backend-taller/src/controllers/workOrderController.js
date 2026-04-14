const { Op } = require("sequelize");
const sequelize = require("../config/database");
const { WorkOrder, WorkOrderItem, Bike, Client, WorkOrderStatusHistory, User } = require("../models");
const { canChangeStatus } = require("../utils/StatusFlow");

const VALID_STATUSES = ["RECIBIDA", "DIAGNOSTICO", "EN_PROCESO", "LISTA", "ENTREGADA", "CANCELADA"];

// 🔥 Crear orden
const createWorkOrder = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { motoId, faultDescription } = req.body;

    if (!motoId || !faultDescription) {
      await transaction.rollback();
      return res.status(400).json({ message: "motoId y descripción son obligatorios" });
    }

    const bike = await Bike.findByPk(motoId);
    if (!bike) {
      await transaction.rollback();
      return res.status(404).json({ message: "La moto no existe" });
    }

    const workOrder = await WorkOrder.create(
      { motoId, faultDescription, status: "RECIBIDA", total: 0 },
      { transaction }
    );

    await WorkOrderStatusHistory.create(
      {
        workOrderId: workOrder.id,
        fromStatus: null,
        toStatus: "RECIBIDA",
        note: "Orden creada",
        changedByUserId: req.user.id,
      },
      { transaction }
    );

    await transaction.commit();
    return res.status(201).json(workOrder);
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ message: error.message });
  }
};

// 🔄 Cambiar estado
const updateStatus = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const { newStatus, note } = req.body;

    // ✅ validar que el estado recibido existe
    if (!VALID_STATUSES.includes(newStatus)) {
      await transaction.rollback();
      return res.status(400).json({ message: `Estado '${newStatus}' no válido` });
    }

    const order = await WorkOrder.findByPk(id);
    if (!order) {
      await transaction.rollback();
      return res.status(404).json({ message: "Orden no encontrada" });
    }

    // ✅ evitar cambio idempotente
    if (order.status === newStatus) {
      await transaction.rollback();
      return res.status(400).json({ message: `La orden ya se encuentra en estado ${newStatus}` });
    }

    if (!canChangeStatus(order.status, newStatus)) {
      await transaction.rollback();
      return res.status(400).json({
        message: `No se puede cambiar de ${order.status} a ${newStatus}`,
      });
    }

    // ✅ validar permisos por rol
    if (req.user.role === "MECANICO") {
      const allowed = ["DIAGNOSTICO", "EN_PROCESO", "LISTA"];
      if (!allowed.includes(newStatus)) {
        await transaction.rollback();
        return res.status(403).json({
          message: "No tienes permiso para cambiar a ese estado",
        });
      }
    }

    const fromStatus = order.status;
    await order.update({ status: newStatus }, { transaction });

    await WorkOrderStatusHistory.create(
      {
        workOrderId: id,
        fromStatus,
        toStatus: newStatus,
        note: note || null,
        changedByUserId: req.user.id,
      },
      { transaction }
    );

    await transaction.commit();
    return res.json({ message: "Estado actualizado", order });
  } catch (error) {
    await transaction.rollback();
    return res.status(500).json({ message: error.message });
  }
};

// 🔍 Obtener orden por ID
const getWorkOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await WorkOrder.findByPk(id, {
      include: [
        { model: WorkOrderItem, as: "Items" },
        { model: Bike, include: [{ model: Client }] },
      ],
    });

    if (!order) {
      return res.status(404).json({ message: "Orden no encontrada" });
    }

    return res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 📋 Listar órdenes con filtros y paginación
const getWorkOrders = async (req, res) => {
  try {
    const { status, plate, page = 1, pageSize = 10 } = req.query;

    const where = {};
    if (status) where.status = status;

    const include = [
      {
        model: Bike,
        where: plate ? { plate: { [Op.like]: `%${plate}%` } } : undefined,
        include: [Client],
      },
    ];

    const orders = await WorkOrder.findAndCountAll({
      where,
      include,
      limit: parseInt(pageSize),
      offset: (parseInt(page) - 1) * parseInt(pageSize),
    });

    return res.json({
      total: orders.count,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      data: orders.rows,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 📜 Historial de estados
const getStatusHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const history = await WorkOrderStatusHistory.findAll({
      where: { workOrderId: id },
      include: [
        {
          model: User,
          as: "ChangedBy",
          attributes: ["id", "name", "email", "role"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    return res.json(history);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createWorkOrder,
  updateStatus,
  getWorkOrderById,
  getWorkOrders,
  getStatusHistory,
};