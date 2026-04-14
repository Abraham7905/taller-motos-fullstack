require("./src/models");
const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log(" Conectado a MySQL");

    await sequelize.sync();
    console.log(" Tablas sincronizadas");

    app.listen(PORT, () => {
      
      console.log(` Servidor en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(" Error:", error.message);
  }
}

start();