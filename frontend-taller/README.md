# Taller de Motos — Sistema de Control de Alistamientos

Sistema fullstack para gestión de órdenes de trabajo en un taller de motos.

**Stack:** Node.js + Express + Sequelize + MySQL + React + React Router + Axios

---

## Estructura del proyecto

```
/
├── backend-taller/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   ├── bikeController.js
│   │   │   ├── clientController.js
│   │   │   ├── workOrderController.js
│   │   │   └── WorkOrderItemController.js
│   │   ├── models/
│   │   │   ├── Bike.js
│   │   │   ├── Client.js
│   │   │   ├── index.js
│   │   │   ├── WorkOrder.js
│   │   │   └── WorkOrderItems.js
│   │   ├── routes/
│   │   │   ├── bikeRoutes.js
│   │   │   ├── clientRoutes.js
│   │   │   ├── index.js
│   │   │   ├── workOrderItemRoutes.js
│   │   │   └── workOrderRoutes.js
│   │   ├── utils/
│   │   │   └── StatusFlow.js
│   │   └── app.js
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── CreateOrder.jsx
    │   │   ├── OrderDetail.jsx
    │   │   └── Orders.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## Requisitos previos

- Node.js v18+
- MySQL 8+
- npm

---

## Variables de entorno

Crea un archivo `.env` en la raíz de `backend-taller/` con las siguientes variables:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=taller_motos
DB_USER=root
DB_PASSWORD=tu_password
```

---

## Instalación y ejecución

### Backend

```bash
# 1. Entrar a la carpeta
cd backend-taller

# 2. Instalar dependencias
npm install

# 3. Crear la base de datos en MySQL
# (Sequelize crea las tablas automáticamente al iniciar)
CREATE DATABASE taller_motos;

# 4. Iniciar el servidor
node server.js
```

El servidor queda corriendo en: `http://localhost:3000`

### Frontend

```bash
# 1. Entrar a la carpeta
cd frontend

# 2. Instalar dependencias
npm install

# 3. Iniciar la app
npm run dev
```

La app queda corriendo en: `http://localhost:5173`

---

## Endpoints disponibles

### Clientes
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/clients` | Crear cliente |
| GET | `/api/clients?search=` | Listar / buscar clientes |
| GET | `/api/clients/:id` | Obtener cliente por ID |

### Motos
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/bikes` | Crear moto |
| GET | `/api/bikes?plate=` | Listar / buscar por placa |
| GET | `/api/bikes/:id` | Obtener moto por ID |

### Órdenes de trabajo
| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/work-orders` | Crear orden |
| GET | `/api/work-orders?status=&plate=&page=&pageSize=` | Listar órdenes con filtros y paginación |
| GET | `/api/work-orders/:id` | Obtener orden por ID |
| PATCH | `/api/work-orders/:id/status` | Cambiar estado de la orden |
| POST | `/api/work-orders/:id/items` | Agregar ítem a la orden |
| DELETE | `/api/work-orders/items/:itemId` | Eliminar ítem |

---

## Flujo de estados de la orden

```
RECIBIDA → DIAGNOSTICO → EN_PROCESO → LISTA → ENTREGADA
```

- `CANCELADA` es posible desde cualquier estado excepto `ENTREGADA`
- Cualquier transición inválida retorna error `400`

---

## Notas adicionales

- La placa de la moto es **única** — no se puede registrar dos veces
- El total de la orden se recalcula automáticamente al agregar o eliminar ítems
- Los ítems tienen tipo `REPUESTO` o `MANO_OBRA`
- No se pueden agregar ítems a órdenes en estado `ENTREGADA` o `CANCELADA`
