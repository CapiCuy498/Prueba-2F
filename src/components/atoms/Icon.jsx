const ICONOS = {
  check: {
    fondo: '#C9A24B',
    forma: (
      <path
        d="M14 25l7 7 13-14"
        fill="none"
        stroke="#15130F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  star: {
    fondo: '#7A2331',
    forma: (
      <path
        d="M24 12l3.2 6.7 7.3 1-5.3 5.2 1.3 7.3L24 28.8l-6.5 3.4 1.3-7.3-5.3-5.2 7.3-1z"
        fill="#EDE6D8"
      />
    ),
  },
}

export function Icon({ name, label, size = 44 }) {
  const icono = ICONOS[name]

  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      role="img"
      aria-label={label}
      className="flex-shrink-0"
    >
      <circle cx="24" cy="24" r="22" fill={icono.fondo} />
      {icono.forma}
    </svg>
  )
}
