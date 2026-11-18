import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <Layout>
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

      <section className="grid-2">
        {/* Recuadro izquierdo: Información */}
        <div className="hero-card" style={{ marginBottom: 0 }}>
          <span className="badge badge-peach">Soporte & Consultoría</span>
          <h1 className="hero-title" style={{ fontSize: "2rem" }}>
            Hablemos de tu Proyecto Web
          </h1>
          <p className="hero-subtitle">
            ¿Necesitas mejorar el posicionamiento en Google o auditar los Core Web Vitals de tu aplicación Next.js? Escríbenos.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
            <div style={{ background: "#ffffff", padding: "1rem 1.2rem", borderRadius: "14px", border: "1px solid #e9e6f5" }}>
              <strong style={{ display: "block", fontSize: "0.9rem", color: "#5b46e8" }}>Correo Electrónico</strong>
              <span style={{ color: "#475569", fontSize: "0.95rem" }}>soporte@techseolab.edu.pe</span>
            </div>

            <div style={{ background: "#ffffff", padding: "1rem 1.2rem", borderRadius: "14px", border: "1px solid #e9e6f5" }}>
              <strong style={{ display: "block", fontSize: "0.9rem", color: "#065f46" }}>Laboratorio</strong>
              <span style={{ color: "#475569", fontSize: "0.95rem" }}>Desarrollo de Aplicaciones Web Avanzado · Tecsup</span>
            </div>
          </div>
        </div>

        {/* Recuadro derecho: Formulario */}
        <div className="card">
          <h2 className="card-title" style={{ marginBottom: "1.2rem" }}>
            Envíanos un Mensaje
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-input" placeholder="Ej. Ana Mendoza" required />
            </div>

            <div className="form-group">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-input" placeholder="ana@ejemplo.com" required />
            </div>

            <div className="form-group">
              <label className="form-label">Consulta técnica</label>
              <textarea
                className="form-input"
                rows={4}
                placeholder="Cuéntanos sobre tu proyecto o duda de SEO..."
                required
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%" }}>
              Enviar Consulta
            </button>

            {enviado && (
              <div className="alert-success">
                ✓ ¡Mensaje recibido! Nos pondremos en contacto contigo pronto.
              </div>
            )}
          </form>
        </div>
      </section>
    </Layout>
  );
}