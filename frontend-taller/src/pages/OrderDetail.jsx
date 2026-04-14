import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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

const validTransitions = {
  RECIBIDA:    ["DIAGNOSTICO", "CANCELADA"],
  DIAGNOSTICO: ["EN_PROCESO", "CANCELADA"],
  EN_PROCESO:  ["LISTA", "CANCELADA"],
  LISTA:       ["ENTREGADA", "CANCELADA"],
  ENTREGADA:   [],
  CANCELADA:   [],
};
const MECANICO_ALLOWED = ["DIAGNOSTICO", "EN_PROCESO", "LISTA"];

const s = {
  page: { minHeight: "100vh", background: "#0f0f0f" },
  container: { maxWidth: 960, margin: "0 auto", padding: "32px 24px" },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    color: "#888880",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    marginBottom: 24,
    transition: "color 0.15s",
    background: "none",
    border: "none",
  },
  headerRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 28,
    flexWrap: "wrap",
    gap: 12,
  },
  title: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 36,
    textTransform: "uppercase",
    color: "#f0ece4",
    lineHeight: 1,
  },
  titleId: { color: "#f97316" },
  total: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 28,
    color: "#f97316",
    textAlign: "right",
  },
  totalLabel: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    textAlign: "right",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 24,
  },
  card: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    padding: "20px 24px",
  },
  cardTitle: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: "#888880",
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: "1px solid #2e2e2e",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
    fontSize: 14,
  },
  infoLabel: { color: "#888880" },
  infoVal: { color: "#f0ece4", fontWeight: 500, textAlign: "right" },
  tabs: {
    display: "flex",
    gap: 2,
    marginBottom: 20,
    borderBottom: "1px solid #2e2e2e",
  },
  tab: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    background: "none",
    color: "#888880",
    borderBottom: "2px solid transparent",
    transition: "color 0.15s, border-color 0.15s",
    marginBottom: -1,
  },
  tabActive: {
    color: "#f97316",
    borderBottom: "2px solid #f97316",
  },
  statusSection: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    padding: "20px 24px",
    marginBottom: 20,
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  noteInput: {
    flex: 1,
    minWidth: 200,
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "8px 14px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.15s",
  },
  statusBtn: {
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "8px 16px",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  itemsTable: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 16,
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
    padding: "11px 16px",
    borderBottom: "1px solid #222",
    fontSize: 14,
    color: "#f0ece4",
  },
  addItemCard: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    padding: "20px 24px",
  },
  addGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: 12,
    marginBottom: 14,
  },
  addInput: {
    background: "#0f0f0f",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "8px 12px",
    color: "#f0ece4",
    fontSize: 14,
    outline: "none",
    width: "100%",
    transition: "border-color 0.15s",
  },
  addBtn: {
    background: "#f97316",
    border: "none",
    borderRadius: 4,
    padding: "9px 20px",
    color: "#0f0f0f",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 800,
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.15s",
  },
  deleteBtn: {
    background: "transparent",
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "4px 10px",
    color: "#888880",
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: 12,
    cursor: "pointer",
    transition: "all 0.15s",
  },
  historyItem: {
    display: "flex",
    gap: 16,
    marginBottom: 0,
    position: "relative",
  },
  historyLine: {
    width: 1,
    background: "#2e2e2e",
    position: "absolute",
    left: 7,
    top: 20,
    bottom: -20,
  },
  historyDot: {
    width: 15,
    height: 15,
    borderRadius: "50%",
    border: "2px solid #f97316",
    background: "#0f0f0f",
    flexShrink: 0,
    marginTop: 3,
    zIndex: 1,
  },
  historyContent: {
    background: "#1a1a1a",
    border: "1px solid #2e2e2e",
    borderRadius: 6,
    padding: "14px 18px",
    flex: 1,
    marginBottom: 12,
  },
  historyTransition: {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    color: "#f0ece4",
    marginBottom: 4,
  },
  historyMeta: {
    fontSize: 12,
    color: "#888880",
  },
  historyNote: {
    marginTop: 8,
    fontSize: 13,
    color: "#f0ece4",
    fontStyle: "italic",
    background: "#0f0f0f",
    borderRadius: 4,
    padding: "6px 10px",
  },
};

