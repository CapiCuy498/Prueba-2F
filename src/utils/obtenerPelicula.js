import { peliculas } from '../data/peliculas'
import { movies } from '../data/movies'

// Busca la ficha completa; si no existe, la arma con los datos básicos de movies.js
export function obtenerPeliculaPorId(id) {
  const completa = peliculas.find((p) => String(p.id) === String(id))
  if (completa) return completa

  const basica = movies.find((m) => String(m.id) === String(id))
  if (!basica) return null

  return {
    id: basica.id,
    titulo: basica.title,
    poster: basica.poster,
    fechaEstreno: String(basica.year),
    duracion: basica.duration,
    genero: 'Por definir',
    resumen: basica.description,
    aprobacionPublico: basica.score,
    aprobacionCritica: basica.score,
    resenas: [],
  }
}
