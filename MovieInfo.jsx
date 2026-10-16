// src/components/molecules/MovieInfo.jsx
import Title from '../atoms/Title'
import Rating from '../atoms/Rating'
import Description from '../atoms/Description'

function MovieInfo({ title, score, year, duration, description }) {
  return (
    <div className="card-content">
      <Title>{title}</Title>
      <Rating score={score} year={year} duration={duration} />
      <Description>{description}</Description>
    </div>
  )
}

export default MovieInfo