import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import CreateOrder from "./pages/CreateOrder";
import OrderDetail from "./pages/OrderDetail";
import Users from "./pages/Users";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* pública */}
          <Route path="/login" element={<Login />} />

          {/* protegidas — cualquier usuario autenticado */}
          <Route path="/" element={
            <PrivateRoute roles={["ADMIN", "MECANICO"]}>
              <Orders />
            </PrivateRoute>
          } />
          <Route path="/create" element={
            <PrivateRoute roles={["ADMIN", "MECANICO"]}>
              <CreateOrder />
            </PrivateRoute>
          } />
          <Route path="/orders/:id" element={
            <PrivateRoute roles={["ADMIN", "MECANICO"]}>
              <OrderDetail />
            </PrivateRoute>
          } />

          {/* solo ADMIN */}
          <Route path="/users" element={
            <PrivateRoute roles={["ADMIN"]}>
              <Users />
            </PrivateRoute>
          } />

          {/* cualquier ruta desconocida → inicio */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;