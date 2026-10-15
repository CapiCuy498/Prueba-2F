import { Text } from '../atoms/Text'

export function FooterColumn({ title, items = [] }) {
  return (
    <div className="footer-column d-flex flex-column gap-2">
      <Text className="footer-column-title">{title}</Text>
      {items.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.label}
          </a>
        ) : (
          <Text key={item.label}>{item.label}</Text>
        ),
      )}
    </div>
  )
}
