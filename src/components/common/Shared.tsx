import React, { useState } from "react";
import { C, T } from "../../types/tokens";
/* ─────────────────────────────────────────
   SMALL SHARED COMPONENTS
───────────────────────────────────────── */
export const SectionLabel = ({ n, label }: { n: string; label: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ fontFamily: T.mono, fontSize: 12, color: C.accent, letterSpacing: "0.15em", textTransform: "uppercase" }}>
        {n} — {label}
      </span>
    </div>
  );
}

export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 style={{ fontFamily: T.display, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: C.paper, lineHeight: 1.1, marginBottom: 48 }}>
      {children}
    </h2>
  );
}

export const Accent = ({ children }: { children: React.ReactNode }) => {
  return <em style={{ color: C.accent, fontStyle: "italic", fontWeight: 300 }}>{children}</em>;
}

export const Divider = () => {
  return (
    <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${C.line}, transparent)` }} />
  );
}

export const HireBtn = ({text = "Hire Me"}) => {
  const [hov, setHov] = useState(false);
  return (
    <a href="mailto:shahbaz342s@gmail.com"
      className="nav-hire-btn"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: hov ? "#fff" : C.accent, background: hov ? C.accent : "transparent", border: `1px solid ${C.accent}`, padding: "8px 18px", textDecoration: "none", transition: "all 0.2s" }}>
      {text}
    </a>
  );
}

export const CTABtn = ({ href, children, primary }: { href: string; children: React.ReactNode; primary?: boolean }) => {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontFamily: T.mono, fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", textDecoration: "none", padding: "14px 32px", background: primary ? (hov ? "#c94d1e" : C.accent) : "transparent", color: primary ? "#fff" : (hov ? C.paper : C.muted), border: primary ? "none" : `1px solid ${hov ? C.paper + "60" : C.line}`, transition: "all 0.2s" }}>
      {children}
    </a>
  );
}

export const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: T.mono, fontSize: 11, letterSpacing: "0.1em", textDecoration: "none", color: hov ? C.accent : C.muted, transition: "color 0.2s" }}>
      {icon}{label}
    </a>
  );
}