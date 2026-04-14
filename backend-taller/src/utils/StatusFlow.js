const validTransitions = {
  RECIBIDA: ["DIAGNOSTICO", "CANCELADA"],
  DIAGNOSTICO: ["EN_PROCESO", "CANCELADA"],
  EN_PROCESO: ["LISTA", "CANCELADA"],
  LISTA: ["ENTREGADA", "CANCELADA"],
  ENTREGADA: [],
  CANCELADA: [],
};

const canChangeStatus = (current, next) => {
  return validTransitions[current]?.includes(next);
};

module.exports = {
  validTransitions,
  canChangeStatus,
};