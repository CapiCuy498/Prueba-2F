import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { TextArea } from '../../../components/atoms/TextArea'

describe('TextArea', () => {
  it('renderiza un área de texto con 3 filas por defecto, id y name', () => {
    render(<TextArea id="texto" name="texto" value="" onChange={() => {}} />)

    const area = screen.getByRole('textbox')
    expect(area.tagName).toBe('TEXTAREA')
    expect(area).toHaveAttribute('rows', '3')
    expect(area).toHaveAttribute('id', 'texto')
    expect(area).toHaveAttribute('name', 'texto')
  })

  it('marca el campo como inválido solo cuando invalid es true', () => {
    const { rerender } = render(<TextArea id="t" value="" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).not.toHaveClass('is-invalid')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false')

    rerender(<TextArea id="t" value="" onChange={() => {}} invalid />)
    expect(screen.getByRole('textbox')).toHaveClass('is-invalid')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('llama a onChange cuando el usuario escribe', async () => {
    const onChange = vi.fn()
    render(<TextArea id="t" value="" onChange={onChange} />)

    await userEvent.type(screen.getByRole('textbox'), 'Hola')

    expect(onChange).toHaveBeenCalledTimes(4)
  })
})
