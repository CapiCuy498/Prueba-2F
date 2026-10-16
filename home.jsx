import { useEffect } from 'react'
import { movies } from '../data/movies'
import { sitio } from '../data/sitio'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'
import MovieCards from '../components/organisms/MovieCards'

function Home() {
  useEffect(() => {
    document.title = `Inicio | ${sitio.nombre}`
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header nombre={sitio.nombre} />
      <main className="movies-page">
        <MovieCards movies={movies} />
      </main>
      <Footer sitio={sitio} enlaces={[]} />
    </div>
  )
}

export default Home
