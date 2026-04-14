import { useState } from "react";
import API from "../services/api";

function CreateOrder() {
  const [plate, setPlate] = useState("");
  const [bike, setBike] = useState(null);
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");

  // 🔥 nuevos estados
  const [showCreate, setShowCreate] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  // 🔍 Buscar moto
  const handleSearch = async () => {
    try {
      const res = await API.get(`/bikes?plate=${plate}`);

      if (res.data.length > 0) {
        setBike(res.data[0]);
        setShowCreate(false);
        setError("");
      } else {
        setBike(null);
        setShowCreate(true); // 🔥 mostrar formulario
        setError("Moto no encontrada, puedes crearla");
      }
    } catch (err) {
      console.error(err);
      setError("Error buscando moto");
    }
  };

  // 🔥 Crear cliente + moto
  const handleCreateBike = async () => {
    try {
      if (!clientName || !clientPhone || !clientEmail || !brand || !model) {
        alert("Completa todos los campos");
        return;
      }

      // 1. crear cliente
      const clientRes = await API.post("/clients", {
        name: clientName,
        phone: clientPhone,
        email: clientEmail
      });

      // 2. crear moto
      const bikeRes = await API.post("/bikes", {
        plate,
        brand,
        model,
        clientId: clientRes.data.id,
      });

      setBike(bikeRes.data);
      setShowCreate(false);

      alert("Moto creada ✅");

    } catch (err) {
      console.error(err);
      alert("Error creando moto");
    }
  };

  // 🛠 Crear orden
  const handleCreateOrder = async () => {
    if (!description) {
      alert("Debes ingresar una descripción");
      return;
    }

    try {
      await API.post("/work-orders", {
        motoId: bike.id,
        faultDescription: description,
      });

      alert("Orden creada ✅");

      // limpiar
      setPlate("");
      setBike(null);
      setDescription("");

    } catch (err) {
      console.error(err);
      alert("Error creando orden");
    }
  };

  return (
    <div>
      <h2>Crear Orden</h2>

      <input
        placeholder="Placa"
        value={plate}
        onChange={(e) => {
        setPlate(e.target.value.toUpperCase());
        setBike(null);        // 🔥 limpiar moto anterior
        setShowCreate(false); // 🔥 ocultar formulario
        setError("");
      }}
      />

      <button onClick={handleSearch}>Buscar</button>

      {error && <p>{error}</p>}

      {/* 🔥 FORM CREAR CLIENTE + MOTO */}
      {showCreate && (
        <div>
          <h3>Crear Cliente y Moto</h3>

          <input
            placeholder="Nombre cliente"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <input
            placeholder="Teléfono"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
          />

          <input
            placeholder="Email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />

          <input
            placeholder="Marca"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />

          <input
            placeholder="Modelo"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />

          <button onClick={handleCreateBike}>
            Crear Moto
          </button>
        </div>
      )}

      {/* 🔥 SI YA HAY MOTO */}
      {bike && (
        <div>
          <h3>Moto encontrada</h3>

          <p>Placa: {bike.plate}</p>
          <p>Marca: {bike.brand}</p>
          <p>Modelo: {bike.model}</p>

          <textarea
            placeholder="Descripción de la falla"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br />

          <button onClick={handleCreateOrder}>
            Crear Orden
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateOrder;