import { ReviewCard } from '../molecules/ReviewCard'

export function ReviewList({ resenas }) {
  return (
    <section className="container pt-4">
      <div className="row g-4">
        {resenas.map((resena, indice) => (
          <div key={`${resena.autor}-${indice}`} className="col-12 col-md-6">
            <ReviewCard autor={resena.autor} texto={resena.texto} />
          </div>
        ))}
      </div>
    </section>
  )
}
