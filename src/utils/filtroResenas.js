const PATRONES_PROHIBIDOS = [
  /@/,
  /https?:\/\/\S+/i,
  /www\.\S+/i,
  /\b(instagram|facebook|tiktok|whatsapp|wsp|telegram|twitter|youtube)\b/i,
  /\b(sígueme|sigueme|síguenos|siguenos|promo|descuento|compra ahora|link en bio)\b/i,
]

export function contieneContenidoProhibido(texto) {
  return PATRONES_PROHIBIDOS.some((patron) => patron.test(texto))
}

export function validarResena({ autor, texto }) {
  const errores = {}

  if (autor.trim().length < 2) {
    errores.autor = 'Ingresa un nombre de al menos 2 caracteres.'
  }

  if (texto.trim().length < 15) {
    errores.texto = 'Cuéntanos un poco más (mínimo 15 caracteres).'
  } else if (contieneContenidoProhibido(texto)) {
    errores.texto = 'No se permiten menciones (@), enlaces ni contenido publicitario en las reseñas.'
  }

  return errores
}
