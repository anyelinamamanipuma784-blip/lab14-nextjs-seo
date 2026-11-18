import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
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

      <nav style={{ display: "flex", gap: "20px", padding: "1rem 2rem", backgroundColor: "#1e293b", color: "white" }}>
        <Link href="/" style={{ color: "white", fontWeight: "bold" }}>Inicio</Link>
        <Link href="/blog" style={{ color: "#93c5fd" }}>Blog</Link>
        <Link href="/contacto" style={{ color: "#93c5fd" }}>Contacto</Link>
      </nav>

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Bienvenido a TechSEO Lab</h1>
        <p>Proyecto optimizado para motores de búsqueda con Next.js, Render y Google Search Console.</p>
        <Image
          src="/images/seo-image.png"
          width={700}
          height={350}
          alt="Optimización SEO en Next.js"
          priority
          style={{ borderRadius: "8px", marginTop: "1rem" }}
        />
      </main>
    </>
  );
}