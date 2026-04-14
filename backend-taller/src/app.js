const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use("/api", routes);

// ✅ middleware para rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({ message: `Ruta ${req.method} ${req.url} no encontrada` });
});

// ✅ middleware global de errores (debe tener 4 parámetros)
app.use((err, req, res, next) => {
  console.error("❌ ERROR GLOBAL:", err);

  // error de Sequelize: validación
  if (err.name === "SequelizeValidationError") {
    return res.status(400).json({
      message: err.errors.map((e) => e.message).join(", "),
    });
  }

  // error de Sequelize: campo único duplicado
  if (err.name === "SequelizeUniqueConstraintError") {
    return res.status(400).json({
      message: "Ya existe un registro con ese valor único",
    });
  }

  // error genérico
  return res.status(err.status || 500).json({
    message: err.message || "Error interno del servidor",
  });
});

module.exports = app;