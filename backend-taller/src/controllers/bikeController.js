const { Op } = require("sequelize");
const { Bike, Client } = require("../models");

// 🔥 Crear moto
const createBike = async (req, res) => {
  try {
    const { plate, brand, model, cylinder, clientId } = req.body;

    if (!plate || !brand || !model || !clientId) {
      return res.status(400).json({
        message: "Datos obligatorios faltantes",
      });
    }

    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({
        message: "El cliente no existe",
      });
    }

    const bike = await Bike.create({
      plate,
      brand,
      model,
      cylinder,
      clientId,
    });

    return res.status(201).json(bike);

  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ message: "La placa ya está registrada" });
    }
    return res.status(500).json({ message: error.message });
  }
};

// 🔍 Buscar motos por placa
const getBikes = async (req, res) => {
  try {
    const { plate } = req.query;

    const bikes = await Bike.findAll({
      where: plate
        ? { plate: { [Op.like]: `%${plate}%` } }
        : {},
      include: [Client],
    });

    return res.json(bikes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 🔍 Obtener moto por ID
const getBikeById = async (req, res) => {
  try {
    const { id } = req.params;

    const bike = await Bike.findByPk(id, {
      include: [Client],
    });

    if (!bike) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }

    return res.json(bike);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBike,
  getBikes,
  getBikeById,
};