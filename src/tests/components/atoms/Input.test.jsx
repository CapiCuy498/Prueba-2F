import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Input } from '../../../components/atoms/Input'

describe('Input', () => {
  it('renderiza un campo de texto con id, name, value y props extra', () => {
    render(<Input id="autor" name="autor" value="Ana" onChange={() => {}} placeholder="Tu nombre" />)

    const campo = screen.getByRole('textbox')
    expect(campo).toHaveAttribute('id', 'autor')
    expect(campo).toHaveAttribute('name', 'autor')
    expect(campo).toHaveAttribute('type', 'text')
    expect(campo).toHaveAttribute('placeholder', 'Tu nombre')
    expect(campo).toHaveValue('Ana')
  })

  it('marca el campo como inválido solo cuando invalid es true', () => {
    const { rerender } = render(<Input id="x" value="" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveClass('form-control')
    expect(screen.getByRole('textbox')).not.toHaveClass('is-invalid')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')

    rerender(<Input id="x" value="" onChange={() => {}} invalid />)
    expect(screen.getByRole('textbox')).toHaveClass('is-invalid')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('llama a onChange cada vez que el usuario escribe', async () => {
    const onChange = vi.fn()
    render(<Input id="autor" value="" onChange={onChange} />)

    await userEvent.type(screen.getByRole('textbox'), 'Ana')

    expect(onChange).toHaveBeenCalledTimes(3)
  })
})
