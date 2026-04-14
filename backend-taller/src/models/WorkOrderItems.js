const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const WorkOrderItem = sequelize.define(
  "WorkOrderItems",
  {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    count: DataTypes.INTEGER,
    unitValue: DataTypes.FLOAT,
    workOrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
);
module.exports = WorkOrderItem;