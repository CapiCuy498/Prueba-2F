import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PasswordField } from '../../../components/molecules/PasswordField'

describe('PasswordField', () => {
  it('oculta la contraseña por defecto', () => {
    render(<PasswordField label="Contraseña" id="pass" />)

    const input = screen.getByLabelText('Contraseña')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('muestra la contraseña cuando la prop "mostrar" es verdadera', () => {
    render(<PasswordField label="Contraseña" id="pass" mostrar={true} />)

    const input = screen.getByLabelText('Contraseña')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('muestra el botón para ver u ocultar la contraseña', () => {
    render(<PasswordField label="Contraseña" id="pass" mostrar={false} />)

    expect(screen.getByRole('button', { name: 'Mostrar' })).toBeInTheDocument()
  })
})