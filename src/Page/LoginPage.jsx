// src/pages/LoginPage.jsx
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/appConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Usuario autenticado:", result.user);
    navigate("/home"); 
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
  }
};

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl mb-6">Iniciar sesión</h1>
      <button
        onClick={handleGoogleLogin}
        className="bg-green-600 px-6 py-2 rounded hover:bg-green-700"
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default LoginPage;
