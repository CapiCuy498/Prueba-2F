import '../../styles/atoms/button.css'

export function Button({ children, type = 'button', className = '', onClick }) {
  return (
    <button type={type} className={`btn btn-cine ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
