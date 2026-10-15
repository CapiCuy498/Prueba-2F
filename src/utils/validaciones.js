
export function validarCorreo(correo) {
  const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formato.test(correo.trim());
}

export function validarPassword(password) {
  return password.length >= 8;
}

export function validarLogin(correo, password) {
  if (!correo.trim() || !password) {
    return "Debes completar todos los campos.";
  }

  if (!validarCorreo(correo)) {
    return "Ingresa un correo electrónico válido.";
  }

  if (!validarPassword(password)) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  return "";
}

export function validarRegistro(nombre, correo, password, confirmar) {
  if (!nombre.trim() || !correo.trim() || !password || !confirmar) {
    return "Debes completar todos los campos.";
  }

  if (nombre.trim().length < 3) {
    return "El nombre debe tener al menos 3 caracteres.";
  }

  if (!validarCorreo(correo)) {
    return "Ingresa un correo electrónico válido.";
  }

  if (!validarPassword(password)) {
    return "La contraseña debe tener al menos 8 caracteres.";
  }

  if (password !== confirmar) {
    return "Las contraseñas no coinciden.";
  }

  return "";
}
