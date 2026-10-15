import { useEffect, useState } from 'react'
import { ApprovalSection } from '../components/organisms/ApprovalSection'
import { Footer } from '../components/organisms/Footer'
import { Header } from '../components/organisms/Header'
import { MovieDetails } from '../components/organisms/MovieDetails'
import { ReviewForm } from '../components/organisms/ReviewForm'
import { ReviewList } from '../components/organisms/ReviewList'
import { peliculas } from '../data/peliculas'
import { sitio } from '../data/sitio'
import { obtenerPeliculaActual } from '../utils/obtenerPelicula'

const enlacesPeliculas = peliculas.map((pelicula) => ({
  label: pelicula.titulo,
  href: `/?id=${pelicula.id}`,
}))

export function SinopsisPage() {
  const [pelicula] = useState(obtenerPeliculaActual)
  const [resenas, setResenas] = useState(pelicula.resenas)

  useEffect(() => {
    document.title = `${pelicula.titulo} — Sinopsis | ${sitio.nombre}`
  }, [pelicula])

  const publicarResena = (resena) => {
    setResenas((anteriores) => [...anteriores, resena])
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header nombre={sitio.nombre} enlaces={enlacesPeliculas} />
      <main>
        <MovieDetails pelicula={pelicula} />
        <ApprovalSection publico={pelicula.aprobacionPublico} critica={pelicula.aprobacionCritica} />
        <ReviewList resenas={resenas} />
        <ReviewForm onPublicar={publicarResena} />
      </main>
      <Footer sitio={sitio} enlaces={enlacesPeliculas} />
    </div>
  )
}
