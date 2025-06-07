import React, { useState } from 'react';
import EmpleadoCard from './components/EmpleadoCard';
import Mensaje from './Mensaje';
import NavBar from './components/NavBar';
import './index.css';

function App() {
  const [empleados, setEmpleados] = useState([
    {
      id: 1,
      nombre: "Ana Torres",
      cargo: "Desarrolladora Frontend",
      departamento: "Tecnología",
      email: "ana.torres@hola.com"
    },
    {
      id: 2,
      nombre: "Luis Gómez",
      cargo: "Diseñador UX/UI",
      departamento: "Diseño",
      email: "luis.gomez@hola.com"
    },
    {
      id: 3,
      nombre: "María Ruiz",
      cargo: "Analista de Datos",
      departamento: "BI",
      email: "maria.ruiz@hola.com"
    }
  ]);

  const eliminarEmpleado = (id) => {
    setEmpleados(empleados.filter(emp => emp.id !== id));
  };

return (
  <div className="app-container">
    <h1 class="text-3xl font-bold underline">Hola Melvin</h1>

    <NavBar />
    <Mensaje texto="Bienvenido al sistema de recursos humanos" />
    
    <div className="tabla-container">
      <table className="empleado-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map(emp => (
            <tr key={emp.id}>
              <td>{emp.nombre}</td>
              <td>{emp.cargo}</td>
              <td>{emp.departamento}</td>
              <td>{emp.email}</td>
              <td>
                <button onClick={() => eliminarEmpleado(emp.id)} className="btn-eliminar">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);


}

export default App