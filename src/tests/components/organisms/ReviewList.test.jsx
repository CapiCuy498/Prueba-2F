import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ReviewList } from '../../../components/organisms/ReviewList'

const resenas = [
  { autor: 'Martina C.', texto: 'Una montaña rusa de principio a fin.' },
  { autor: 'Diego F.', texto: 'Le sobran algunos minutos.' },
]

describe('ReviewList', () => {
  it('renderiza una tarjeta por cada reseña', () => {
    render(<ReviewList resenas={resenas} />)

    expect(screen.getAllByRole('article')).toHaveLength(2)
  })

  it('muestra el autor y el texto de cada reseña', () => {
    render(<ReviewList resenas={resenas} />)

    expect(screen.getByText('— Martina C.')).toBeInTheDocument()
    expect(screen.getByText('“Una montaña rusa de principio a fin.”')).toBeInTheDocument()
    expect(screen.getByText('— Diego F.')).toBeInTheDocument()
    expect(screen.getByText('“Le sobran algunos minutos.”')).toBeInTheDocument()
  })

  it('no muestra tarjetas cuando no hay reseñas', () => {
    render(<ReviewList resenas={[]} />)

    expect(screen.queryByRole('article')).not.toBeInTheDocument()
  })
})
