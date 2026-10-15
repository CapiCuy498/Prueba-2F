import '../../styles/atoms/text.css'

export function Text({ children, variant = 'p', className }) {
  const Tag = variant
  return <Tag className={className}>{children}</Tag>
}
