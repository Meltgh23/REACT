import { useAuth } from "../context/AuthContext";

function Perfil() {
  const { user } = useAuth();
  // resto igual...
  return (
    <div className= "perfil">
      <h2 className="perfil-title">Perfil de Usuario</h2>
      <p className="perfil-email">Correo: <span>{user?.email}</span></p>
      <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}
export default Perfil;