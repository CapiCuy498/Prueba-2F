import { Link } from 'react-router-dom'
import { Text } from '../atoms/Text'

export function FooterColumn({ title, items = [] }) {
  return (
    <div className="footer-column d-flex flex-column gap-2">
      <Text className="footer-column-title">{title}</Text>
      {items.map((item) => {
        if (item.to) {
          return (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          )
        }
        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {item.label}
            </a>
          )
        }
        return <Text key={item.label}>{item.label}</Text>
      })}
    </div>
  )
}
