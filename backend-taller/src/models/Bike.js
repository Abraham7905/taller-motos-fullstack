const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Bike = sequelize.define("Bike", {
  plate: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cylinder: {
    type: DataTypes.INTEGER,
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Bike;