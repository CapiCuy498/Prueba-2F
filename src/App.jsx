
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";

import Login from "./pages/Login";
import Registro from "./pages/Registro";

function Bienvenida() {
  const navigate = useNavigate();

  const sesion = sessionStorage.getItem("spaceMovieDemo");
  const usuario = sesion ? JSON.parse(sesion) : null;

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  function cerrarSesion() {
    sessionStorage.removeItem("spaceMovieDemo");
    navigate("/login");
  }

  return (
    <main className="auth-page">
      <section className="auth-card text-center">

        <div className="logo-space">
          SPACE MOVIE
        </div>

        <h1>¡Bienvenido, {usuario.nombre}!</h1>

        <p className="subtitle">
          Has ingresado a Space Movie.
        </p>

        <button
          className="btn btn-space w-100"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>

      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
