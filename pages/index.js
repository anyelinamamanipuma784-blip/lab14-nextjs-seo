import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Inicio | TechSEO Lab - Desarrollo Web y Optimización Next.js</title>
        <meta
          name="description"
          content="Plataforma educativa sobre optimización de rendimiento web, Core Web Vitals y posicionamiento SEO con Next.js."
        />
        <meta property="og:title" content="TechSEO Lab - Optimización Web con Next.js" />
        <meta
          property="og:description"
          content="Descubre cómo posicionar tu aplicación web en Google usando meta tags dinámicos y sitemaps."
        />
        <meta property="og:image" content="https://lab14-nextjs-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content="https://lab14-nextjs-seo.onrender.com/" />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="hvWIEJ597fDrCFunY3e5YLKXhnDLSOd_8DFsHo8w9Tc" />

      </Head>

      {/* Hero principal */}
      <section className="hero-card">
        <span className="badge badge-lavender">Next.js 16 · Rendimiento & SEO</span>
        <h1 className="hero-title">Optimización Web y Posicionamiento en Buscadores</h1>
        <p className="hero-subtitle">
          Arquitectura moderna con meta tags dinámicos, generación automatizada de sitemaps XML,
          conversión inteligente de imágenes a WebP y carga diferida de componentes.
        </p>
        <div className="btn-group">
          <Link href="/blog" className="btn-primary">
            Explorar Artículos del Blog
          </Link>
          <a href="/api/sitemap" target="_blank" rel="noreferrer" className="btn-secondary">
            Ver Sitemap XML →
          </a>
        </div>
      </section>

      {/* Tarjetas de características */}
      <section className="grid-3" style={{ marginBottom: "2.5rem" }}>
        <div className="card">
          <span className="badge badge-lavender">SEO Técnico</span>
          <h2 className="card-title">Meta Tags Dinámicos</h2>
          <p className="card-text">
            Configuración individual de títulos, descripciones y tarjetas Open Graph en cada ruta para mejorar la visibilidad.
          </p>
        </div>

        <div className="card">
          <span className="badge badge-mint">Indexación</span>
          <h2 className="card-title">Sitemap XML Dinámico</h2>
          <p className="card-text">
            Endpoint API conectado a un CMS simulado que actualiza las URLs automáticamente para Google Search Console.
          </p>
        </div>

        <div className="card">
          <span className="badge badge-peach">Velocidad</span>
          <h2 className="card-title">Imágenes WebP & Fuentes</h2>
          <p className="card-text">
            Optimización automática mediante next/image y tipografía sin saltos visuales con next/font/google.
          </p>
        </div>
      </section>

      {/* Recuadro de imagen destacada */}
      <section className="card">
        <h2 className="card-title" style={{ marginBottom: "1rem" }}>
          Vista Previa Optimizada con next/image
        </h2>
        <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #e9e6f5" }}>
          <Image
            src="/images/seo-image.png"
            width={960}
            height={420}
            alt="Optimización SEO en Next.js"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </section>
    </Layout>
  );
}