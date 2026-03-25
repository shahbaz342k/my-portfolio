

/* ─────────────────────────────────────────
   EXPERIENCE
───────────────────────────────────────── */
import { useState } from "react";
import { useReveal } from "../hooks";
import { C, T } from "../types/tokens";
import { Accent, Divider, SectionHeading, SectionLabel } from "./common/Shared";
import { EXPERIENCE } from "../types/data";
import type { Job } from "../types";
function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" style={{ padding: "100px 0", position: "relative" }}>
      <Divider />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div ref={ref} className="reveal">
          <SectionLabel n="03" label="Experience" />
          <SectionHeading>Where I've <Accent>Worked</Accent></SectionHeading>

          <div style={{ position: "relative" }}>
            {/* Vertical line (desktop) */}
            <div className="timeline-line" style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: C.line, transform: "translateX(-50%)" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
              {EXPERIENCE.map((job, i) => (
                <JobCard key={i} job={job} side={i % 2 === 0 ? "left" : "right"} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .job-card { margin-left: 0 !important; margin-right: 0 !important; width: 100% !important; }
        }
      `}</style>
    </section>
  );
}

export function JobCard({ job, side }: { job: Job; side: "left" | "right"; index: number }) {
  const [hov, setHov] = useState(false);
  const isLeft = side === "left";

  return (
    <div style={{ display: "flex", justifyContent: isLeft ? "flex-start" : "flex-end", position: "relative" }}>
      {/* Dot on timeline */}
      <div className="timeline-dot" style={{ position: "absolute", left: "50%", top: 28, transform: "translate(-50%, -50%)", width: 10, height: 10, borderRadius: "50%", background: job.current ? C.accent : C.dim, border: `2px solid ${job.current ? C.accent : C.line}`, zIndex: 2 }} />

      <div
        className="job-card"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ width: "47%", border: `1px solid ${hov ? C.accent + "40" : job.current ? C.accent + "30" : C.line}`, padding: "24px 28px", background: job.current ? `${C.accent}06` : "transparent", transition: "border-color 0.3s, background 0.3s" }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4, gap: 8, flexWrap: "wrap" }}>
          <h3 style={{ fontFamily: T.display, fontSize: 20, fontWeight: 700, color: hov ? C.accent : C.paper, transition: "color 0.2s" }}>{job.company}</h3>
          {job.current && (
            <span style={{ fontFamily: T.mono, fontSize: 9, letterSpacing: "0.15em", color: C.accent, border: `1px solid ${C.accent}`, padding: "3px 8px", textTransform: "uppercase", flexShrink: 0 }}>Current</span>
          )}
        </div>
        <div style={{ color: C.muted, fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{job.role}</div>
        <div style={{ fontFamily: T.mono, fontSize: 10, color: C.muted + "90", letterSpacing: "0.1em", marginBottom: 16 }}>{job.period} · {job.location}</div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {job.highlights.map((h, i) => (
            <li key={i} style={{ display: "flex", gap: 8, color: C.muted, fontSize: 13 }}>
              <span style={{ color: C.accent, flexShrink: 0, marginTop: 1 }}>›</span>{h}
            </li>
          ))}
        </ul>
      </div>
      <style>{`@media(max-width:768px) { .timeline-dot { display: none; } }`}</style>
    </div>
  );
}
export default Experience;