import { useReveal } from "../hooks";
import { Accent, Divider, SectionLabel } from "./common/Shared";
import { C, T } from "../types/tokens";
import { ArrowIcon, EmailIcon, LinkedinIcon, PhoneIcon } from "./common/Icons";
import { useState } from "react";


/* ─────────────────────────────────────────
   CONTACT
───────────────────────────────────────── */
function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}>
      <Divider />
      <div style={{ position: "absolute", bottom: -200, left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: `${C.accent}06`, borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative" }}>
        <div ref={ref} className="reveal">
          <SectionLabel n="05" label="Contact" />
          <h2 style={{ fontFamily: T.display, fontSize: "clamp(2.5rem, 7vw, 5.5rem)", fontWeight: 900, color: C.paper, lineHeight: 1.1, marginBottom: 20 }}>
            Let's <Accent>Work</Accent> Together
          </h2>
          <p style={{ color: C.muted, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.8 }}>
            I'm currently open to new opportunities. Whether you have a project in mind or just want to chat, my inbox is always open.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
            <ContactCard icon={<EmailIcon />} label="Email" value="shahbaz342s@gmail.com" href="mailto:shahbaz342s@gmail.com" />
            <ContactCard icon={<PhoneIcon />} label="Phone" value="+91 860 404 6337" href="tel:8604046337" />
            <ContactCard icon={<LinkedinIcon />} label="LinkedIn" value="mohd-shahbaz" href="https://linkedin.com/in/mohd-shahbaz-5796b6127" />
          </div>

          <a href="mailto:shahbaz342s@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: T.mono, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", padding: "16px 40px", background: C.accent, color: "#fff", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#c94d1e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.accent)}>
            Say Hello <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ border: `1px solid ${hov ? C.accent + "40" : C.line}`, padding: "24px 28px", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, minWidth: 180, transition: "border-color 0.3s" }}>
      <div style={{ width: 36, height: 36, border: `1px solid ${hov ? C.accent : C.line}`, display: "flex", alignItems: "center", justifyContent: "center", color: hov ? C.accent : C.muted, transition: "all 0.2s" }}>{icon}</div>
      <div style={{ fontFamily: T.mono, fontSize: 9, color: C.muted, letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</div>
      <div style={{ color: hov ? C.accent : C.paper, fontSize: 13, transition: "color 0.2s", wordBreak: "break-all", textAlign: "center" }}>{value}</div>
    </a>
  );
}
export default Contact;