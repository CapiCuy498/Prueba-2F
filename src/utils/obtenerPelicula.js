import { peliculas } from '../data/peliculas'

export function obtenerPeliculaActual() {
  const id = new URLSearchParams(window.location.search).get('id')
  return peliculas.find((pelicula) => String(pelicula.id) === id) ?? peliculas[0]
}
