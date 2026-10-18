import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InfoItem } from '../../../components/molecules/InfoItem'

describe('InfoItem', () => {
  it('muestra la etiqueta seguida de su valor', () => {
    const { container } = render(<InfoItem label="Duración" value="92 min" />)

    expect(container.querySelector('p')).toHaveTextContent('Duración: 92 min')
  })

  it('coloca el valor dentro de un span', () => {
    render(<InfoItem label="Género" value="Comedia" />)

    expect(screen.getByText('Comedia').tagName).toBe('SPAN')
  })

  it('tiene la clase info-item', () => {
    const { container } = render(<InfoItem label="Fecha de estreno" value="2025" />)

    expect(container.querySelector('p')).toHaveClass('info-item')
  })
})
