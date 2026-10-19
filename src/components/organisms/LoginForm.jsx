import { useState } from "react";
import { InputField } from "../atoms/InputField";
import { PasswordField } from "../molecules/PasswordField";
import { Button } from "../atoms/Button";

export function LoginForm({ onLogin, errorGlobal }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ correo, password });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputField
        label="Correo electrónico"
        id="correoLogin"
        type="email"
        placeholder="ejemplo@correo.com"
        autoComplete="email"
        value={correo}
        onChange={(e) => { setCorreo(e.target.value); }}
      />

      <PasswordField
        label="Contraseña"
        id="passwordLogin"
        placeholder="Ingresa tu contraseña"
        autoComplete="current-password"
        value={password}
        onChange={(e) => { setPassword(e.target.value); }}
        mostrar={mostrar}
        toggleMostrar={() => setMostrar(!mostrar)}
      />

      {errorGlobal && (
        <div className="alert alert-danger" role="alert">
          {errorGlobal}
        </div>
      )}

      <Button type="submit" className="btn-space w-100">
        Iniciar sesión
      </Button>
    </form>
  );
}