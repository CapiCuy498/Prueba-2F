import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Image } from '../../../components/atoms/Image'

describe('Image', () => {
  it('renderiza una imagen con el src y el alt indicados', () => {
    render(<Image src="/images/poster.webp" alt="Cartel de El Padrino" />)

    const imagen = screen.getByRole('img', { name: 'Cartel de El Padrino' })
    expect(imagen).toHaveAttribute('src', '/images/poster.webp')
  })

  it('aplica la clase recibida', () => {
    render(<Image src="/a.webp" alt="Portada" className="poster" />)

    expect(screen.getByRole('img', { name: 'Portada' })).toHaveClass('poster')
  })

  it('no agrega atributo class cuando no se entrega className', () => {
    render(<Image src="/a.webp" alt="Portada" />)

    expect(screen.getByRole('img', { name: 'Portada' })).not.toHaveAttribute('class')
  })
})
