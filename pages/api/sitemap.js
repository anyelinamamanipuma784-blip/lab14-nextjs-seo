import { getPostsFromCMS } from "../../lib/cms";

const BASE_URL = "https://lab14-nextjs-seo.onrender.com";

export default async function handler(req, res) {
  // 1. Rutas estáticas principales
  const staticPages = ["/", "/blog", "/contacto"];

  // 2. Rutas dinámicas desde la Base de Datos / CMS
  const posts = await getPostsFromCMS();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (url) => `
      <url>
        <loc>${BASE_URL}${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join("")}
    ${posts
      .map(
        (post) => `
      <url>
        <loc>${BASE_URL}/blog/${post.slug}</loc>
        <lastmod>${post.updatedAt}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.9</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}