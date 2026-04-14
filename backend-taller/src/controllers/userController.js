const bcrypt = require("bcryptjs");
const { User } = require("../models");

// 📋 Listar usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password_hash"] },
      order: [["createdAt", "DESC"]],
    });
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 🔄 Cambiar rol
const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!["ADMIN", "MECANICO"].includes(role)) {
      return res.status(400).json({ message: "Rol inválido" });
    }

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // ✅ no permitir que el admin se cambie su propio rol
    if (user.id === req.user.id) {
      return res.status(400).json({ message: "No puedes cambiar tu propio rol" });
    }

    await user.update({ role });
    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ✅❌ Activar / desactivar usuario
const toggleActive = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // ✅ no permitir desactivarse a sí mismo
    if (user.id === req.user.id) {
      return res.status(400).json({ message: "No puedes desactivarte a ti mismo" });
    }

    await user.update({ active: !user.active });
    return res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, updateRole, toggleActive };