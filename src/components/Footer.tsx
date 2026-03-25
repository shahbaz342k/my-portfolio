import { T,C } from "../types/tokens";
import { GithubIcon, LinkedinIcon } from "./common/Icons";

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.line}`, padding: "32px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontFamily: T.display, fontSize: 18, fontWeight: 900, color: C.paper }}>
          MS<span style={{ color: C.accent }}>.</span>
        </div>
        <p style={{ fontFamily: T.mono, fontSize: 11, color: C.muted, letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} Mohd Shahbaz · Built with React &amp; TypeScript
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="https://github.com/shahbaz342k" target="_blank" rel="noopener noreferrer"
            style={{ color: C.muted, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/mohd-shahbaz-5796b6127" target="_blank" rel="noopener noreferrer"
            style={{ color: C.muted, transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;