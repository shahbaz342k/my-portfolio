/* ─────────────────────────────────────────
   SKILLS
───────────────────────────────────────── */
import { useEffect, useState } from "react";
import { useReveal } from "../hooks";
import { C, T } from "../types/tokens";
import { Accent, Divider, SectionHeading, SectionLabel } from "./common/Shared";
import { SKILLS, TOOLS } from "../types/data";
import type { Skill } from "../types";
function Skills() {
  const ref = useReveal();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);

  return (
    <section id="skills" style={{ padding: "100px 0", background: C.dim, position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="reveal">
          <SectionLabel n="02" label="Skills" />
          <SectionHeading>Technical <Accent>Expertise</Accent></SectionHeading>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
            {/* Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {SKILLS.map((s, i) => (
                <SkillBar key={s.name} skill={s} animate={animate} delay={i * 80} />
              ))}
            </div>

            {/* Tags + principles */}
            <div>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: C.muted, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>All Technologies</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
                {TOOLS.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <div style={{ border: `1px solid ${C.line}`, padding: 24 }}>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: C.accent, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>What I Bring</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Component-driven architecture & design systems",
                    "Performance optimization & Core Web Vitals",
                    "Cross-functional team leadership & mentoring",
                    "Full SDLC ownership — design to deployment",
                    "Agile workflows with JIRA & sprint planning",
                  ].map((p) => (
                    <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: C.muted, fontSize: 13 }}>
                      <span style={{ color: C.accent, marginTop: 1, flexShrink: 0 }}>→</span>{p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { #skills .reveal > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

export function SkillBar({ skill, animate, delay }: { skill: Skill; animate: boolean; delay: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: C.paper, fontSize: 14, fontWeight: 500 }}>{skill.name}</span>
        <span style={{ fontFamily: T.mono, fontSize: 11, color: C.muted }}>{skill.level}%</span>
      </div>
      <div style={{ height: 1, background: C.line, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, height: "100%", background: C.accent, width: animate ? `${skill.level}%` : "0%", transition: `width 1s ease ${delay}ms` }} />
      </div>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <span onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontFamily: T.mono, fontSize: 11, padding: "5px 12px", border: `1px solid ${hov ? C.accent : C.line}`, color: hov ? C.accent : C.muted, cursor: "default", transition: "all 0.2s", letterSpacing: "0.05em" }}>
      {children}
    </span>
  );
}
export default Skills;