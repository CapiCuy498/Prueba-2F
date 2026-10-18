import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import MovieCard from '../../../components/organisms/MovieCard'
import { renderConRouter } from '../../helpers'

const pelicula = {
  id: 7,
  poster: '/images/coyote.webp',
  title: 'Coyote VS Acme',
  score: 82,
  year: 2025,
  duration: '92 min',
  description: 'El Coyote demanda a ACME',
}

describe('MovieCard', () => {
  it('muestra el título y el póster con el título como texto alternativo', () => {
    renderConRouter(<MovieCard {...pelicula} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Coyote VS Acme' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Coyote VS Acme' })).toHaveAttribute('src', '/images/coyote.webp')
  })

  it('enlaza a la página de sinopsis usando el id de la película', () => {
    renderConRouter(<MovieCard {...pelicula} />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/sinopsis/7')
  })

  it('muestra puntaje, año, duración y descripción', () => {
    renderConRouter(<MovieCard {...pelicula} />)

    const rating = screen.getByRole('heading', { level: 3 })
    expect(rating).toHaveTextContent('82/100')
    expect(rating).toHaveTextContent('2025')
    expect(rating).toHaveTextContent('92 min')
    expect(screen.getByText('El Coyote demanda a ACME')).toBeInTheDocument()
  })
})
