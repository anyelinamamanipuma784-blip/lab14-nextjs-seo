import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { getPostsFromCMS } from "../../lib/cms";

export async function getServerSideProps({ params }) {
  const posts = await getPostsFromCMS();
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | TechSEO Lab</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content="https://lab14-nextjs-seo.onrender.com/images/seo-image.png" />
        <meta property="og:url" content={`https://lab14-nextjs-seo.onrender.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="hero-card">
        <div style={{ marginBottom: "1.2rem" }}>
          <Link href="/blog" className="btn-secondary" style={{ display: "inline-block", padding: "0.45rem 1rem", fontSize: "0.85rem" }}>
            ← Volver al Blog
          </Link>
        </div>

        <span className="badge badge-lavender">Ruta Dinámica Indexada · {post.updatedAt}</span>
        <h1 className="hero-title" style={{ fontSize: "2.1rem" }}>
          {post.title}
        </h1>
        <p className="hero-subtitle" style={{ marginBottom: "1.5rem" }}>
          {post.excerpt}
        </p>

        <div className="card" style={{ backgroundColor: "#ffffff" }}>
          <h2 className="card-title">Contenido del Artículo</h2>
          <p className="card-text" style={{ marginBottom: "1rem" }}>
            Esta página fue generada dinámicamente desde el parámetro <span className="code-pill">/blog/{post.slug}</span>{" "}
            conectado a nuestro CMS simulado. Sus meta tags <span className="code-pill">&lt;title&gt;</span>,{" "}
            <span className="code-pill">description</span> y <span className="code-pill">Open Graph</span> se construyen
            automáticamente en el servidor (SSR) para que Google pueda indexar cada artículo de forma independiente.
          </p>
        </div>
      </article>
    </Layout>
  );
}