import { useEffect, useState, type CSSProperties } from "react";
import { C, T } from "../types/tokens";
import { HireBtn } from "./common/Shared";

/* ─────────────────────────────────────────
   NAVBAR
───────────────────────────────────────── */
const NAV_LINKS = ["about", "skills", "experience", "projects", "contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const base: CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
    transition: "all 0.4s ease",
    background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? `1px solid ${C.line}` : "1px solid transparent",
  };

  return (
    <header style={base}>
      <nav style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="#" style={{ fontFamily: T.display, fontSize: 22, fontWeight: 900, color: C.paper, textDecoration: "none" }}>
          MS<span style={{ color: C.accent }}>.</span>
        </a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="nav-desktop">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                style={{ fontFamily: T.mono, fontSize: 11, color: C.muted, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <HireBtn />

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
          className="nav-hamburger"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} style={{ width: 22, height: 1, background: C.paper, margin: "5px 0", transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(4px, 4px)" : i === 2 ? "rotate(-45deg) translate(4px, -4px)" : "scaleX(0)") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: C.dim, borderTop: `1px solid ${C.line}`, padding: "20px 24px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l} href={`#${l}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: T.mono, fontSize: 13, color: C.paper, textDecoration: "none", letterSpacing: "0.12em", textTransform: "uppercase", padding: "10px 0", borderBottom: `1px solid ${C.line}` }}>
              {l}
            </a>
          ))}
          <div style={{ marginTop: 16 }}><HireBtn /></div>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hire-btn { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}