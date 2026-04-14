const jwt = require("jsonwebtoken");
const { User } = require("../models");

// ✅ verifica JWT e inyecta req.user
const authenticate = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const token = header.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(payload.id, {
      attributes: { exclude: ["password_hash"] },
    });

    if (!user || !user.active) {
      return res.status(401).json({ message: "Usuario inactivo o no existe" });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

// ✅ verifica rol
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "No tienes permiso para esta acción" });
  }
  next();
};

module.exports = { authenticate, authorize };