const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WorkOrder = sequelize.define("WorkOrder", {
  entryDate: DataTypes.DATE,
  faultDescription: DataTypes.TEXT,
  status: DataTypes.STRING,
  total: DataTypes.FLOAT,
});

module.exports = WorkOrder;