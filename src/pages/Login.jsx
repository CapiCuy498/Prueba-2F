import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarLogin } from "../utils/validaciones";
import { LoginForm } from "../components/organisms/LoginForm";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const manejarLogin = ({ correo, password }) => {
    setError("");
    const resultado = validarLogin(correo, password);
    if (resultado) {
      setError(resultado);
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("spaceMovieUsuarios") || "[]");
    const usuario = usuarios.find((u) => u.correo === correo.trim().toLowerCase());

    if (!usuario) {
      setError("No existe una cuenta registrada con ese correo.");
      return;
    }

    sessionStorage.setItem("spaceMovieDemo", JSON.stringify(usuario));
    navigate("/");
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="logo-space">SPACE MOVIE</div>
        <h1>Iniciar sesión</h1>
        <p className="subtitle">Bienvenido</p>

        <LoginForm onLogin={manejarLogin} errorGlobal={error} />

        <p className="auth-link">
          ¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;