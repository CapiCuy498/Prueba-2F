import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FooterColumn } from '../../../components/molecules/FooterColumn'
import { renderConRouter } from '../../helpers'

describe('FooterColumn', () => {
  it('muestra el título y los ítems sin enlace como texto plano', () => {
    renderConRouter(
      <FooterColumn title="Contacto" items={[{ label: 'contacto@spacemovie.cl' }]} />,
    )

    expect(screen.getByText('Contacto')).toBeInTheDocument()
    expect(screen.getByText('contacto@spacemovie.cl')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('convierte los ítems con "to" en enlaces internos del router', () => {
    renderConRouter(
      <FooterColumn title="Explorar" items={[{ label: 'Iniciar sesión', to: '/login' }]} />,
    )

    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
  })

  it('abre en pestaña nueva y con rel seguro los enlaces externos', () => {
    renderConRouter(
      <FooterColumn
        title="Síguenos"
        items={[{ label: 'Instagram', href: 'https://instagram.com', externo: true }]}
      />,
    )

    const enlace = screen.getByRole('link', { name: 'Instagram' })
    expect(enlace).toHaveAttribute('href', 'https://instagram.com')
    expect(enlace).toHaveAttribute('target', '_blank')
    expect(enlace).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
