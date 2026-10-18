import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Header } from '../../../components/organisms/Header'
import { renderConRouter } from '../../helpers'

describe('Header', () => {
  it('muestra la marca como enlace a la página de inicio', () => {
    renderConRouter(<Header nombre="SpaceMovie" />)

    const marca = screen.getByRole('link', { name: 'SpaceMovie' })
    expect(marca).toHaveAttribute('href', '/')
  })

  it('sin sesión iniciada ofrece Iniciar sesión y Registrarse', () => {
    renderConRouter(<Header nombre="SpaceMovie" />)

    expect(screen.getByRole('link', { name: 'Iniciar sesión' })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: 'Registrarse' })).toHaveAttribute('href', '/registro')
    expect(screen.queryByRole('button', { name: /Cerrar sesión/ })).not.toBeInTheDocument()
  })

  it('con sesión iniciada muestra el usuario y al cerrar sesión limpia el storage y va a /login', async () => {
    sessionStorage.setItem('spaceMovieDemo', JSON.stringify({ nombre: 'Ana' }))
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Header nombre="SpaceMovie" />} />
          <Route path="/login" element={<p>Pantalla de login</p>} />
        </Routes>
      </MemoryRouter>,
    )

    expect(screen.queryByRole('link', { name: 'Iniciar sesión' })).not.toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: 'Cerrar sesión (Ana)' }))

    expect(sessionStorage.getItem('spaceMovieDemo')).toBeNull()
    expect(screen.getByText('Pantalla de login')).toBeInTheDocument()
  })
})
