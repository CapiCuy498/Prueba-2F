export function PasswordField({ label, id, value, onChange, mostrar, toggleMostrar, autoComplete, placeholder }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="input-group">
        <input
          id={id}
          type={mostrar ? "text" : "password"}
          className="form-control"
          placeholder={placeholder}
          autoComplete={autoComplete}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="btn btn-mostrar"
          onClick={toggleMostrar}
        >
          {mostrar ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </div>
  );
}