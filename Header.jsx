import { Link, useNavigate } from 'react-router-dom'
import { NavLinks } from '../molecules/NavLinks'

export function Header({ nombre }) {
  const navigate = useNavigate()
  const sesion = sessionStorage.getItem('spaceMovieDemo')
  const usuario = sesion ? JSON.parse(sesion) : null

  const cerrarSesion = () => {
    sessionStorage.removeItem('spaceMovieDemo')
    navigate('/login')
  }

  const enlaces = [
    { label: 'Inicio', to: '/' },
    ...(usuario
      ? [{ label: `Cerrar sesión (${usuario.nombre})`, onClick: cerrarSesion }]
      : [
          { label: 'Iniciar sesión', to: '/login' },
          { label: 'Registrarse', to: '/registro' },
        ]),
  ]

  return (
    <header className="site-header sticky-top">
      <nav className="navbar container py-3" aria-label="Navegación principal">
        <Link className="navbar-brand brand" to="/">
          {nombre}
        </Link>
        <NavLinks items={enlaces} />
      </nav>
    </header>
  )
}
