import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ReviewForm } from '../../../components/organisms/ReviewForm'

describe('ReviewForm', () => {
  it('muestra los campos de nombre y opinión con su botón de publicar', () => {
    render(<ReviewForm onPublicar={() => {}} />)

    expect(screen.getByLabelText('Tu nombre')).toBeInTheDocument()
    expect(screen.getByLabelText('Tu opinión')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Publicar reseña' })).toBeInTheDocument()
  })

  it('rechaza un nombre corto y una reseña con menciones, mostrando errores sin publicar', async () => {
    const onPublicar = vi.fn()
    render(<ReviewForm onPublicar={onPublicar} />)

    await userEvent.type(screen.getByLabelText('Tu nombre'), 'A')
    await userEvent.type(screen.getByLabelText('Tu opinión'), 'Sígueme en @ana_cine para más cosas')
    await userEvent.click(screen.getByRole('button', { name: 'Publicar reseña' }))

    const alertas = screen.getAllByRole('alert')
    expect(alertas[0]).toHaveTextContent('Ingresa un nombre de al menos 2 caracteres.')
    expect(alertas[1]).toHaveTextContent('No se permiten menciones (@), enlaces ni contenido publicitario')
    expect(screen.getByLabelText('Tu nombre')).toHaveClass('is-invalid')
    expect(onPublicar).not.toHaveBeenCalled()
  })

  it('publica la reseña válida sin espacios sobrantes y limpia el formulario', async () => {
    const onPublicar = vi.fn()
    render(<ReviewForm onPublicar={onPublicar} />)

    await userEvent.type(screen.getByLabelText('Tu nombre'), '  Ana  ')
    await userEvent.type(screen.getByLabelText('Tu opinión'), '  Muy buena película, la recomiendo  ')
    await userEvent.click(screen.getByRole('button', { name: 'Publicar reseña' }))

    expect(onPublicar).toHaveBeenCalledWith({ autor: 'Ana', texto: 'Muy buena película, la recomiendo' })
    expect(screen.getByLabelText('Tu nombre')).toHaveValue('')
    expect(screen.getByLabelText('Tu opinión')).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
