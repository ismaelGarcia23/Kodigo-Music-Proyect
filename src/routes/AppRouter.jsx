import { Routes, Route } from "react-router-dom";
import HomePage from "../Page/HomePage";
import LoginPage from "../Page/LoginPage";
import RegisterPage from "../Page/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import NavBar from "../components/NavBar";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;