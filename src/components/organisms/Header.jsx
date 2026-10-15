import { NavLinks } from '../molecules/NavLinks'
import '../../styles/organisms/header.css'

export function Header({ nombre, enlaces }) {
  return (
    <header className="site-header sticky-top">
      <nav className="navbar container py-3" aria-label="Navegación principal">
        <a className="navbar-brand brand" href="/">
          {nombre}
        </a>
        <NavLinks items={enlaces} />
      </nav>
    </header>
  )
}
