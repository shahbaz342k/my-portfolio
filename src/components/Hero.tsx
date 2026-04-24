import type { CSSProperties } from "react";
import { useTyping } from "../hooks";
import { ROLES } from "../types/data";
import { C, T } from "../types/tokens";
import { CTABtn, SocialLink } from "./common/Shared";
import { GithubIcon, LinkedinIcon } from "./common/Icons";

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  const typed = useTyping(ROLES);

  const fadeUp = (delay: number): CSSProperties => ({
    animation: `fadeUp 0.7s ease ${delay}s both`,
  });

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      {/* Grid background */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(240,235,224,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(240,235,224,0.04) 1px, transparent 1px)`, backgroundSize: "72px 72px", pointerEvents: "none" }} />
      {/* Glow blobs */}
      <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, background: `${C.accent}12`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -100, right: "20%", width: 400, height: 400, background: `${C.accent}07`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      {/* Large decorative BG text */}
      <div style={{ position: "absolute", top: "50%", right: -40, transform: "translateY(-50%)", fontFamily: T.display, fontSize: "22vw", fontWeight: 900, color: `${C.line}`, lineHeight: 1, userSelect: "none", pointerEvents: "none", opacity: 0.6 }}>
        DEV
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 24px 60px", width: "100%", position: "relative" }}>
        {/* Badge */}
        <div style={{ ...fadeUp(0.15), display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
          <span style={{ width: 32, height: 1, background: C.accent, display: "inline-block" }} />
          <span style={{ fontFamily: T.mono, fontSize: 11, color: C.accent, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Available for Work
          </span>
        </div>

        {/* Name */}
        <h1 style={{ ...fadeUp(0.3), fontFamily: T.display, fontSize: "clamp(3rem, 9vw, 7rem)", fontWeight: 900, color: C.paper, lineHeight: 1.0, marginBottom: 20 }}>
          Mohd{" "}
          <em style={{ color: C.accent, fontWeight: 300 }}>Shahbaz</em>
        </h1>

        {/* Typing */}
        <div style={{ ...fadeUp(0.45), height: 40, marginBottom: 28 }}>
          <span style={{ fontFamily: T.mono, fontSize: "clamp(1rem, 2.5vw, 1.35rem)", color: C.muted }}>
            {typed}
            <span style={{ display: "inline-block", width: 2, height: "1.1em", background: C.accent, marginLeft: 2, verticalAlign: "text-bottom", animation: "blink 1s step-end infinite" }} />
          </span>
        </div>

        {/* Description */}
        <p style={{ ...fadeUp(0.55), maxWidth: 560, color: C.muted, lineHeight: 1.8, fontSize: 16, marginBottom: 36 }}>
          Over <strong style={{ color: C.paper }}>7.2 years</strong> of expertise crafting high-performance web applications. Specializing in{" "}
          <strong style={{ color: C.paper }}>Angular, & TypeScript</strong> — turning complex problems into elegant, scalable solutions.
        </p>

        {/* CTA Buttons */}
        <div style={{ ...fadeUp(0.65), display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
          <CTABtn href="#projects" primary>View My Work</CTABtn>
          <CTABtn href="#contact">Get In Touch</CTABtn>
        </div>

        {/* Socials */}
        <div style={{ ...fadeUp(0.78), display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <SocialLink href="https://github.com/shahbaz342k" icon={<GithubIcon />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/mohd-shahbaz-5796b6127" icon={<LinkedinIcon />} label="LinkedIn" />
          <a href="tel:8604046337" style={{ fontFamily: T.mono, fontSize: 12, color: C.muted, textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}>
            +91 860 404 6337
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: 32, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4, animation: "fadeIn 1s 1.5s both" }}>
        <span style={{ fontFamily: T.mono, fontSize: 9, letterSpacing: "0.25em", color: C.muted, writingMode: "vertical-rl", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, transparent, ${C.muted})` }} />
      </div>
    </section>
  );
}
export default Hero;