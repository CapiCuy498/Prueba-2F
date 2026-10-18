import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FormField } from '../../../components/molecules/FormField'

describe('FormField', () => {
  it('asocia la etiqueta con el campo hijo mediante htmlFor', () => {
    render(
      <FormField id="autor" label="Tu nombre">
        <input id="autor" />
      </FormField>,
    )

    expect(screen.getByLabelText('Tu nombre')).toHaveAttribute('id', 'autor')
  })

  it('muestra el texto de ayuda solo cuando se entrega help', () => {
    const { rerender } = render(
      <FormField id="t" label="Opinión">
        <input id="t" />
      </FormField>,
    )
    expect(screen.queryByText('Sin enlaces ni menciones')).not.toBeInTheDocument()

    rerender(
      <FormField id="t" label="Opinión" help="Sin enlaces ni menciones">
        <input id="t" />
      </FormField>,
    )
    expect(screen.getByText('Sin enlaces ni menciones')).toBeInTheDocument()
  })

  it('muestra el error con role alert solo cuando se entrega error', () => {
    const { rerender } = render(
      <FormField id="t" label="Opinión">
        <input id="t" />
      </FormField>,
    )
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    rerender(
      <FormField id="t" label="Opinión" error="Campo obligatorio">
        <input id="t" />
      </FormField>,
    )
    expect(screen.getByRole('alert')).toHaveTextContent('Campo obligatorio')
  })
})
