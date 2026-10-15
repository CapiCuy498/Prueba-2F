import { Text } from '../atoms/Text'
import '../../styles/molecules/review-card.css'

export function ReviewCard({ autor, texto }) {
  return (
    <article className="card review-card h-100">
      <div className="card-body">
        <Text className="review-text">“{texto}”</Text>
        <Text className="review-author">— {autor}</Text>
      </div>
    </article>
  )
}
