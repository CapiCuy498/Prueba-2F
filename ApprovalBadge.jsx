import { Icon } from '../atoms/Icon'
import { Text } from '../atoms/Text'

export function ApprovalBadge({ icon, iconLabel, value, label }) {
  return (
    <div className="approval-badge d-flex align-items-center gap-3">
      <Icon name={icon} label={iconLabel} />
      <div className="d-flex flex-column">
        <Text variant="span" className="approval-value">
          {value}%
        </Text>
        <Text variant="h2" className="approval-label">
          {label}
        </Text>
      </div>
    </div>
  )
}
