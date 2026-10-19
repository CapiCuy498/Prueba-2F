import MovieCard from './MovieCard'
import '../../styles/organisms/movie-cards.css';
function MovieCards({ movies }) {

  return (
    <div className="movie-cards">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default MovieCards
