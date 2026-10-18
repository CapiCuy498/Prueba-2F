import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ReviewCard } from '../../../components/molecules/ReviewCard'

describe('ReviewCard', () => {
  it('muestra el texto de la reseña entre comillas', () => {
    render(<ReviewCard autor="Martina C." texto="Una montaña rusa" />)

    expect(screen.getByText('“Una montaña rusa”')).toHaveClass('review-text')
  })

  it('muestra el autor precedido de un guion largo', () => {
    render(<ReviewCard autor="Martina C." texto="Una montaña rusa" />)

    expect(screen.getByText('— Martina C.')).toHaveClass('review-author')
  })

  it('se renderiza como un artículo con estilo de tarjeta', () => {
    render(<ReviewCard autor="Diego F." texto="Le sobran minutos" />)

    expect(screen.getByRole('article')).toHaveClass('card', 'review-card')
  })
})
