import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";

const s = {
  page: {
    minHeight: "100vh",
    background: "#0f0f0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 8,
    padding: "48px 40px",
  },
  logoArea: {
    marginBottom: 36,
    textAlign: "center",
  },
  logo: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 32,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: "#f97316",
  },
  logoSub: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 4,
    textTransform: "uppercase",
    color: "#888880",
    marginTop: 4,
  },
  divider: {
    width: 40,
    height: 2,
    background: "#f97316",
    margin: "16px auto 0",
  },
  label: {
    display: "block",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "10px 14px",
    color: "#f0ece4",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.15s",
    marginBottom: 20,
  },
  btn: {
    width: "100%",
    background: "#f97316",
    border: "none",
    borderRadius: 4,
    padding: "12px",
    color: "#0f0f0f",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 16,
    letterSpacing: 2,
    textTransform: "uppercase",
    cursor: "pointer",
    marginTop: 8,
    transition: "background 0.15s",
  },
  error: {
    background: "#1f1010",
    border: "1px solid #7f1d1d",
    borderRadius: 4,
    color: "#fca5a5",
    padding: "10px 14px",
    fontSize: 13,
    marginBottom: 20,
  },
};

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/auth/login", { email, password });
      login(res.data.token, res.data.user);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={s.logoArea}>
          <div style={s.logo}>TallerPro</div>
          <div style={s.logoSub}>Sistema de gestión</div>
          <div style={s.divider} />
        </div>

        {error && <div style={s.error}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <label style={s.label}>Email</label>
          <input
            style={s.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#f97316"}
            onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
            required
            autoFocus
          />

          <label style={s.label}>Contraseña</label>
          <input
            style={s.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#f97316"}
            onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
            required
          />

          <button
            type="submit"
            style={s.btn}
            disabled={loading}
            onMouseEnter={(e) => e.target.style.background = "#ea6b0a"}
            onMouseLeave={(e) => e.target.style.background = "#f97316"}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
