const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WorkOrderStatusHistory = sequelize.define(
  "WorkOrderStatusHistory",
  {
    workOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fromStatus: {
      type: DataTypes.STRING,
      allowNull: true, // null en el primer registro
    },
    toStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    changedByUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      { fields: ["workOrderId", "createdAt"] }
    ],
  }
);

module.exports = WorkOrderStatusHistory;