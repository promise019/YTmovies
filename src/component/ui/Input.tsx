export default function Input({
  className,
  onChange,
  name,
  value,
  type,
  readonly,
}): unknown {
  return (
    <input
      type={type}
      className={className}
      onChange={onChange}
      name={name}
      readOnly={readonly}
      value={value}
    />
  );
}
