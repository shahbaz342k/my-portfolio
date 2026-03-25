import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   HOOKS
───────────────────────────────────────── */
export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("in"); },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function useTyping(words: string[], speed = 60, eraseSpeed = 35, pause = 2000) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[idx];
    if (typing) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), eraseSpeed);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
  }, [text, typing, idx, words, speed, eraseSpeed, pause]);

  return text;
}