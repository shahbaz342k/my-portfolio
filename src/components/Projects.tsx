/* ─────────────────────────────────────────
   PROJECTS
───────────────────────────────────────── */
import { useState } from "react";
import { useReveal } from "../hooks";
import { C, T } from "../types/tokens";
import { Accent, Divider, SectionHeading, SectionLabel } from "./common/Shared";
import { PROJECTS } from "../types/data";
import type { Project } from "../types";
import { ExternalIcon, FolderIcon } from "./common/Icons";
function Projects() {
  const ref = useReveal();
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "100px 0", background: C.dim, position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="reveal">
          <SectionLabel n="04" label="Projects" />
          <SectionHeading>Things I've <Accent>Built</Accent></SectionHeading>

          {/* Featured */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            {featured.map((p, i) => <FeaturedCard key={p.name} project={p} num={i + 1} />)}
          </div>

          {/* Other cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            {others.map((p) => <SmallCard key={p.name} project={p} />)}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          #projects .reveal > div:nth-child(3) { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          #projects .reveal > div:nth-child(2) { grid-template-columns: 1fr !important; }
          #projects .reveal > div:nth-child(3) { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export function FeaturedCard({ project, num }: { project: Project; num: number }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? C.accent + "40" : C.line}`, padding: "32px 28px", position: "relative", overflow: "hidden", transition: "border-color 0.3s" }}>
      {/* BG number */}
      <div style={{ position: "absolute", top: 8, right: 12, fontFamily: T.display, fontSize: 80, fontWeight: 900, color: C.line, opacity: 0.7, lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>0{num}</div>

      <div style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12, gap: 8 }}>
          <h3 style={{ fontFamily: T.display, fontSize: 22, fontWeight: 700, color: hov ? C.accent : C.paper, transition: "color 0.2s" }}>{project.name}</h3>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer"
              style={{ color: C.muted, transition: "color 0.2s", flexShrink: 0, marginTop: 2 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
              <ExternalIcon />
            </a>
          )}
        </div>
        <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{project.description}</p>

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontFamily: T.mono, fontSize: 9, color: C.muted + "80", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>Modules Delivered</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.modules.map((m) => (
              <span key={m} style={{ fontFamily: T.mono, fontSize: 10, border: `1px solid ${C.line}`, color: C.muted, padding: "3px 8px" }}>{m}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.tech.map((t) => (
            <span key={t} style={{ fontFamily: T.mono, fontSize: 11, color: C.accent + "cc", fontWeight: 500 }}>#{t.replace(/\s/g, "")}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project }: { project: Project }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? C.accent + "40" : C.line}`, padding: "20px", transition: "border-color 0.3s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <FolderIcon />
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer"
            style={{ color: "transparent", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "transparent")}>
            <ExternalIcon />
          </a>
        )}
      </div>
      <h3 style={{ fontFamily: T.display, fontSize: 16, fontWeight: 700, color: hov ? C.accent : C.paper, transition: "color 0.2s", marginBottom: 8 }}>{project.name}</h3>
      <p style={{ color: C.muted, fontSize: 12, lineHeight: 1.6, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {project.tech.slice(0, 3).map((t) => <span key={t} style={{ fontFamily: T.mono, fontSize: 10, color: C.accent + "aa" }}>{t}</span>)}
      </div>
    </div>
  );
}
export default Projects;