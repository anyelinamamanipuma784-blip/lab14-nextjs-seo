import Head from "next/head";
import Layout from "../components/Layout";
import { getPostsFromCMS } from "../lib/cms";

export async function getServerSideProps() {
  const posts = await getPostsFromCMS();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <Layout>
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

      <section className="hero-card" style={{ padding: "2.2rem 2.5rem" }}>
        <span className="badge badge-mint">Conectado a CMS / Base de Datos</span>
        <h1 className="hero-title" style={{ fontSize: "2rem" }}>
          Blog Técnico y Guías SEO
        </h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>
          Cada artículo mostrado aquí se consulta dinámicamente y se incluye de forma automática en nuestro endpoint{" "}
          <span className="code-pill">/api/sitemap</span>.
        </p>
      </section>

      <section className="grid-3">
        {posts.map((post, index) => (
          <article key={post.id} className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className={`badge ${index % 2 === 0 ? "badge-lavender" : "badge-peach"}`}>
                Artículo #{post.id}
              </span>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.excerpt}</p>
            </div>

            <div className="card-footer-meta">
              <span className="code-pill">/blog/{post.slug}</span>
              <span>{post.updatedAt}</span>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}