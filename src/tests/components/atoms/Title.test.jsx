import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Title from '../../../components/atoms/Title'

describe('Title', () => {
  it('se renderiza como encabezado de nivel 1 con el texto recibido', () => {
    render(<Title>Coyote VS Acme</Title>)

    expect(screen.getByRole('heading', { level: 1, name: 'Coyote VS Acme' })).toBeInTheDocument()
  })

  it('tiene la clase name', () => {
    render(<Title>El Padrino</Title>)

    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('name')
  })

  it('permite elementos JSX como contenido', () => {
    render(
      <Title>
        El <em>Padrino</em>
      </Title>,
    )

    expect(screen.getByText('Padrino').tagName).toBe('EM')
  })
})
