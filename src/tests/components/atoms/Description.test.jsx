import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Description from '../../../components/atoms/Description'

describe('Description', () => {
  it('muestra el texto recibido', () => {
    render(<Description>Una comedia animada en el desierto</Description>)

    expect(screen.getByText('Una comedia animada en el desierto')).toBeInTheDocument()
  })

  it('se renderiza como un párrafo con la clase short-desc', () => {
    render(<Description>Texto</Description>)

    const parrafo = screen.getByText('Texto')
    expect(parrafo.tagName).toBe('P')
    expect(parrafo).toHaveClass('short-desc')
  })

  it('permite elementos JSX como contenido', () => {
    render(
      <Description>
        Estreno <strong>2025</strong>
      </Description>,
    )

    expect(screen.getByText('2025').tagName).toBe('STRONG')
  })
})
