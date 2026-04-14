import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

const STATUS_COLORS = {
  RECIBIDA:    { bg: "#1a1f2e", text: "#60a5fa", dot: "#3b82f6" },
  DIAGNOSTICO: { bg: "#1e1a2e", text: "#a78bfa", dot: "#8b5cf6" },
  EN_PROCESO:  { bg: "#1f1a0e", text: "#fbbf24", dot: "#f59e0b" },
  LISTA:       { bg: "#0f1f14", text: "#4ade80", dot: "#22c55e" },
  ENTREGADA:   { bg: "#111",    text: "#6b7280", dot: "#4b5563" },
  CANCELADA:   { bg: "#1f1010", text: "#f87171", dot: "#ef4444" },
};

const s = {
  page: { minHeight: "100vh", background: "#0f0f0f" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "32px 24px" },
  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  title: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 36,
    letterSpacing: 1,
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
  newBtn: {
    background: "#f97316",
    border: "none",
    borderRadius: 4,
    padding: "10px 22px",
    color: "#0f0f0f",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 14,
    letterSpacing: 2,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.15s",
  },
  filters: {
    display: "flex",
    gap: 12,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  input: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "8px 14px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    minWidth: 180,
    transition: "border-color 0.15s",
  },
  select: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "8px 14px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 8,
    overflow: "hidden",
  },
  th: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    padding: "12px 16px",
    textAlign: "left",
    borderBottom: "1px solid #2e2e2e",
    background: "#141414",
  },
  td: {
    padding: "13px 16px",
    borderBottom: "1px solid #222",
    fontSize: 14,
    color: "#f0ece4",
    verticalAlign: "middle",
  },
  row: {
    cursor: "pointer",
    transition: "background 0.1s",
  },
  plate: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: 1,
    color: "#f97316",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    marginTop: 16,
  },
  pageBtn: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "6px 14px",
    color: "#f0ece4",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer",
    transition: "border-color 0.15s",
  },
  pageInfo: {
    fontSize: 13,
    color: "#888880",
    fontFamily: "'Barlow Condensed', sans-serif",
  },
  empty: {
    padding: "48px 0",
    textAlign: "center",
    color: "#888880",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 18,
    letterSpacing: 1,
  },
  loading: {
    padding: "48px 0",
    textAlign: "center",
    color: "#888880",
  },
};

function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.CANCELADA;
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: c.bg,
      color: c.text,
      borderRadius: 20,
      padding: "3px 10px",
      fontSize: 12,
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700,
      letterSpacing: 1,
      textTransform: "uppercase",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot, display: "inline-block" }} />
      {status}
    </span>
  );
}

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [filterStatus, setFilterStatus] = useState("");
  const [filterPlate, setFilterPlate] = useState("");

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ page, pageSize });
      if (filterStatus) params.append("status", filterStatus);
      if (filterPlate) params.append("plate", filterPlate);
      const res = await API.get(`/work-orders?${params}`);
      setOrders(res.data.data);
      setTotal(res.data.total);
    } catch (err) {
      alert("Error cargando órdenes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, [page, filterStatus]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchOrders();
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>
        <div style={s.header}>
          <div>
            <div style={s.title}>Órdenes de trabajo</div>
            <div style={s.subtitle}>{total} órdenes en total</div>
          </div>
          <button
            style={s.newBtn}
            onClick={() => navigate("/create")}
            onMouseEnter={(e) => e.target.style.background = "#ea6b0a"}
            onMouseLeave={(e) => e.target.style.background = "#f97316"}
          >
            + Nueva orden
          </button>
        </div>

        {/* Filtros */}
        <form onSubmit={handleSearch} style={s.filters}>
          <input
            style={s.input}
            placeholder="Buscar por placa..."
            value={filterPlate}
            onChange={(e) => setFilterPlate(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = "#f97316"}
            onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
          />
          <select
            style={s.select}
            value={filterStatus}
            onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
          >
            <option value="">Todos los estados</option>
            <option value="RECIBIDA">RECIBIDA</option>
            <option value="DIAGNOSTICO">DIAGNOSTICO</option>
            <option value="EN_PROCESO">EN_PROCESO</option>
            <option value="LISTA">LISTA</option>
            <option value="ENTREGADA">ENTREGADA</option>
            <option value="CANCELADA">CANCELADA</option>
          </select>
          <button
            type="submit"
            style={{ ...s.newBtn, background: "#222", color: "#f0ece4", border: "1px solid #2e2e2e" }}
            onMouseEnter={(e) => e.target.style.borderColor = "#f97316"}
            onMouseLeave={(e) => e.target.style.borderColor = "#2e2e2e"}
          >
            Buscar
          </button>
        </form>

        {/* Tabla */}
        {loading ? (
          <div style={s.loading}>Cargando...</div>
        ) : (
          <>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>#</th>
                  <th style={s.th}>Placa</th>
                  <th style={s.th}>Cliente</th>
                  <th style={s.th}>Estado</th>
                  <th style={s.th}>Fecha entrada</th>
                  <th style={s.th}>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={s.empty}>Sin órdenes</td>
                  </tr>
                ) : (
                  orders.map((o) => (
                    <tr
                      key={o.id}
                      style={s.row}
                      onClick={() => navigate(`/orders/${o.id}`)}
                      onMouseEnter={(e) => e.currentTarget.style.background = "#222"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <td style={{ ...s.td, color: "#888880", fontFamily: "'Barlow Condensed', sans-serif" }}>
                        #{o.id}
                      </td>
                      <td style={s.td}>
                        <span style={s.plate}>{o.Bike?.plate}</span>
                      </td>
                      <td style={s.td}>{o.Bike?.Client?.name || "—"}</td>
                      <td style={s.td}><StatusBadge status={o.status} /></td>
                      <td style={{ ...s.td, color: "#888880" }}>
                        {new Date(o.entryDate || o.createdAt).toLocaleDateString("es-CO")}
                      </td>
                      <td style={{ ...s.td, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#f97316" }}>
                        ${Number(o.total).toLocaleString("es-CO")}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Paginación */}
            {totalPages > 1 && (
              <div style={s.pagination}>
                <span style={s.pageInfo}>Página {page} de {totalPages}</span>
                <button
                  style={s.pageBtn}
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  onMouseEnter={(e) => e.target.style.borderColor = "#f97316"}
                  onMouseLeave={(e) => e.target.style.borderColor = "#2e2e2e"}
                >
                  ← Anterior
                </button>
                <button
                  style={s.pageBtn}
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  onMouseEnter={(e) => e.target.style.borderColor = "#f97316"}
                  onMouseLeave={(e) => e.target.style.borderColor = "#2e2e2e"}
                >
                  Siguiente →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Orders;
