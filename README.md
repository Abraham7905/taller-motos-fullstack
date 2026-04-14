# 🏍️ Taller-Motos-Fullstack

Sistema de gestión de órdenes de trabajo para taller de motos. Desarrollado como prueba técnica Full Stack con Node.js, Express, MySQL, Sequelize y React.

**Autor:** Abraham  
**Stack:** Node.js · Express · MySQL · Sequelize · React · JWT

---

## 📁 Estructura del proyecto

```
taller-motos-fullstack/
├── backend-taller/   → API REST (Node.js + Express + Sequelize)
├── frontend/         → Interfaz de usuario (React + Vite)
└── README.md
```

---

## ⚙️ Requisitos previos

- Node.js >= 18
- MySQL >= 8
- npm >= 9

---

## 🗄️ Base de datos

1. Crea una base de datos vacía en MySQL:
```sql
CREATE DATABASE taller_motos;
```

2. Ejecuta el script de estructura:
```
backend-taller/database/schema.sql
```

---

## 🚀 Backend

### Instalación

```bash
cd backend-taller
npm install
```

### Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_password
DB_NAME=taller_motos
JWT_SECRET=una_clave_secreta_fuerte
```

### Ejecución

```bash
# Desarrollo
npm run dev

# Producción
npm start
```

### Seed — crear usuario administrador

```bash
node src/seeders/adminSeed.js
```

Esto crea el usuario inicial:
- **Email:** admin@taller.com
- **Password:** admin123

> ⚠️ Se recomienda cambiar la contraseña después del primer login.

---

## 💻 Frontend

### Instalación

```bash
cd frontend
npm install
```

### Variables de entorno

Crea un archivo `.env` en la carpeta `frontend`:

```
VITE_API_URL=http://localhost:3000/api
```

### Ejecución

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🔐 Roles y permisos

| Acción | ADMIN | MECANICO |
|---|---|---|
| Ver órdenes | ✅ | ✅ |
| Crear órdenes | ✅ | ❌ |
| Agregar items | ✅ | ✅ |
| Eliminar items | ✅ | ❌ |
| Cambiar estado (DIAGNOSTICO, EN_PROCESO, LISTA) | ✅ | ✅ |
| Cambiar estado (ENTREGADA, CANCELADA) | ✅ | ❌ |
| Gestión de usuarios | ✅ | ❌ |

---

## 🔄 Flujo de estados de una orden

```
RECIBIDA → DIAGNOSTICO → EN_PROCESO → LISTA → ENTREGADA
```
> Desde cualquier estado (excepto ENTREGADA) se puede pasar a **CANCELADA**.

---

## 📡 Endpoints principales

### Auth
| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/auth/login | Iniciar sesión |
| POST | /api/auth/register | Crear usuario (solo ADMIN) |
| GET | /api/auth/me | Perfil del usuario actual |

### Clientes
| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/clients | Crear cliente |
| GET | /api/clients | Listar clientes |
| GET | /api/clients/:id | Obtener cliente |

### Motos
| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/bikes | Crear moto |
| GET | /api/bikes | Listar motos |
| GET | /api/bikes/:id | Obtener moto |

### Órdenes
| Método | Endpoint | Descripción |
|---|---|---|
| POST | /api/work-orders | Crear orden |
| GET | /api/work-orders | Listar órdenes (filtros + paginación) |
| GET | /api/work-orders/:id | Detalle de orden |
| PATCH | /api/work-orders/:id/status | Cambiar estado |
| GET | /api/work-orders/:id/history | Historial de estados |
| POST | /api/work-orders/:id/items | Agregar item |
| DELETE | /api/work-orders/items/:itemId | Eliminar item |

### Usuarios
| Método | Endpoint | Descripción |
|---|---|---|
| GET | /api/users | Listar usuarios (solo ADMIN) |
| PATCH | /api/users/:id/role | Cambiar rol (solo ADMIN) |
| PATCH | /api/users/:id/toggle | Activar/desactivar (solo ADMIN) |

---

## 🧱 Modelo de datos

```
Client ──< Bike ──< WorkOrder ──< WorkOrderItem
                        │
                        └──< WorkOrderStatusHistory >── User
```

---

*Desarrollado por Abraham — Prueba Técnica Full Stack, PAVAS S.A.S*
