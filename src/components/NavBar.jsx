import React from 'react';
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <h1>Bienvenido al Sistema RR.HH</h1>
      <ul>
       
       <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/empleados">Empleados</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;