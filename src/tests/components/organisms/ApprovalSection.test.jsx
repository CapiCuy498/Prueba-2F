import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ApprovalSection } from '../../../components/organisms/ApprovalSection'

describe('ApprovalSection', () => {
  it('muestra la aprobación del público general', () => {
    render(<ApprovalSection publico={82} critica={76} />)

    expect(screen.getByText('82%')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Público general' })).toBeInTheDocument()
  })

  it('muestra la aprobación de la crítica especializada', () => {
    render(<ApprovalSection publico={82} critica={76} />)

    expect(screen.getByText('76%')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Crítica especializada' })).toBeInTheDocument()
  })

  it('incluye un ícono accesible para cada tipo de aprobación', () => {
    render(<ApprovalSection publico={90} critica={97} />)

    expect(screen.getByRole('img', { name: 'Ícono de aprobación del público' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Ícono de aprobación de la crítica' })).toBeInTheDocument()
  })
})
