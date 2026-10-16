import { Text } from '../atoms/Text'

export function InfoItem({ label, value }) {
  return (
    <Text className="info-item">
      {label}: <span>{value}</span>
    </Text>
  )
}
