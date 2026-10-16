import { movies } from '../data/movies'   
import MovieCards from '../components/organisms/MovieCards'
import '../styles/i.css'

function Home() {
  return (
    <div className="container">
      <MovieCards movies={movies} />
    </div>
  )
}

export default Home