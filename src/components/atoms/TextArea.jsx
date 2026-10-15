export function TextArea({ id, name, rows = 3, value, onChange, invalid = false, ...rest }) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      aria-invalid={invalid}
      className={`form-control${invalid ? ' is-invalid' : ''}`}
      {...rest}
    />
  )
}
