import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InputField } from '../../../components/atoms/InputField'

describe('InputField', () => {
  it('muestra la etiqueta y el placeholder correctamente', () => {
    render(<InputField label="Correo electrónico" id="correo" placeholder="ejemplo@correo.com" />)

    // Verifica que el label esté enlazado al input
    expect(screen.getByLabelText('Correo electrónico')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('ejemplo@correo.com')).toBeInTheDocument()
  })

  it('tiene el tipo de input correcto', () => {
    render(<InputField label="Correo" id="correo" type="email" />)

    const input = screen.getByLabelText('Correo')
    expect(input).toHaveAttribute('type', 'email')
  })
})