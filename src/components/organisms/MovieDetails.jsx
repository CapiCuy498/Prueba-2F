import { Image } from '../atoms/Image'
import { Text } from '../atoms/Text'
import { InfoItem } from '../molecules/InfoItem'
import '../../styles/organisms/movie-details.css'

export function MovieDetails({ pelicula }) {
  return (
    <section className="container pt-5">
      <div className="row g-5">
        <div className="col-12 col-md-4">
          <Text variant="h1" className="movie-title">
            {pelicula.titulo}
          </Text>
          <Image
            src={pelicula.poster}
            alt={`Cartel de la película ${pelicula.titulo}`}
            className="movie-poster img-fluid"
          />
        </div>

        <div className="col-12 col-md-8">
          <Text variant="h2" className="section-title">
            Sinopsis de la película
          </Text>
          <InfoItem label="Fecha de estreno" value={pelicula.fechaEstreno} />
          <InfoItem label="Duración" value={pelicula.duracion} />
          <InfoItem label="Género" value={pelicula.genero} />
          <Text variant="h3" className="summary-title">
            Resumen
          </Text>
          <Text className="movie-summary">{pelicula.resumen}</Text>
        </div>
      </div>
    </section>
  )
}
