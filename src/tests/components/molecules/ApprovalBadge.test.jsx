import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ApprovalBadge } from '../../../components/molecules/ApprovalBadge'

const propsBase = {
  icon: 'check',
  iconLabel: 'Ícono de aprobación del público',
  value: 82,
  label: 'Público general',
}

describe('ApprovalBadge', () => {
  it('muestra el porcentaje de aprobación con el símbolo %', () => {
    render(<ApprovalBadge {...propsBase} />)

    expect(screen.getByText('82%')).toBeInTheDocument()
  })

  it('muestra la etiqueta como encabezado de nivel 2', () => {
    render(<ApprovalBadge {...propsBase} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Público general' })).toBeInTheDocument()
  })

  it('incluye el ícono con su etiqueta accesible', () => {
    render(<ApprovalBadge {...propsBase} />)

    expect(screen.getByRole('img', { name: 'Ícono de aprobación del público' })).toBeInTheDocument()
  })
})
