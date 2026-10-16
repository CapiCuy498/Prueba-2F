import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApprovalSection } from '../components/organisms/ApprovalSection'
import { Footer } from '../components/organisms/Footer'
import { Header } from '../components/organisms/Header'
import { MovieDetails } from '../components/organisms/MovieDetails'
import { ReviewForm } from '../components/organisms/ReviewForm'
import { ReviewList } from '../components/organisms/ReviewList'
import { sitio } from '../data/sitio'
import { obtenerPeliculaPorId } from '../utils/obtenerPelicula'

function SinopsisContenido({ pelicula }) {
  const [resenas, setResenas] = useState(pelicula.resenas)

  useEffect(() => {
    document.title = `${pelicula.titulo} — Sinopsis | ${sitio.nombre}`
  }, [pelicula])

  const publicarResena = (resena) => {
    setResenas((anteriores) => [...anteriores, resena])
  }

  return (
    <main>
      <MovieDetails pelicula={pelicula} />
      <ApprovalSection publico={pelicula.aprobacionPublico} critica={pelicula.aprobacionCritica} />
      <ReviewList resenas={resenas} />
      <ReviewForm onPublicar={publicarResena} />
    </main>
  )
}

export function SinopsisPage() {
  const { id } = useParams()
  const pelicula = obtenerPeliculaPorId(id)

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header nombre={sitio.nombre} />
      {pelicula ? (
        // key: reinicia las reseñas al cambiar de película
        <SinopsisContenido key={pelicula.id} pelicula={pelicula} />
      ) : (
        <main className="container py-5 text-center">
          <h1>Película no encontrada</h1>
          <Link to="/" className="btn btn-cine mt-3">Volver al inicio</Link>
        </main>
      )}
      <Footer sitio={sitio} enlaces={[]} />
    </div>
  )
}
