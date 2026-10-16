
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarRegistro } from "../utils/validaciones";

function Registro() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState("");
  const [exito, setExito] = useState(false);

  function registrarUsuario(e) {
    e.preventDefault();
    setError("");
    setExito(false);

    const resultado = validarRegistro(
      nombre, correo, password, confirmar
    );

    if (resultado) {
      setError(resultado);
      return;
    }

    const usuarios = JSON.parse(
      localStorage.getItem("spaceMovieUsuarios") || "[]"
    );

    const correoNormalizado = correo.trim().toLowerCase();

    const existe = usuarios.some(
      (u) => u.correo === correoNormalizado
    );

    if (existe) {
      setError("Este correo electrónico ya está registrado.");
      return;
    }

    const nuevoUsuario = {
      nombre: nombre.trim(),
      correo: correoNormalizado
    };

    localStorage.setItem(
      "spaceMovieUsuarios",
      JSON.stringify([...usuarios, nuevoUsuario])
    );

    setPassword("");
    setConfirmar("");
    setExito(true);
  }

  return (
    <main className="auth-page">
      <section className="auth-card">

        <div className="logo-space">
          SPACE MOVIE
        </div>

        <h1>Crear cuenta</h1>

        <p className="subtitle">
          Regístrate y comienza tu experiencia
        </p>

        <form onSubmit={registrarUsuario} noValidate>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre completo
            </label>

            <input
              id="nombre"
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correoRegistro" className="form-label">
              Correo electrónico
            </label>

            <input
              id="correoRegistro"
              type="email"
              className="form-control"
              placeholder="ejemplo@correo.com"
              autoComplete="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passwordRegistro" className="form-label">
              Contraseña
            </label>

            <div className="input-group">
              <input
                id="passwordRegistro"
                type={mostrar ? "text" : "password"}
                className="form-control"
                placeholder="Mínimo 8 caracteres"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="mb-3">
            <label htmlFor="confirmar" className="form-label">
              Confirmar contraseña
            </label>

            <input
              id="confirmar"
              type="password"
              className="form-control"
              placeholder="Repite tu contraseña"
              autoComplete="new-password"
              value={confirmar}
              onChange={(e) => setConfirmar(e.target.value)}
            />
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {exito && (
            <div className="alert alert-success" role="status">
              Registro Exitoso.
              <button
                type="button"
                className="btn btn-sm btn-success ms-2"
                onClick={() => navigate("/login")}
              >
                Ir al inicio de sesión
              </button>
            </div>
          )}

          <button type="submit" className="btn btn-space w-100">
            Crear cuenta
          </button>

        </form>

        <p className="auth-link">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login">Iniciar sesión</Link>
        </p>

      </section>
    </main>
  );
}

export default Registro;
