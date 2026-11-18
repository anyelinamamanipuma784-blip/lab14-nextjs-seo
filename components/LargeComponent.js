export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", marginTop: "20px", backgroundColor: "#eef6ff", border: "1px solid #90caf9", borderRadius: "8px" }}>
      <h2>Componente Pesado (Lazy Loading)</h2>
      <p>Este componente se cargó dinámicamente solo en el navegador (ssr: false).</p>
    </div>
  );
}