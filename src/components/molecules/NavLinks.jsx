export function NavLinks({ items = [] }) {
  return (
    <ul className="navbar-nav flex-row gap-4">
      {items.map((item) => (
        <li key={item.label} className="nav-item">
          <a className="nav-link" href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
