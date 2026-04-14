import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const s = {
  page: { minHeight: "100vh", background: "#0f0f0f" },
  container: { maxWidth: 960, margin: "0 auto", padding: "32px 24px" },
  header: { marginBottom: 28 },
  title: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 36,
    textTransform: "uppercase",
    color: "#f0ece4",
    lineHeight: 1,
  },
  subtitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 14,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    marginTop: 4,
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "340px 1fr",
    gap: 24,
    alignItems: "start",
  },
  card: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    padding: "24px",
  },
  cardTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    marginBottom: 20,
    paddingBottom: 12,
    borderBottom: "1px solid #2e2e2e",
  },
  label: {
    display: "block",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "9px 14px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    marginBottom: 14,
    transition: "border-color 0.15s",
  },
  select: {
    width: "100%",
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "9px 14px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    marginBottom: 14,
    cursor: "pointer",
  },
  submitBtn: {
    width: "100%",
    background: "#f97316",
    border: "none",
    borderRadius: 4,
    padding: "11px",
    color: "#0f0f0f",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: 2,
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: 4,
    transition: "background 0.15s",
  },
  error: {
    background: "#1f1010",
    border: "1px solid #7f1d1d",
    borderRadius: 4,
    color: "#fca5a5",
    padding: "10px 14px",
    fontSize: 13,
    marginBottom: 16,
  },
  success: {
    background: "#0f1f14",
    border: "1px solid #14532d",
    borderRadius: 4,
    color: "#4ade80",
    padding: "10px 14px",
    fontSize: 13,
    marginBottom: 16,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    overflow: "hidden",
  },
  th: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    padding: "11px 16px",
    textAlign: "left",
    borderBottom: "1px solid #2e2e2e",
    background: "#141414",
  },
  td: {
    padding: "12px 16px",
    borderBottom: "1px solid #222",
    fontSize: 14,
    color: "#f0ece4",
    verticalAlign: "middle",
  },
  roleSelect: {
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "5px 10px",
    color: "#f0ece4",
    fontSize: 13,
    cursor: "pointer",
    outline: "none",
  },
  toggleBtn: {
    background: "transparent",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "5px 12px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.15s",
  },
};

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("MECANICO");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/users");
      setUsers(res.data);
    } catch {
      alert("Error cargando usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    setFormError(""); setFormSuccess("");
    setFormLoading(true);
    try {
      await API.post("/auth/register", { name, email, password, role });
      setName(""); setEmail(""); setPassword(""); setRole("MECANICO");
      setFormSuccess("Usuario creado correctamente");
      await fetchUsers();
    } catch (err) {
      setFormError(err.response?.data?.message || "Error creando usuario");
    } finally {
      setFormLoading(false);
    }
  };

  const handleRoleChange = async (id, newRole) => {
    try {
      await API.patch(`/users/${id}/role`, { role: newRole });
      await fetchUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Error cambiando rol");
    }
  };

  const handleToggle = async (id) => {
    try {
      await API.patch(`/users/${id}/toggle`);
      await fetchUsers();
    } catch (err) {
      alert(err.response?.data?.message || "Error actualizando usuario");
    }
  };

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <div style={s.header}>
          <div style={s.title}>Usuarios</div>
          <div style={s.subtitle}>{users.length} usuarios registrados</div>
        </div>

        <div style={s.twoCol}>
          {/* Formulario */}
          <div style={s.card}>
            <div style={s.cardTitle}>Nuevo usuario</div>
            {formError && <div style={s.error}>{formError}</div>}
            {formSuccess && <div style={s.success}>{formSuccess}</div>}
            <form onSubmit={handleCreate}>
              <label style={s.label}>Nombre</label>
              <input style={s.input} value={name} onChange={(e) => setName(e.target.value)} required
                onFocus={(e) => e.target.style.borderColor = "#f97316"}
                onBlur={(e) => e.target.style.borderColor = "#2e2e2e"} />

              <label style={s.label}>Email</label>
              <input style={s.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                onFocus={(e) => e.target.style.borderColor = "#f97316"}
                onBlur={(e) => e.target.style.borderColor = "#2e2e2e"} />

              <label style={s.label}>Contraseña</label>
              <input style={s.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                onFocus={(e) => e.target.style.borderColor = "#f97316"}
                onBlur={(e) => e.target.style.borderColor = "#2e2e2e"} />

              <label style={s.label}>Rol</label>
              <select style={s.select} value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="MECANICO">MECANICO</option>
                <option value="ADMIN">ADMIN</option>
              </select>

              <button
                type="submit"
                style={s.submitBtn}
                disabled={formLoading}
                onMouseEnter={(e) => e.target.style.background = "#ea6b0a"}
                onMouseLeave={(e) => e.target.style.background = "#f97316"}
              >
                {formLoading ? "Creando..." : "Crear usuario"}
              </button>
            </form>
          </div>

          {/* Tabla */}
          <div>
            {loading ? (
              <p style={{ color: "#888880" }}>Cargando...</p>
            ) : (
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>Nombre</th>
                    <th style={s.th}>Email</th>
                    <th style={s.th}>Rol</th>
                    <th style={s.th}>Estado</th>
                    <th style={s.th}></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td style={s.td}>{u.name}</td>
                      <td style={{ ...s.td, color: "#888880" }}>{u.email}</td>
                      <td style={s.td}>
                        <select
                          style={s.roleSelect}
                          value={u.role}
                          onChange={(e) => handleRoleChange(u.id, e.target.value)}
                        >
                          <option value="MECANICO">MECANICO</option>
                          <option value="ADMIN">ADMIN</option>
                        </select>
                      </td>
                      <td style={s.td}>
                        <span style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 12, fontWeight: 700, letterSpacing: 1,
                          color: u.active ? "#4ade80" : "#888880",
                        }}>
                          <span style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: u.active ? "#22c55e" : "#4b5563",
                          }} />
                          {u.active ? "ACTIVO" : "INACTIVO"}
                        </span>
                      </td>
                      <td style={s.td}>
                        <button
                          style={{
                            ...s.toggleBtn,
                            color: u.active ? "#f87171" : "#4ade80",
                            borderColor: u.active ? "#7f1d1d" : "#14532d",
                          }}
                          onClick={() => handleToggle(u.id)}
                          onMouseEnter={(e) => e.target.style.background = u.active ? "#1f1010" : "#0f1f14"}
                          onMouseLeave={(e) => e.target.style.background = "transparent"}
                        >
                          {u.active ? "Desactivar" : "Activar"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
