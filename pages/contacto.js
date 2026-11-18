import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Asesoría en Desarrollo Web y Auditoría SEO</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo de desarrollo web para consultas sobre auditoría SEO y rendimiento en Next.js."
        />
        <meta property="og:title" content="Contacto | TechSEO Lab" />
        <meta
          property="og:description"
          content="Escríbenos para resolver tus dudas sobre optimización web."
        />
        <meta property="og:image" content="https://lab14-nextjs-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content="https://lab14-nextjs-seo.onrender.com/contacto" />
        <meta property="og:type" content="website" />
      </Head>

      <nav style={{ display: "flex", gap: "20px", padding: "1rem 2rem", backgroundColor: "#1e293b", color: "white" }}>
        <Link href="/" style={{ color: "#93c5fd" }}>Inicio</Link>
        <Link href="/blog" style={{ color: "#93c5fd" }}>Blog</Link>
        <Link href="/contacto" style={{ color: "white", fontWeight: "bold" }}>Contacto</Link>
      </nav>

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Contacto</h1>
        <p>¿Tienes consultas sobre optimización SEO en Next.js? Escríbenos:</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente");
          }}
          style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px", marginTop: "1rem" }}
        >
          <input type="text" placeholder="Tu nombre" required style={{ padding: "8px" }} />
          <input type="email" placeholder="Tu correo electrónico" required style={{ padding: "8px" }} />
          <textarea placeholder="Tu mensaje" rows={4} required style={{ padding: "8px" }} />
          <button type="submit" style={{ padding: "10px", backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
            Enviar Consulta
          </button>
        </form>
      </main>
    </>
  );
}