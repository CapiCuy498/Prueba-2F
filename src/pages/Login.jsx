
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarLogin } from "../utils/validaciones";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");

  function iniciarSesion(e) {
    e.preventDefault();
    setError("");

    const resultado = validarLogin(correo, password);

    if (resultado) {
      setError(resultado);
      return;
    }

    const usuarios = JSON.parse(
      localStorage.getItem("spaceMovieUsuarios") || "[]"
    );

    const usuario = usuarios.find(
      (u) => u.correo === correo.trim().toLowerCase()
    );

    if (!usuario) {
      setError("No existe una cuenta registrada con ese correo.");
      return;
    }

    sessionStorage.setItem(
      "spaceMovieDemo",
      JSON.stringify(usuario)
    );

    navigate("/bienvenida");
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="logo-space">
          SPACE MOVIE
        </div>

        <h1>Iniciar sesión</h1>

        <p className="subtitle">
          Bienvenido
        </p>

        <form onSubmit={iniciarSesion} noValidate>

          <div className="mb-3">
            <label htmlFor="correoLogin" className="form-label">
              Correo electrónico
            </label>

            <input
              id="correoLogin"
              type="email"
              className="form-control"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordLogin" className="form-label">
              Contraseña
            </label>

            <div className="input-group">
              <input
                id="passwordLogin"
                type={mostrar ? "text" : "password"}
                className="form-control"
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />

              <button
                type="button"
                className="btn btn-mostrar"
                onClick={() => setMostrar(!mostrar)}
              >
                {mostrar ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-space w-100">
            Iniciar sesión
          </button>

        </form>

        <p className="auth-link">
          ¿No tienes una cuenta?{" "}
          <Link to="/registro">Regístrate aquí</Link>
        </p>


      </section>
    </main>
  );
}

export default Login;
