import { Text } from '../atoms/Text'
import '../../styles/molecules/info-item.css'

export function InfoItem({ label, value }) {
  return (
    <Text className="info-item">
      {label}: <span>{value}</span>
    </Text>
  )
}
