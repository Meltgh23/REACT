import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./Login";
 import NavBar from "./components/NavBar";
 import Empleados from "./components/Empleados";
import Perfil from "./components/Perfil";


function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/sistema-rrhh"
            element={
              <PrivateRoute>
                <NavBar />
              </PrivateRoute>
              
            }
            />
            <Route
            path="/empleados"
            element={
              <PrivateRoute>
                <>
                  
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
