import MovieCard from './MovieCard'

function MovieCards({ movies }) {
  console.log('MovieCards recibió:', movies?.length, movies)

  return (
    <div className="movie-cards">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default MovieCards