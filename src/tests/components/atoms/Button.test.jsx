import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from '../../../components/atoms/Button'

describe('Button', () => {
  it('muestra el texto que recibe como hijo dentro de un botón', () => {
    render(<Button>Publicar reseña</Button>)

    expect(screen.getByRole('button', { name: 'Publicar reseña' })).toBeInTheDocument()
  })

  it('usa type="button" por defecto y agrega las clases extra a las base', () => {
    render(<Button className="w-100">Enviar</Button>)

    const boton = screen.getByRole('button', { name: 'Enviar' })
    expect(boton).toHaveAttribute('type', 'button')
    expect(boton).toHaveClass('btn', 'btn-cine', 'w-100')
  })

  it('ejecuta onClick una vez cada vez que se hace clic', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Entrar</Button>)

    await userEvent.click(screen.getByRole('button', { name: 'Entrar' }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
