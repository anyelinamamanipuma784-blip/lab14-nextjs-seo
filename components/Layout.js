import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="brand">
            <span className="brand-dot" />
            <span>TechSEO Lab</span>
          </Link>

          <nav className="nav-links">
            <Link href="/" className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
              Inicio
            </Link>
            <Link href="/blog" className={`nav-link ${router.pathname === "/blog" ? "active" : ""}`}>
              Blog
            </Link>
            <Link href="/contacto" className={`nav-link ${router.pathname === "/contacto" ? "active" : ""}`}>
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <main className="container">{children}</main>

      <footer className="footer">
        <p>
          TechSEO Lab © 2026 — Optimización Web con Next.js |{" "}
          <a href="/api/sitemap" target="_blank" rel="noreferrer" style={{ color: "#5b46e8", fontWeight: 600 }}>
            Sitemap XML
          </a>{" "}
          ·{" "}
          <a href="/robots.txt" target="_blank" rel="noreferrer" style={{ color: "#5b46e8", fontWeight: 600 }}>
            robots.txt
          </a>
        </p>
      </footer>
    </>
  );
}