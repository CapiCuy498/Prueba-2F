import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Rating from '../../../components/atoms/Rating'

describe('Rating', () => {
  it('muestra el puntaje sobre 100', () => {
    render(<Rating score={82} year={2025} duration="92 min" />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('82/100')
  })

  it('muestra el año y la duración', () => {
    render(<Rating score={82} year={2025} duration="92 min" />)

    const encabezado = screen.getByRole('heading', { level: 3 })
    expect(encabezado).toHaveTextContent('2025')
    expect(encabezado).toHaveTextContent('92 min')
  })

  it('incluye el ícono de estrella y la clase info', () => {
    const { container } = render(<Rating score={90} year={1972} duration="175 min" />)

    expect(container.querySelector('i.fa-star')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toHaveClass('info')
  })
})
