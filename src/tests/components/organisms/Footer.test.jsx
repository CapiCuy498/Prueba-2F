import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../../../components/organisms/Footer'
import { renderConRouter } from '../../helpers'

const sitio = {
  nombre: 'SpaceMovie',
  descripcion: 'Reseñas y valoraciones de cine.',
  contacto: ['contacto@spacemovie.cl', '+56 9 1234 5678'],
  redes: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ],
  copyright: '© 2026 SpaceMovie.',
}

const enlaces = [{ label: 'Coyote VS Acme', to: '/sinopsis/1' }]

describe('Footer', () => {
  it('muestra el nombre y la descripción del sitio', () => {
    renderConRouter(<Footer sitio={sitio} enlaces={enlaces} />)

    expect(screen.getByText('SpaceMovie')).toBeInTheDocument()
    expect(screen.getByText('Reseñas y valoraciones de cine.')).toBeInTheDocument()
  })

  it('incluye los enlaces fijos de navegación y los que recibe por props', () => {
    renderConRouter(<Footer sitio={sitio} enlaces={enlaces} />)

    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: 'Registrarse' })).toHaveAttribute('href', '/registro')
    expect(screen.getByRole('link', { name: 'Coyote VS Acme' })).toHaveAttribute('href', '/sinopsis/1')
  })

  it('muestra contacto, redes externas y copyright', () => {
    renderConRouter(<Footer sitio={sitio} enlaces={enlaces} />)

    expect(screen.getByText('contacto@spacemovie.cl')).toBeInTheDocument()
    expect(screen.getByText('+56 9 1234 5678')).toBeInTheDocument()

    const pie = screen.getByRole('contentinfo')
    const instagram = within(pie).getByRole('link', { name: 'Instagram' })
    expect(instagram).toHaveAttribute('target', '_blank')
    expect(within(pie).getByRole('link', { name: 'YouTube' })).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText('© 2026 SpaceMovie.')).toBeInTheDocument()
  })
})
