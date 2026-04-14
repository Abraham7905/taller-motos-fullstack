import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const styles = {
  nav: {
    background: "#141414",
    borderBottom: "1px solid #2e2e2e",
    padding: "0 32px",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 22,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#f97316",
  },
  logoSpan: {
    color: "#f0ece4",
  },
  links: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  link: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#888880",
    padding: "6px 14px",
    borderRadius: 4,
    transition: "color 0.15s, background 0.15s",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: 16,
  },
  userBadge: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    color: "#888880",
  },
  rolePill: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 20,
    padding: "2px 10px",
    fontSize: 11,
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#f97316",
  },
  logoutBtn: {
    background: "transparent",
    border: "1px solid #2e2e2e",
    color: "#888880",
    borderRadius: 4,
    padding: "5px 14px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    transition: "border-color 0.15s, color 0.15s",
    cursor: "pointer",
  },
};

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return null;

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        Taller<span style={styles.logoSpan}>Pro</span>
      </div>

      <div style={styles.links}>
        <Link
          to="/"
          style={styles.link}
          onMouseEnter={e => { e.target.style.color = "#f0ece4"; e.target.style.background = "#222"; }}
          onMouseLeave={e => { e.target.style.color = "#888880"; e.target.style.background = "transparent"; }}
        >
          Órdenes
        </Link>
        {user.role === "ADMIN" && (
          <Link
            to="/users"
            style={styles.link}
            onMouseEnter={e => { e.target.style.color = "#f0ece4"; e.target.style.background = "#222"; }}
            onMouseLeave={e => { e.target.style.color = "#888880"; e.target.style.background = "transparent"; }}
          >
            Usuarios
          </Link>
        )}
      </div>

      <div style={styles.right}>
        <div style={styles.userBadge}>
          <span>{user.name}</span>
          <span style={styles.rolePill}>{user.role}</span>
        </div>
        <button
          style={styles.logoutBtn}
          onClick={handleLogout}
          onMouseEnter={e => { e.target.style.borderColor = "#f97316"; e.target.style.color = "#f97316"; }}
          onMouseLeave={e => { e.target.style.borderColor = "#2e2e2e"; e.target.style.color = "#888880"; }}
        >
          Salir
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
