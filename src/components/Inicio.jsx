import React from 'react';
import { useAuth } from '../context/AuthContext';
import "../index.css";
// este le pedi a chat de como le podria hacer para que me aparaciera segun el nombre del usuario pues sentia que no era
//el adecuado poner nadamas como texto h1 hola melvin, el me hizo la estructura y yo ya la adapte

function AppContainer() {
  const { user } = useAuth();

  return (
    <div className="app-container">
      <h1 className="mensaje">
        Hola {user?.displayName || "Usuario"} //aqui puse en caso de solo iniciar con imail/contraseña:Usuario de lo contrario poner datos de perfil
      </h1>
    </div>
  );
}

export default AppContainer;