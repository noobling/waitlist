export default function MyInput({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      style={{
        padding: "8px",
        border: "1px solid #e0e0e0",
        borderRadius: "4px",
      }}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
