export default function MyButton({
  loading,
  handleSubmit,
  text,
}: {
  loading?: boolean;
  handleSubmit: () => void;
  text: string;
}) {
  return (
    <button
      disabled={loading}
      onClick={handleSubmit}
      style={{
        padding: "8px",
        borderRadius: "4px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}
