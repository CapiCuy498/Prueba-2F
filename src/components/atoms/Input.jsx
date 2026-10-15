export function Input({ id, name, type = 'text', value, onChange, invalid = false, ...rest }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      aria-invalid={invalid}
      className={`form-control${invalid ? ' is-invalid' : ''}`}
      {...rest}
    />
  )
}
