import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/appConfig";
import { useAuth } from "../context/authContext";


export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-black text-white shadow-md">
      {/* Izquierda: Logo y navegación */}
      <div className="flex items-center gap-6">
        <h1 className="text-green-500 font-bold text-xl">Kodigo Music</h1>

        <Link to="/" className="flex items-center gap-1 text-gray-300 hover:text-white">
          <FaHome /> <span className="hidden sm:inline">Inicio</span>
        </Link>

        <Link to="/register" className="flex items-center gap-1 text-gray-300 hover:text-white">
          <FaUserAlt /> <span className="hidden sm:inline">Registro</span>
        </Link>
      </div>

      {/* Centro: barra de búsqueda */}
      <div className="hidden md:flex items-center bg-zinc-800 px-4 py-2 rounded-full w-full max-w-md">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="¿Qué quieres reproducir?"
          className="bg-transparent outline-none text-sm w-full text-white placeholder:text-gray-400"
        />
      </div>

      {/* Derecha: íconos + avatar */}
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-300 hover:text-white cursor-pointer text-lg" />

      </div>

      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}
