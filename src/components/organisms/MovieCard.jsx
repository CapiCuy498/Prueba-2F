// src/components/organisms/MovieCard.jsx
import { Link } from 'react-router-dom'
import { Image } from '../atoms/Image'
import MovieInfo from '../molecules/MovieInfo'
import '../../styles/organisms/movie-card.css';
function MovieCard({ id, poster, title, score, year, duration, description }) {
  return (
    <div className="movie-card">
      <Link to={`/sinopsis/${id}`}>
        <Image src={poster} alt={title} className="poster" />
        <MovieInfo
          title={title}
          score={score}
          year={year}
          duration={duration}
          description={description}
        />
      </Link>
    </div>
  )
}

export default MovieCard