import { ApprovalBadge } from '../molecules/ApprovalBadge'
import '../../styles/organisms/approval-section.css'

export function ApprovalSection({ publico, critica }) {
  return (
    <section className="container">
      <div className="approval-section d-flex flex-column flex-md-row gap-4 gap-md-5 py-4">
        <ApprovalBadge
          icon="check"
          iconLabel="Ícono de aprobación del público"
          value={publico}
          label="Público general"
        />
        <ApprovalBadge
          icon="star"
          iconLabel="Ícono de aprobación de la crítica"
          value={critica}
          label="Crítica especializada"
        />
      </div>
    </section>
  )
}
