import React, { useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
import { onSnapshot, query, orderBy,  } from "firebase/firestore";
import { db } from "../firebase";
import '../index.css';

function Empleado() {//aqui son los estodos 
    const [nombre, setNombre] = useState("");
    const [apellidopaterno, setApellidopaterno] = useState("");
    const [apellidomaterno, setApellidomaterno] = useState("");
  const [puesto, setPuesto] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState("");
  const [nss, setNss] = useState("");
  const [rfc,setRfc] = useState("");
  const [empleados, setEmpleados] = useState([]);
  const [idEditando, setIdEditando] = useState(null);
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
//aky guardo empleados
  const handleSubmit = async (e) => {
    e.preventDefault();
  const datosEmpleado = {
      nombre,
      apellidopaterno,
      apellidomaterno,
      puesto,
      correo,
      numero,
      nss,
      rfc,
    };
       try {
      if (idEditando) {
        const docRef = doc(db, "empleados", idEditando);
        await updateDoc(docRef, datosEmpleado);
        alert("Empleado actualizado correctamente");
        setIdEditando(null);
      } else {
        await addDoc(collection(db, "empleados"), datosEmpleado);
      alert("Empleado guardado correctamente");
      }
      setNombre("");
      setApellidopaterno("");
      setApellidomaterno("");
      setPuesto("");
      setCorreo("");
      setNumero("");
      setNss("");
      setRfc("");
    } catch (error) {
      console.error("Error al guardar empleado:", error);
      alert("Hubo un error al guardar");
    }
  };
    const handleEditar = (empleado) => {
    setIdEditando(empleado.id);
    setNombre(empleado.nombre);
    setApellidopaterno(empleado.apellidopaterno);
    setApellidomaterno(empleado.apellidomaterno);
    setPuesto(empleado.puesto);
    setCorreo(empleado.correo);
    setNumero(empleado.numero);
    setNss(empleado.nss);
    setRfc(empleado.rfc);
  };
const handleEliminar = async (id) => {
    const confirm = window.confirm("¿Estás seguro que deseas eliminar este empleado?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "empleados", id));
      alert("Empleado eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("No se pudo eliminar");
    }
  };

  return (
    <div className="empleados-container">
      <h2>{idEditando ? "Editar Empleado" : "Registrar Empleado"}</h2>

      <form onSubmit={handleSubmit} className="empleados-form">
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="text" placeholder="Apellido Paterno" value={apellidopaterno} onChange={(e) => setApellidopaterno(e.target.value)} required />
        <input type="text" placeholder="Apellido Materno" value={apellidomaterno} onChange={(e) => setApellidomaterno(e.target.value)} required />
        <input type="text" placeholder="Puesto" value={puesto} onChange={(e) => setPuesto(e.target.value)} required />
        <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        <input type="number" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} required />
        <input type="number" placeholder="NSS" value={nss} onChange={(e) => setNss(e.target.value)} required />
        <input type="text" placeholder="RFC" value={rfc} onChange={(e) => setRfc(e.target.value)} required />

        <button type="submit">{idEditando ? "Actualizar" : "Guardar"}</button>
      </form>

      <h3>Lista de Empleados</h3>
      <table className="tabla-empleados">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.nombre} {empleado.apellidopaterno} {empleado.apellidomaterno}</td>
              <td>{empleado.puesto}</td>
              <td>{empleado.correo}</td>
              <td>
                <button onClick={() => handleEditar(empleado)}>Editar</button>
                <button onClick={() => handleEliminar(empleado.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Empleado;