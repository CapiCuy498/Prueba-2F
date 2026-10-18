import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Text } from '../../../components/atoms/Text'

describe('Text', () => {
  it('se renderiza como párrafo por defecto', () => {
    render(<Text>Hola mundo</Text>)

    expect(screen.getByText('Hola mundo').tagName).toBe('P')
  })

  it('usa la etiqueta indicada en variant', () => {
    render(<Text variant="h2">Sinopsis</Text>)

    expect(screen.getByRole('heading', { level: 2, name: 'Sinopsis' })).toBeInTheDocument()
  })

  it('aplica la clase recibida', () => {
    render(<Text className="review-text">Muy buena</Text>)

    expect(screen.getByText('Muy buena')).toHaveClass('review-text')
  })
})
