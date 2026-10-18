import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MovieCards from '../../../components/organisms/MovieCards'
import { renderConRouter } from '../../helpers'

const peliculas = [
  { id: 1, poster: '/a.webp', title: 'Coyote VS Acme', score: 82, year: 2025, duration: '92 min', description: 'Uno' },
  { id: 2, poster: '/b.webp', title: 'El Padrino', score: 90, year: 1972, duration: '175 min', description: 'Dos' },
]

describe('MovieCards', () => {
  it('renderiza una tarjeta por cada película', () => {
    renderConRouter(<MovieCards movies={peliculas} />)

    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 1, name: 'Coyote VS Acme' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'El Padrino' })).toBeInTheDocument()
  })

  it('cada tarjeta enlaza a la sinopsis de su propia película', () => {
    renderConRouter(<MovieCards movies={peliculas} />)

    const enlaces = screen.getAllByRole('link')
    expect(enlaces[0]).toHaveAttribute('href', '/sinopsis/1')
    expect(enlaces[1]).toHaveAttribute('href', '/sinopsis/2')
  })

  it('no falla y no muestra tarjetas cuando movies no está definido o está vacío', () => {
    const { container, rerender } = renderConRouter(<MovieCards />)
    expect(container.querySelector('.movie-cards')).toBeEmptyDOMElement()

    rerender(<MovieCards movies={[]} />)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
