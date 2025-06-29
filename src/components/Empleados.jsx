import React, { useState } from 'react';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import '../index.css';

function Empleado() {//aqui son los estodos 
    const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [correo, setCorreo] = useState("");
  const [empleados, setEmpleados] = useState([]);
//funcion para guardar empleados
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "empleados"), {
        nombre,
        puesto,
        correo,
      });
      alert("Empleado guardado correctamente");
      setNombre("");
      setPuesto("");
      setCorreo("");
    } catch (error) {
      console.error("Error al guardar empleado:", error);
      alert("Hubo un error al guardar");
    }
  };
useEffect(() => {
  const q = query(collection(db, "empleados"), orderBy("nombre", "asc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const datos = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setEmpleados(datos);
  });

  return () => unsubscribe();
}, []);
//creo que aqui los re
  return (
    <div className="empleados-container">
      <h2>Registrar Empleado</h2>
      <form onSubmit={handleSubmit} className="empleados-form">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Puesto"
          value={puesto}
          onChange={(e) => setPuesto(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <button type="submit">Guardar</button>
      </form>
      <h3>Lista de Empleados</h3>
<ul className="lista-empleados">
  {empleados.map((empleado) => (
    <li key={empleado.id}>
      <strong>{empleado.nombre}</strong> – {empleado.puesto} <br />
      <span>{empleado.correo}</span>
    </li>
  ))}
</ul>
    </div>

  );
}
export default Empleado;