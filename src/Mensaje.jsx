import React from 'react';
import "./index.css";
// no me aparecia en App.jsx, por no tenia import el index.css por el estilo
function Mensaje() {
  return (
    <div className="mensaje">
      <p>puedes comensar presionando el BOTON Empleados</p>
    </div>
  );
}

export default Mensaje;