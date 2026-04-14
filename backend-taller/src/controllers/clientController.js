const { Client } = require("../models");

const createClient = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        message: "Name y phone son obligatorios",
      });
    }

    const client = await Client.create({
      name,
      phone,
      email,
    });

    return res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const { Op } = require("sequelize");

// 🔍 Obtener clientes (con búsqueda opcional)
const getClients = async (req, res) => {
  try {
    const { search } = req.query;

    const clients = await Client.findAll({
      where: search
  ? {
      [Op.or]: [
        { name: { [Op.like]: `%${search}%` } },
        { phone: { [Op.like]: `%${search}%` } },
      ],
    }
  : {},
    });

    return res.json(clients);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getClientById = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }

    return res.json(client);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createClient,
  getClients,
  getClientById
};