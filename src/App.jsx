import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./Login";
import NavBar from "./components/NavBar";
import Perfil from "./components/Perfil";
import Empleados from "./components/Empleados";
import Inicio from "./components/Inicio";
import Mensaje from "./Mensaje"; // aqui importe mensaje aunque la verdad nunca se veia ya al final entendi como hacer para que vea
import "./index.css";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (// despues del return habia puesto  primero div mensaje
  
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/sistema-rrhh" // hasta que lo puse aqui, el div para que se vea en el campo vacion  el mensaje, la verdad batalle pero al final supo como ponerlo
            element={
              <div>
              <PrivateRoute>
                <NavBar />
               <div className="centro-pantalla">
        <Mensaje />
    
    </div>
              </PrivateRoute>
              </div>
            }
            />
            
             <Route
            path="/sistema-rrhh" // luego aqui lo puse div mensaje
            element={ 
              <PrivateRoute>
                <>
                
                  <NavBar /> 
                 
                </>
              </PrivateRoute>
              }
            />
               <Route
            path="/empleados"
            element={
              <PrivateRoute>
                <>
                
                  <Inicio />
                  <Empleados />
                </>
              </PrivateRoute>
            }
            />
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <>

                 <NavBar />
                  <Perfil />
                </>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />
          
        </Routes>
      </AuthProvider>
    </Router>
   
  );
}

export default App;
