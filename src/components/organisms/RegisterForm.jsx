import { useState } from "react";
import { InputField } from "../atoms/InputField";
import { PasswordField } from "../molecules/PasswordField";
import { Button } from "../atoms/Button";

export function RegisterForm({ onRegistro, errorGlobal, exito, irAlLogin }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistro({ nombre, correo, password, confirmar });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        label="Nombre completo"
        id="nombre"
        placeholder="Ingresa tu nombre"
        autoComplete="name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <InputField
        label="Correo electrónico"
        id="correoRegistro"
        type="email"
        placeholder="ejemplo@correo.com"
        autoComplete="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <PasswordField
        label="Contraseña"
        id="passwordRegistro"
        placeholder="Mínimo 8 caracteres"
        autoComplete="new-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mostrar={mostrar}
        toggleMostrar={() => setMostrar(!mostrar)}
      />

      <InputField
        label="Confirmar contraseña"
        id="confirmar"
        type="password"
        placeholder="Repite tu contraseña"
        autoComplete="new-password"
        value={confirmar}
        onChange={(e) => setConfirmar(e.target.value)}
      />

      {errorGlobal && (
        <div className="alert alert-danger" role="alert">
          {errorGlobal}
        </div>
      )}

      {exito && (
        <div className="alert alert-success" role="status">
          Registro Exitoso.
          <button
            type="button"
            className="btn btn-sm btn-success ms-2"
            onClick={irAlLogin}
          >
            Ir al inicio de sesión
          </button>
        </div>
      )}

      <Button type="submit" className="btn-space w-100">
        Crear cuenta
      </Button>
    </form>
  );
}