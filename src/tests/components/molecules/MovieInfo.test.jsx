import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MovieInfo from '../../../components/molecules/MovieInfo'

const propsBase = {
  title: 'Coyote VS Acme',
  score: 82,
  year: 2025,
  duration: '92 min',
  description: 'El Coyote demanda a ACME',
}

describe('MovieInfo', () => {
  it('muestra el título como encabezado de nivel 1', () => {
    render(<MovieInfo {...propsBase} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Coyote VS Acme' })).toBeInTheDocument()
  })

  it('muestra puntaje, año y duración en el rating', () => {
    render(<MovieInfo {...propsBase} />)

    const rating = screen.getByRole('heading', { level: 3 })
    expect(rating).toHaveTextContent('82/100')
    expect(rating).toHaveTextContent('2025')
    expect(rating).toHaveTextContent('92 min')
  })

  it('muestra la descripción de la película', () => {
    render(<MovieInfo {...propsBase} />)

    expect(screen.getByText('El Coyote demanda a ACME')).toHaveClass('short-desc')
  })
})
