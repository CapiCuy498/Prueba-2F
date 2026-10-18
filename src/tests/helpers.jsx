import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export function renderConRouter(ui, { ruta = '/' } = {}) {
  return render(<MemoryRouter initialEntries={[ruta]}>{ui}</MemoryRouter>)
}
