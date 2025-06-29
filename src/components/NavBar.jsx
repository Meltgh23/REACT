import React from 'react';
import { Link } from "react-router-dom";
import Mensaje from "../Mensaje";
import "../index.css";
function NavBar() {
  return ( //aqui habia intentado poner el div mensaje pero donde le ponia aparecia el mensaje 
  
    <nav>
      <h1>Bienvenido al Sistema RR.HH</h1>
      
      <ul>
       
       <li><Link to="/empleados">Empleados</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        
      </ul>
    </nav>
    
  );
}

export default NavBar;