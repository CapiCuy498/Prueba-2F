import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Icon } from '../../../components/atoms/Icon'

describe('Icon', () => {
  it('expone un svg accesible con su etiqueta y tamaño por defecto de 44', () => {
    render(<Icon name="check" label="Aprobación del público" />)

    const icono = screen.getByRole('img', { name: 'Aprobación del público' })
    expect(icono).toHaveAttribute('width', '44')
    expect(icono).toHaveAttribute('height', '44')
  })

  it('el ícono check usa fondo dorado y un trazo de visto', () => {
    const { container } = render(<Icon name="check" label="check" />)

    expect(container.querySelector('circle')).toHaveAttribute('fill', '#C9A24B')
    expect(container.querySelector('path')).toHaveAttribute('d', 'M14 25l7 7 13-14')
  })

  it('el ícono star usa fondo vino y respeta un tamaño personalizado', () => {
    const { container } = render(<Icon name="star" label="estrella" size={64} />)

    expect(container.querySelector('circle')).toHaveAttribute('fill', '#7A2331')
    expect(screen.getByRole('img', { name: 'estrella' })).toHaveAttribute('width', '64')
  })
})