function StatusBadge({ status }) {
  const c = STATUS_COLORS[status] || STATUS_COLORS.CANCELADA;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: c.bg, color: c.text, borderRadius: 20,
      padding: "3px 10px", fontSize: 12,
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.dot }} />
      {status}
    </span>
  );
}

function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [statusLoading, setStatusLoading] = useState(false);
  const [tab, setTab] = useState("detail");
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [note, setNote] = useState("");

  const [itemDesc, setItemDesc] = useState("");
  const [itemCount, setItemCount] = useState(1);
  const [itemValue, setItemValue] = useState(0);
  const [itemType, setItemType] = useState("REPUESTO");

  const fetchOrder = async () => {
    try {
      const res = await API.get(`/work-orders/${id}`);
      setOrder(res.data);
    } catch {
      alert("Error cargando la orden");
    } finally {
      setLoading(false);
    }
  };

  const fetchHistory = async () => {
    setHistoryLoading(true);
    try {
      const res = await API.get(`/work-orders/${id}/history`);
      setHistory(res.data);
    } catch {
      alert("Error cargando historial");
    } finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => { fetchOrder(); }, [id]);
  useEffect(() => { if (tab === "history") fetchHistory(); }, [tab]);

  const handleChangeStatus = async (newStatus) => {
    if (!window.confirm(`¿Cambiar estado a ${newStatus}?`)) return;
    setStatusLoading(true);
    try {
      await API.patch(`/work-orders/${id}/status`, { newStatus, note });
      setNote("");
      await fetchOrder();
    } catch (err) {
      alert(err.response?.data?.message || "Error cambiando estado");
    } finally {
      setStatusLoading(false);
    }
  };

  const handleAddItem = async () => {
    if (!itemDesc || itemCount <= 0 || itemValue < 0) {
      alert("Completa correctamente los datos");
      return;
    }
    try {
      await API.post(`/work-orders/${id}/items`, {
        type: itemType, description: itemDesc,
        count: itemCount, unitValue: itemValue,
      });
      await fetchOrder();
      setItemDesc(""); setItemCount(1); setItemValue(0); setItemType("REPUESTO");
    } catch {
      alert("Error al agregar item");
    }
  };

  const handleDeleteItem = async (itemId) => {
    if (!window.confirm("¿Eliminar este item?")) return;
    try {
      await API.delete(`/work-orders/items/${itemId}`);
      await fetchOrder();
    } catch {
      alert("Error eliminando item");
    }
  };

  if (loading) return (
    <div style={s.page}><Navbar />
      <div style={{ ...s.container, textAlign: "center", paddingTop: 80, color: "#888880" }}>Cargando...</div>
    </div>
  );
  if (!order) return (
    <div style={s.page}><Navbar />
      <div style={{ ...s.container, textAlign: "center", paddingTop: 80, color: "#888880" }}>Orden no encontrada</div>
    </div>
  );

  const items = order?.Items || order?.items || [];
  let nextStatuses = validTransitions[order.status] || [];
  if (user?.role === "MECANICO") nextStatuses = nextStatuses.filter(s => MECANICO_ALLOWED.includes(s));

  return (
    <div style={s.page}>
      <Navbar />
      <div style={s.container}>

        <button
          style={s.back}
          onClick={() => navigate("/")}
          onMouseEnter={(e) => e.target.style.color = "#f97316"}
          onMouseLeave={(e) => e.target.style.color = "#888880"}
        >
          ← Volver
        </button>

        <div style={s.headerRow}>
          <div>
            <div style={s.title}>
              Orden <span style={s.titleId}>#{order.id}</span>
            </div>
            <div style={{ marginTop: 8 }}><StatusBadge status={order.status} /></div>
          </div>
          <div>
            <div style={s.totalLabel}>Total</div>
            <div style={s.total}>${Number(order.total).toLocaleString("es-CO")}</div>
          </div>
        </div>

        {/* Info cards */}
        <div style={s.grid}>
          <div style={s.card}>
            <div style={s.cardTitle}>Cliente</div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Nombre</span>
              <span style={s.infoVal}>{order.Bike?.Client?.name || "—"}</span>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Teléfono</span>
              <span style={s.infoVal}>{order.Bike?.Client?.phone || "—"}</span>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Email</span>
              <span style={s.infoVal}>{order.Bike?.Client?.email || "—"}</span>
            </div>
          </div>
          <div style={s.card}>
            <div style={s.cardTitle}>Moto</div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Placa</span>
              <span style={{ ...s.infoVal, color: "#f97316", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 17 }}>
                {order.Bike?.plate}
              </span>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Marca</span>
              <span style={s.infoVal}>{order.Bike?.brand || "—"}</span>
            </div>
            <div style={s.infoRow}>
              <span style={s.infoLabel}>Modelo</span>
              <span style={s.infoVal}>{order.Bike?.model || "—"}</span>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div style={{ ...s.card, marginBottom: 24 }}>
          <div style={s.cardTitle}>Descripción de falla</div>
          <p style={{ color: "#f0ece4", fontSize: 14, lineHeight: 1.7 }}>{order.faultDescription}</p>
        </div>

        {/* Tabs */}
        <div style={s.tabs}>
          {["detail", "history"].map((t) => (
            <button
              key={t}
              style={{ ...s.tab, ...(tab === t ? s.tabActive : {}) }}
              onClick={() => setTab(t)}
            >
              {t === "detail" ? "Items" : "Historial"}
            </button>
          ))}
        </div>

        {/* TAB ITEMS */}
        {tab === "detail" && (
          <>
            {/* Cambio de estado */}
            {nextStatuses.length > 0 && (
              <div style={s.statusSection}>
                <div style={{ ...s.cardTitle, marginBottom: 14 }}>Cambiar estado</div>
                <div style={s.statusRow}>
                  <input
                    style={s.noteInput}
                    placeholder="Nota opcional..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = "#f97316"}
                    onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
                  />
                  {nextStatuses.map((st) => {
                    const c = STATUS_COLORS[st];
                    return (
                      <button
                        key={st}
                        style={{ ...s.statusBtn, color: c?.text || "#f0ece4", borderColor: c?.dot || "#2e2e2e" }}
                        onClick={() => handleChangeStatus(st)}
                        disabled={statusLoading}
                        onMouseEnter={(e) => { e.target.style.background = c?.bg || "#222"; }}
                        onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
                      >
                        {statusLoading ? "..." : st}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Items */}
            <table style={s.itemsTable}>
              <thead>
                <tr>
                  <th style={s.th}>Tipo</th>
                  <th style={s.th}>Descripción</th>
                  <th style={s.th}>Cant.</th>
                  <th style={s.th}>Valor unit.</th>
                  <th style={s.th}>Subtotal</th>
                  {user?.role === "ADMIN" && <th style={s.th}></th>}
                </tr>
              </thead>
              <tbody>
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={6} style={{ ...s.td, textAlign: "center", color: "#888880", padding: "32px 0" }}>
                      Sin items
                    </td>
                  </tr>
                ) : (
                  items.map((item) => (
                    <tr key={item.id}>
                      <td style={s.td}>
                        <span style={{
                          background: item.type === "REPUESTO" ? "#1a1f2e" : "#1f1a0e",
                          color: item.type === "REPUESTO" ? "#60a5fa" : "#fbbf24",
                          borderRadius: 4, padding: "2px 8px",
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: 12, fontWeight: 700, letterSpacing: 1,
                        }}>
                          {item.type}
                        </span>
                      </td>
                      <td style={s.td}>{item.description}</td>
                      <td style={{ ...s.td, color: "#888880" }}>{item.count}</td>
                      <td style={{ ...s.td, color: "#888880" }}>${Number(item.unitValue).toLocaleString("es-CO")}</td>
                      <td style={{ ...s.td, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, color: "#f97316" }}>
                        ${(item.count * item.unitValue).toLocaleString("es-CO")}
                      </td>
                      {user?.role === "ADMIN" && (
                        <td style={s.td}>
                          <button
                            style={s.deleteBtn}
                            onClick={() => handleDeleteItem(item.id)}
                            onMouseEnter={(e) => { e.target.style.borderColor = "#ef4444"; e.target.style.color = "#ef4444"; }}
                            onMouseLeave={(e) => { e.target.style.borderColor = "#2e2e2e"; e.target.style.color = "#888880"; }}
                          >
                            Eliminar
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* Agregar item */}
            {!["ENTREGADA", "CANCELADA"].includes(order.status) && (
              <div style={s.addItemCard}>
                <div style={s.cardTitle}>Agregar item</div>
                <div style={s.addGrid}>
                  <select
                    style={s.addInput}
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                  >
                    <option value="REPUESTO">REPUESTO</option>
                    <option value="MANO_OBRA">MANO_OBRA</option>
                  </select>
                  <input
                    style={s.addInput}
                    placeholder="Descripción"
                    value={itemDesc}
                    onChange={(e) => setItemDesc(e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = "#f97316"}
                    onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
                  />
                  <input
                    style={s.addInput}
                    type="number"
                    placeholder="Cantidad"
                    value={itemCount}
                    onChange={(e) => setItemCount(Number(e.target.value))}
                    onFocus={(e) => e.target.style.borderColor = "#f97316"}
                    onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
                  />
                  <input
                    style={s.addInput}
                    type="number"
                    placeholder="Valor unitario"
                    value={itemValue}
                    onChange={(e) => setItemValue(Number(e.target.value))}
                    onFocus={(e) => e.target.style.borderColor = "#f97316"}
                    onBlur={(e) => e.target.style.borderColor = "#2e2e2e"}
                  />
                </div>
                <button
                  style={s.addBtn}
                  onClick={handleAddItem}
                  onMouseEnter={(e) => e.target.style.background = "#ea6b0a"}
                  onMouseLeave={(e) => e.target.style.background = "#f97316"}
                >
                  + Agregar
                </button>
              </div>
            )}
          </>
        )}

        {/* TAB HISTORIAL */}
        {tab === "history" && (
          <div style={{ paddingTop: 8 }}>
            {historyLoading && <p style={{ color: "#888880" }}>Cargando historial...</p>}
            {!historyLoading && history.length === 0 && (
              <p style={{ color: "#888880", fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16 }}>Sin historial</p>
            )}
            {!historyLoading && history.map((h, i) => (
              <div key={h.id} style={{ ...s.historyItem, paddingLeft: 28, position: "relative" }}>
                {i < history.length - 1 && (
                  <div style={{ position: "absolute", left: 7, top: 18, bottom: -12, width: 1, background: "#2e2e2e" }} />
                )}
                <div style={{ ...s.historyDot, position: "absolute", left: 0, top: 4 }} />
                <div style={s.historyContent}>
                  <div style={s.historyTransition}>
                    <span style={{ color: "#888880" }}>{h.fromStatus ?? "—"}</span>
                    {" → "}
                    <span style={{ color: STATUS_COLORS[h.toStatus]?.text || "#f0ece4" }}>{h.toStatus}</span>
                  </div>
                  <div style={s.historyMeta}>
                    {new Date(h.createdAt).toLocaleString("es-CO")}
                    {" · "}
                    <span style={{ color: "#f0ece4" }}>{h.ChangedBy?.name}</span>
                    {" · "}
                    <span style={{ color: "#f97316" }}>{h.ChangedBy?.role}</span>
                  </div>
                  {h.note && <div style={s.historyNote}>"{h.note}"</div>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;
