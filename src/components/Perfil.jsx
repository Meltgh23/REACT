import { useAuth } from "../context/AuthContext";

function Perfil() {
  const { user, logout } = useAuth(); // me falto el logout
 const handleLogout = async () => {
    try {
      await logout();//aqui ya puse la funcion
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <div className= "perfil">
      <h2 className="perfil-title">Perfil de Usuario</h2>
      <p className="perfil-email">Correo: <span>{user?.email}</span></p>
      <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button> 
    </div>
  ); // no habia puesto funcion de handlelogout
}
export default Perfil;