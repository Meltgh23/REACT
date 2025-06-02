import React, { useState } from 'react';

function EmpleadoCard({ nombre, cargo, departamento, email, onEliminar }) {
  const [verDetalles, setVerDetalles] = useState(false);

  return (
    <div className="empleado-card">
      <h3>{nombre}</h3>
      <p><strong>{cargo}</strong></p>
      <p>{departamento}</p>

      {verDetalles && <p><em>Email: {email}</em></p>}

      <button onClick={() => setVerDetalles(!verDetalles)}>
        {verDetalles ? 'Ocultar detalles' : 'Ver detalles'}
      </button>

      <button className="btn-eliminar" onClick={onEliminar}>
        Eliminar
      </button>
    </div>
  );
}

export default EmpleadoCard;