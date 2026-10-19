import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarRegistro } from "../utils/validaciones";
import { RegisterForm } from "../components/organisms/RegisterForm";
import "../styles/auth.css";

function Registro() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  const manejarRegistro = ({ nombre, correo, password, confirmar }) => {
    setError("");
    setExito(false);

    const resultado = validarRegistro(nombre, correo, password, confirmar);
    if (resultado) {
      setError(resultado);
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("spaceMovieUsuarios") || "[]");
    const correoNormalizado = correo.trim().toLowerCase();

    if (usuarios.some((u) => u.correo === correoNormalizado)) {
      setError("Este correo electrónico ya está registrado.");
      return;
    }

    const nuevoUsuario = { nombre: nombre.trim(), correo: correoNormalizado };
    localStorage.setItem("spaceMovieUsuarios", JSON.stringify([...usuarios, nuevoUsuario]));
    
    setExito(true);
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="logo-space">SPACE MOVIE</div>
        <h1>Crear cuenta</h1>
        <p className="subtitle">Regístrate y comienza tu experiencia</p>

        <RegisterForm 
          onRegistro={manejarRegistro} 
          errorGlobal={error} 
          exito={exito}
          irAlLogin={() => navigate("/login")}
        />

        <p className="auth-link">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>
      </section>
    </main>
  );
}

export default Registro;