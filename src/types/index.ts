/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}


export interface Project {
  name: string;
  description: string;
  tech: string[];
  modules: string[];
  url?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
}