const bcrypt = require("bcryptjs");
const { User } = require("../models");
const sequelize = require("../config/database");

async function seed() {
  await sequelize.sync();

  const existing = await User.findOne({ where: { email: "admin@taller.com" } });
  if (existing) {
    console.log("✅ Admin ya existe, no se creó duplicado");
    process.exit(0);
  }

  const password_hash = await bcrypt.hash("admin123", 10);

  await User.create({
    name: "Administrador",
    email: "admin@taller.com",
    password_hash,
    role: "ADMIN",
    active: true,
  });

  console.log("✅ Admin creado — email: admin@taller.com / pass: admin123");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Error en seed:", err.message);
  process.exit(1);
});