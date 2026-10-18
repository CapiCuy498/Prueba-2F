import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MovieDetails } from '../../../components/organisms/MovieDetails'

const pelicula = {
  titulo: 'Coyote VS Acme',
  poster: '/images/coyote.webp',
  fechaEstreno: '21 de noviembre, 2025',
  duracion: '92 min',
  genero: 'Comedia, Animación',
  resumen: 'El Coyote decide demandar a ACME.',
}

describe('MovieDetails', () => {
  it('muestra el título y el cartel de la película', () => {
    render(<MovieDetails pelicula={pelicula} />)

    expect(screen.getByRole('heading', { level: 1, name: 'Coyote VS Acme' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Cartel de la película Coyote VS Acme' })).toHaveAttribute(
      'src',
      '/images/coyote.webp',
    )
  })

  it('muestra fecha de estreno, duración y género', () => {
    render(<MovieDetails pelicula={pelicula} />)

    expect(screen.getByText('Fecha de estreno:').closest('p')).toHaveTextContent('21 de noviembre, 2025')
    expect(screen.getByText('Duración:').closest('p')).toHaveTextContent('92 min')
    expect(screen.getByText('Género:').closest('p')).toHaveTextContent('Comedia, Animación')
  })

  it('muestra los encabezados de sinopsis y resumen con el texto del resumen', () => {
    render(<MovieDetails pelicula={pelicula} />)

    expect(screen.getByRole('heading', { level: 2, name: 'Sinopsis de la película' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Resumen' })).toBeInTheDocument()
    expect(screen.getByText('El Coyote decide demandar a ACME.')).toBeInTheDocument()
  })
})
