import Head from "next/head";
import Link from "next/link";
import { getPostsFromCMS } from "../lib/cms";

export async function getServerSideProps() {
  const posts = await getPostsFromCMS();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web y SEO | Artículos Técnicos Next.js</title>
        <meta
          name="description"
          content="Explora nuestros artículos técnicos sobre SEO en React, sitemaps dinámicos, optimización de imágenes y rendimiento."
        />
        <meta property="og:title" content="Blog Técnico | TechSEO Lab" />
        <meta
          property="og:description"
          content="Guías paso a paso sobre posicionamiento web y arquitectura en Next.js."
        />
        <meta property="og:image" content="https://lab14-nextjs-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content="https://lab14-nextjs-seo.onrender.com/blog" />
        <meta property="og:type" content="article" />
      </Head>

      <nav style={{ display: "flex", gap: "20px", padding: "1rem 2rem", backgroundColor: "#1e293b", color: "white" }}>
        <Link href="/" style={{ color: "#93c5fd" }}>Inicio</Link>
        <Link href="/blog" style={{ color: "white", fontWeight: "bold" }}>Blog</Link>
        <Link href="/contacto" style={{ color: "#93c5fd" }}>Contacto</Link>
      </nav>

      <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Blog de Artículos (Desde CMS / BD)</h1>
        <p>Estas rutas se indexan automáticamente en nuestro Sitemap dinámico:</p>

        <div style={{ display: "grid", gap: "1rem", marginTop: "1.5rem" }}>
          {posts.map((post) => (
            <article key={post.id} style={{ padding: "1rem", border: "1px solid #cbd5e1", borderRadius: "8px" }}>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <small style={{ color: "#64748b" }}>
                Slug indexado: <code>/blog/{post.slug}</code> | Actualizado: {post.updatedAt}
              </small>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}