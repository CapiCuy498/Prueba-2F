import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from '../../../components/organisms/LoginForm'

describe('LoginForm', () => {
  it('muestra los campos y el botón de envío', () => {
    render(<LoginForm onLogin={vi.fn()} errorGlobal="" />)

    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument()
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Iniciar sesión' })).toBeInTheDocument()
  })

  it('envía los datos al hacer submit', () => {
    const handleLogin = vi.fn()
    render(<LoginForm onLogin={handleLogin} errorGlobal="" />)

    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: 'test@test.com' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: '12345678' } })
    fireEvent.click(screen.getByRole('button', { name: 'Iniciar sesión' }))

    expect(handleLogin).toHaveBeenCalledWith({
      correo: 'test@test.com',
      password: '12345678'
    })
  })

  it('muestra el mensaje de error cuando se le pasa por propiedad', () => {
    render(<LoginForm onLogin={vi.fn()} errorGlobal="Credenciales incorrectas" />)

    const alerta = screen.getByRole('alert')
    expect(alerta).toHaveTextContent('Credenciales incorrectas')
    expect(alerta).toHaveClass('alert-danger')
  })
})