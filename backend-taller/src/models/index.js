const Client = require("./Client");
const Bike = require("./Bike");
const WorkOrder = require("./WorkOrder");
const WorkOrderItem = require("./WorkOrderItems");
const User = require("./user");
const WorkOrderStatusHistory = require("./WorkOrderStatusHistory");

// Cliente - Moto
Client.hasMany(Bike, { foreignKey: "clientId" });
Bike.belongsTo(Client, { foreignKey: "clientId" });

// Moto - Orden
Bike.hasMany(WorkOrder, { foreignKey: "motoId" });
WorkOrder.belongsTo(Bike, { foreignKey: "motoId" });

// Orden - Items
WorkOrder.hasMany(WorkOrderItem, { foreignKey: "workOrderId", as: "Items" });
WorkOrderItem.belongsTo(WorkOrder, { foreignKey: "workOrderId" });

// Orden - Historial
WorkOrder.hasMany(WorkOrderStatusHistory, {
  foreignKey: "workOrderId",
  as: "StatusHistory",
});
WorkOrderStatusHistory.belongsTo(WorkOrder, { foreignKey: "workOrderId" });

// Usuario - Historial ✅ ambas direcciones
User.hasMany(WorkOrderStatusHistory, {
  foreignKey: "changedByUserId",
  as: "StatusChanges",
});
WorkOrderStatusHistory.belongsTo(User, {
  foreignKey: "changedByUserId",
  as: "ChangedBy",
});

module.exports = {
  Client,
  Bike,
  WorkOrder,
  WorkOrderItem,
  User,
  WorkOrderStatusHistory,
};