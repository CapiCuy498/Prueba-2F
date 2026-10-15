import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Text } from '../atoms/Text'
import { TextArea } from '../atoms/TextArea'
import { FormField } from '../molecules/FormField'
import { validarResena } from '../../utils/filtroResenas'
import '../../styles/organisms/review-form.css'

const FORMULARIO_VACIO = { autor: '', texto: '' }

export function ReviewForm({ onPublicar }) {
  const [valores, setValores] = useState(FORMULARIO_VACIO)
  const [errores, setErrores] = useState({})

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const erroresNuevos = validarResena(valores)
    setErrores(erroresNuevos)

    if (Object.keys(erroresNuevos).length > 0) return

    onPublicar({ autor: valores.autor.trim(), texto: valores.texto.trim() })
    setValores(FORMULARIO_VACIO)
  }

  return (
    <section className="container py-5">
      <div className="review-form">
        <Text variant="h3" className="summary-title">
          Deja tu reseña
        </Text>
        <form onSubmit={manejarEnvio} noValidate>
          <FormField id="autor" label="Tu nombre" error={errores.autor}>
            <Input
              id="autor"
              name="autor"
              autoComplete="name"
              value={valores.autor}
              onChange={manejarCambio}
              invalid={Boolean(errores.autor)}
            />
          </FormField>

          <FormField
            id="texto"
            label="Tu opinión"
            help="No se permiten menciones (@), enlaces ni contenido publicitario."
            error={errores.texto}
          >
            <TextArea
              id="texto"
              name="texto"
              value={valores.texto}
              onChange={manejarCambio}
              invalid={Boolean(errores.texto)}
            />
          </FormField>

          <Button type="submit">Publicar reseña</Button>
        </form>
      </div>
    </section>
  )
}
