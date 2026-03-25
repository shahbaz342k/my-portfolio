/* ─────────────────────────────────────────
   ABOUT
───────────────────────────────────────── */
import { useState } from "react";
import { useReveal } from "../hooks";
import { C, T } from "../types/tokens";
import { Accent, CTABtn, Divider, SectionHeading, SectionLabel } from "./common/Shared";

function About() {
  const ref = useReveal();
  const stats = [
    { v: "7.2+", l: "Years Exp." },
    { v: "6", l: "Companies" },
    { v: "6+", l: "Live Projects" },
    { v: "React", l: "Core Stack" },
  ];

  return (
    <section id="about" style={{ padding: "100px 0", position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Left */}
          <div>
            <SectionLabel n="01" label="About" />
            <SectionHeading>
              Building the <Accent>web</Accent> that{" "}<em style={{ fontStyle: "italic" }}>users love.</em>
            </SectionHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, color: C.muted, lineHeight: 1.8, fontSize: 15 }}>
              <p>I'm a Senior Frontend Engineer based in <strong style={{ color: C.paper }}>Noida, India</strong>, with over <strong style={{ color: C.paper }}>7.2 years</strong> of professional experience building fast, accessible, and beautifully crafted web applications.</p>
              <p>My expertise lies in the React ecosystem — from rapid prototyping to full-scale Next.js apps with SSR, GraphQL integrations, and Firebase real-time features. I care deeply about performance and clean, maintainable code.</p>
              <p>Beyond code, I mentor junior developers, lead cross-functional teams, and translate product requirements into exceptional user experiences.</p>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <CTABtn href="mailto:shahbaz342s@gmail.com" primary>Say Hello</CTABtn>
              <CTABtn href="https://github.com/shahbaz342k">View GitHub</CTABtn>
            </div>
          </div>

          {/* Right: stat grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {stats.map((s) => (
               <StatCard key={s.l} value={s.v} label={s.l} />
            ))}
            <div style={{ gridColumn: "span 2", border: `1px solid ${C.line}`, padding: 24 }}>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: C.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>Currently Based In</div>
              <div style={{ color: C.paper, fontWeight: 600, fontSize: 17 }}>Noida, Uttar Pradesh, India</div>
              <div style={{ color: C.muted, fontSize: 13, fontFamily: T.mono, marginTop: 4 }}>Open to remote &amp; hybrid roles</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #about .reveal { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? C.accent + "50" : C.line}`, padding: "24px 20px", transition: "border-color 0.3s" }}>
      <div style={{ fontFamily: T.display, fontSize: 40, fontWeight: 900, color: hov ? C.accent : C.paper, transition: "color 0.3s", marginBottom: 4 }}>{value}</div>
      <div style={{ fontFamily: T.mono, fontSize: 10, color: C.muted, letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}
export default About;