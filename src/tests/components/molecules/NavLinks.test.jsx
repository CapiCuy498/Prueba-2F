import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { NavLinks } from '../../../components/molecules/NavLinks'
import { renderConRouter } from '../../helpers'

describe('NavLinks', () => {
  it('renderiza un enlace por cada ítem con su ruta', () => {
    renderConRouter(
      <NavLinks
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Iniciar sesión', to: '/login' },
        ]}
      />,
    )

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
  })

  it('renderiza un botón y ejecuta su acción cuando el ítem tiene onClick', async () => {
    const onClick = vi.fn()
    renderConRouter(<NavLinks items={[{ label: 'Cerrar sesión', onClick }]} />)

    await userEvent.click(screen.getByRole('button', { name: 'Cerrar sesión' }))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('marca como activo solo el enlace de la ruta actual', () => {
    renderConRouter(
      <NavLinks
        items={[
          { label: 'Inicio', to: '/' },
          { label: 'Iniciar sesión', to: '/login' },
        ]}
      />,
      { ruta: '/login' },
    )

    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveClass('active')
    expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveClass('active')
  })
})
