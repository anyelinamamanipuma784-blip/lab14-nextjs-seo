// Simulación de artículos almacenados en una Base de Datos o CMS
export async function getPostsFromCMS() {
  return [
    {
      id: 1,
      slug: "guia-seo-nextjs-2026",
      title: "Guía completa de SEO técnico en Next.js",
      excerpt: "Aprende a configurar meta tags dinámicos y sitemaps XML.",
      updatedAt: "2026-11-18",
    },
    {
      id: 2,
      slug: "optimizacion-core-web-vitals",
      title: "Cómo mejorar tus Core Web Vitals con next/image",
      excerpt: "Reduce el tiempo de carga convirtiendo imágenes a WebP automáticamente.",
      updatedAt: "2026-11-17",
    },
    {
      id: 3,
      slug: "lazy-loading-componentes-react",
      title: "Lazy Loading avanzado con next/dynamic",
      excerpt: "Carga componentes pesados solo cuando el usuario los necesita.",
      updatedAt: "2026-11-15",
    },
  ];
}