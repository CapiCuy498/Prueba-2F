import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { RegisterForm } from '../../../components/organisms/RegisterForm'

describe('RegisterForm', () => {
  it('muestra los campos y el botón de envío', () => {
    render(
      <RegisterForm 
        onRegistro={vi.fn()} 
        errorGlobal="" 
        exito={false} 
        irAlLogin={vi.fn()} 
      />
    )

    expect(screen.getByLabelText('Nombre completo')).toBeInTheDocument()
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument()
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirmar contraseña')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Crear cuenta' })).toBeInTheDocument()
  })

  it('envía todos los datos al hacer submit', () => {
    const handleRegistro = vi.fn()
    render(
      <RegisterForm 
        onRegistro={handleRegistro} 
        errorGlobal="" 
        exito={false} 
        irAlLogin={vi.fn()} 
      />
    )

    fireEvent.change(screen.getByLabelText('Nombre completo'), { target: { value: 'Juan' } })
    fireEvent.change(screen.getByLabelText('Correo electrónico'), { target: { value: 'juan@test.com' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: '12345678' } })
    fireEvent.change(screen.getByLabelText('Confirmar contraseña'), { target: { value: '12345678' } })

    fireEvent.click(screen.getByRole('button', { name: 'Crear cuenta' }))

    expect(handleRegistro).toHaveBeenCalledWith({
      nombre: 'Juan',
      correo: 'juan@test.com',
      password: '12345678',
      confirmar: '12345678'
    })
  })

  it('muestra el mensaje de error cuando se le pasa por propiedad', () => {
    render(
      <RegisterForm 
        onRegistro={vi.fn()} 
        errorGlobal="Este correo ya está registrado" 
        exito={false} 
        irAlLogin={vi.fn()} 
      />
    )

    const alerta = screen.getByRole('alert')
    expect(alerta).toHaveTextContent('Este correo ya está registrado')
  })

  it('muestra el mensaje de éxito y el botón de ir al login cuando el registro es correcto', () => {
    const handleIrAlLogin = vi.fn()
    render(
      <RegisterForm 
        onRegistro={vi.fn()} 
        errorGlobal="" 
        exito={true} 
        irAlLogin={handleIrAlLogin} 
      />
    )

    expect(screen.getByText('Registro Exitoso.')).toBeInTheDocument()
    
    const botonLogin = screen.getByRole('button', { name: 'Ir al inicio de sesión' })
    fireEvent.click(botonLogin)
    
    expect(handleIrAlLogin).toHaveBeenCalledTimes(1)
  })
})