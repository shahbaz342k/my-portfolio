/**
 * Mohd Shahbaz — Portfolio
 * React + TypeScript (Single-file, zero external deps beyond React)
 *
 * SETUP:
 *   1. npx create-react-app my-portfolio --template typescript
 *      OR: npm create vite@latest my-portfolio -- --template react-ts
 *   2. Replace src/App.tsx content with this file
 *   3. In public/index.html <head>, add:
 *      <link rel="preconnect" href="https://fonts.googleapis.com">
 *      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
 *   4. npm start / npm run dev
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



/* ─────────────────────────────────────────
   GLOBAL STYLES (injected once)
───────────────────────────────────────── */


// function InjectStyles() {
//   // useEffect(() => {
//   //   const style = document.createElement("style");
//   //   style.textContent = GLOBAL_CSS;
//   //   document.head.appendChild(style);
//   //   return () => { document.head.removeChild(style); };
//   // }, []);
//   return null;
// }
/* ─────────────────────────────────────────
   APP ROOT
───────────────────────────────────────── */
function Portfolio() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
export default Portfolio;