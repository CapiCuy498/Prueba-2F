import { Text } from '../atoms/Text'

export function FormField({ id, label, help, error, children }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {help && <Text className="form-text">{help}</Text>}
      {error && (
        <Text className="field-error" variant="p">
          <span role="alert">{error}</span>
        </Text>
      )}
    </div>
  )
}
