import { NavLink } from 'react-router-dom'

export function NavLinks({ items = [] }) {
  return (
    <ul className="navbar-nav flex-row gap-4 align-items-center">
      {items.map((item) => (
        <li key={item.label} className="nav-item">
          {item.onClick ? (
            <button type="button" className="nav-link btn btn-link" onClick={item.onClick}>
              {item.label}
            </button>
          ) : (
            <NavLink className="nav-link" to={item.to} end>
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  )
}
