export default function Button({ children, className, onClick, disabled, name }) {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      name={name}
    >
      {children}
    </button>
  );
}
