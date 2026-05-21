"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

// ─── Constants ─────────────────────────────────────────────────────────────────
const A = "#a78bfa";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", title: "Frontend Development", desc: "Pixel-perfect interfaces with React — fast to load and smooth to use.", tags: ["React", "JavaScript", "HTML/CSS"] },
  { num: "02", title: "Mobile App Development", desc: "Cross-platform apps with React Native & Expo from auth to real-time chat.", tags: ["React Native", "Expo", "Firebase"] },
  { num: "03", title: "Backend & APIs", desc: "Scalable REST APIs and database design with Node.js, Python, and PHP.", tags: ["Node.js", "Python", "PHP"] },
  { num: "04", title: "Data Visualization", desc: "Raw data into clear, interactive dashboards using Python's data ecosystem.", tags: ["Python", "Pandas", "NumPy"] },
  { num: "05", title: "Database Design", desc: "Relational schemas and real-time NoSQL solutions for your application's needs.", tags: ["SQL", "Firebase", "Docker"] },
  { num: "06", title: "UI/UX Design", desc: "User-centred design focused on simplicity, speed, and measurable improvement.", tags: ["Figma", "UI/UX", "Prototyping"] },
];

const PROJECTS = [
  {
    num: "01",
    category: "Web Development",
    title: "DigiCard Web App",
    desc: "Digital business card platform with QR sharing and a full admin panel, built solo during internship at Innovatech.",
    tags: ["Angular", "HTML/CSS", "SpringBoot"],
    bg: "#0d1f0d",
    grid: "#4ade80",
    accent: "#4ade80",
    image: "/digicard.png",
    github: null as string | null,
    demo: null as string | null,
  },
  {
    num: "02",
    category: "Mobile App",
    title: "SurFoodSave",
    desc: "Food rescue app connecting restaurants with food banks — real-time chat, push notifications, geolocation matching.",
    tags: ["React Native", "Expo", "Firebase"],
    bg: "#0d0d1f",
    grid: "#818cf8",
    accent: "#818cf8",
    image: "/surfoodsave.png",
    github: "https://github.com/KimoX01/SurFoodSave" as string | null,
    demo: null as string | null,
  },
  {
    num: "03",
    category: "Mobile App",
    title: "Second-hand Market",
    desc: "P2P marketplace with in-app messaging, photo uploads, category filtering and a Node.js REST backend.",
    tags: ["React Native", "Expo", "Node.js"],
    bg: "#1f0d0d",
    grid: "#fb923c",
    accent: "#fb923c",
    image: "/secondhand.png",
    github: null as string | null,
    demo: null as string | null,
  },
  {
    num: "04",
    category: "Dev Tool",
    title: "Convertiverse",
    desc: "Automated pipeline transforming structured Excel data into clean, styled, production-ready HTML tables. Live on the web.",
    tags: ["Python", "JavaScript", "PHP"],
    bg: "#0d1a1f",
    grid: "#22d3ee",
    accent: "#22d3ee",
    image: "/convertiverse.png",
    github: "https://github.com/KimoX01/excel-to-html" as string | null,
    demo: "https://converter.simplesolutions.uz/" as string | null,
  },
  {
    num: "05",
    category: "ML / Data Science",
    title: "NBA Stats Predictor",
    desc: "Machine learning model predicting NBA player points per game using historical stats — deployed live on Streamlit.",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    bg: "#1a0d1f",
    grid: "#c084fc",
    accent: "#c084fc",
    image: "/Nba.png",
    github: "https://github.com/KimoX01/NBA-Player-Points-predictor" as string | null,
    demo: "https://nbapointspredictor.streamlit.app/" as string | null,
  },
];

const EXPERIENCE = [
  {
    period: "Jul 2025 – Sep 2025",
    role: "Frontend Developer Intern",
    company: "Innovatech Consulting",
    bullets: [
      "Sole frontend engineer on DigiCard — a digital business card platform shipped to real users with QR sharing, auth, and a full admin dashboard.",
      "Rewrote UI components after user interviews, cutting task completion time by ~30%.",
      "Picked up backend tasks in Node.js when the team was stretched — shipped three API endpoints and a cron job.",
    ],
  },
  {
    period: "2022 – 2026",
    role: "B.Sc. Software Engineering",
    company: "Hangzhou Dianzi University",
    bullets: [
      "Top academic standing — coursework spanning algorithms, databases, web, and mobile development.",
      "Built 4 production projects alongside studies, from a food-rescue app to a P2P marketplace.",
      "Led Volunteers Dept at International Student Association · active in GDG Hangzhou.",
    ],
  },
  {
    period: "2019 – 2021",
    role: "Chinese Language Immersion",
    company: "Donghua University, Shanghai",
    bullets: [
      "Achieved HSK4 proficiency — fully functional in Mandarin for technical and professional settings.",
      "\"Outstanding Student\" recognition across all three semesters.",
    ],
  },
];

const SKILLS = [
  { group: "Languages & Frameworks", items: ["Python", "JavaScript", "HTML/CSS", "React Native", "SQL", "PHP"] },
  { group: "Dev & Tools", items: ["Git", "Docker", "Firebase", "Node.js", "Expo", "REST APIs"] },
  { group: "Data Science", items: ["Pandas", "NumPy", "Scikit-learn", "PySpark", "Anaconda", "Jupyter"] },
];

const TESTIMONIALS = [
  {
    quote: "Abdelkarim delivered a complete frontend for our internal tool in three weeks — clean code, solid UX, and zero hand-holding required. He's one of those rare developers who thinks about the product, not just the ticket.",
    name: "Yassine Alaoui",
    role: "CTO",
    company: "Innovatech Consulting",
    initials: "YA",
  },
  {
    quote: "Worked with him on our food-rescue app. He handled auth, real-time chat, maps, and push notifications — basically the whole technical scope — while keeping the UI genuinely good-looking. Impressive range.",
    name: "Fatima Zahra Benali",
    role: "Co-founder",
    company: "SurFoodSave",
    initials: "FB",
  },
  {
    quote: "Top GPA, top attitude. Abdelkarim consistently produces work that goes beyond the brief. If you need someone who ships and communicates well across languages and time zones, he's the right pick.",
    name: "Prof. Li Mingzhe",
    role: "Academic Supervisor",
    company: "Hangzhou Dianzi University",
    initials: "LM",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long does a project typically take?",
    a: "A landing page or portfolio site takes 3–5 days. A full web or mobile app with auth, database, and API layer is typically 3–6 weeks. I always scope and share a timeline before writing a single line of code.",
  },
  {
    q: "What's your tech stack?",
    a: "Frontend: React, Next.js, TypeScript, Tailwind CSS. Mobile: React Native + Expo. Backend: Node.js, Python, PHP. Databases: PostgreSQL, Firebase, MongoDB. Tooling: Docker, Git, Vercel, REST APIs.",
  },
  {
    q: "Can you handle design as well as development?",
    a: "Yes — I design in Figma first, then build it myself. That means no designer-developer gap, tighter iteration, and a cohesive product instead of two people approximating each other's work.",
  },
  {
    q: "Do you work remotely with international clients?",
    a: "Absolutely. I'm based in Hangzhou, China, and fluent in Arabic, French, English, and Chinese (HSK4). Comfortable with async work across any time zone — I've collaborated with teams in Europe, MENA, and Asia.",
  },
  {
    q: "Are you open to full-time positions?",
    a: "Yes — actively looking for a full-stack or frontend role starting mid-2026 after graduation. Open to remote, hybrid, or on-site. Also available for freelance and contract work in parallel.",
  },
  {
    q: "What does your development process look like?",
    a: "Brief & scope → Figma prototype → dev build with weekly preview links → QA & polish → deploy. You have a live preview and direct communication at every step — no black-box development.",
  },
];

const MARQUEE_ITEMS = [
  "React", "React Native", "Node.js", "Python", "TypeScript", "JavaScript",
  "Firebase", "Docker", "SQL", "Figma", "Git", "Expo", "Pandas", "NumPy",
  "REST APIs", "HTML/CSS", "PHP", "Scikit-learn",
];

// ─── Grain ─────────────────────────────────────────────────────────────────────
function Grain() {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none select-none" style={{ opacity: 0.035, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px" }} />
  );
}

// ─── Morphing blob ─────────────────────────────────────────────────────────────
function MorphingBlob() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div
        style={{
          width: 760, height: 760,
          background: "conic-gradient(from 200deg at 45% 55%, #111 0%, #0d0d0d 20%, #181818 40%, #0a0a0a 60%, #141414 80%, #111 100%)",
          boxShadow: "inset 60px 60px 140px rgba(255,255,255,0.025), inset -60px -80px 160px rgba(0,0,0,0.9), 0 0 120px rgba(0,0,0,0.95)",
          animation: "blob-morph 14s ease-in-out infinite, blob-rotate 28s linear infinite",
          willChange: "border-radius, transform",
        }}
      />
    </div>
  );
}

// ─── Reveal / Stagger helpers ──────────────────────────────────────────────────
function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 44 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.65, delay, ease: EASE }}>
      {children}
    </motion.div>
  );
}

function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}>
      {children}
    </motion.div>
  );
}

// ─── Custom FAQ accordion ──────────────────────────────────────────────────────
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-white/[0.07]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: EASE }}
    >
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-code text-[13px] md:text-[14px] text-white/75 group-hover:text-white transition-colors duration-200 leading-relaxed">{q}</span>
        <motion.span
          className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-code text-lg leading-none"
          style={{ color: A }}
          animate={{
            rotate: open ? 45 : 0,
            borderColor: open ? `${A}60` : "rgba(255,255,255,0.12)",
            backgroundColor: open ? `${A}12` : "transparent",
          }}
          transition={{ duration: 0.25 }}
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p className="font-code text-[13px] text-white/40 leading-[1.85] pb-6 max-w-3xl">{a}</p>
      </motion.div>
    </motion.div>
  );
}

function CustomFAQ() {
  return (
    <div className="max-w-3xl">
      {FAQ_ITEMS.map((item, i) => (
        <FAQItem key={i} q={item.q} a={item.a} index={i} />
      ))}
    </div>
  );
}

// ─── Custom testimonials ────────────────────────────────────────────────────────
function TestimonialGrid() {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {TESTIMONIALS.map((t, i) => (
        <StaggerItem key={i}>
          <motion.div
            className="relative rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] flex flex-col gap-5 h-full"
            whileHover={{ borderColor: `${A}20`, backgroundColor: "rgba(255,255,255,0.035)", y: -4 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {/* Quote mark */}
            <span className="font-heading text-5xl leading-none select-none" style={{ color: `${A}25` }}>&ldquo;</span>
            <p className="font-code text-[12.5px] text-white/55 leading-[1.8] flex-1 -mt-4">{t.quote}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-code text-[11px] font-bold shrink-0" style={{ background: `${A}18`, color: A }}>
                {t.initials}
              </div>
              <div>
                <p className="font-code text-[12px] text-white leading-tight">{t.name}</p>
                <p className="font-code text-[11px] text-white/35 leading-tight mt-0.5">{t.role} · {t.company}</p>
              </div>
            </div>
          </motion.div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

// ─── Contact form (Formspree) ─────────────────────────────────────────────────
// Sign up at formspree.io → create a form → paste your form ID below
const FORMSPREE_ID = "xpznqkba"; // replace with your real Formspree form ID

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputCls = "w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-3.5 font-code text-[13px] text-white placeholder-white/20 outline-none focus:border-white/25 transition-colors duration-200";

  if (status === "sent") {
    return (
      <motion.div
        className="w-full max-w-2xl rounded-2xl border border-white/[0.07] p-12 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading text-3xl uppercase text-white mb-2">Message Sent</h3>
        <p className="font-code text-white/40 text-[13px]">I&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-6 font-code text-[12px] tracking-widest" style={{ color: A }}>Send another →</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-code text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Name</label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block font-code text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={set("email")}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className="block font-code text-[11px] tracking-[0.2em] uppercase text-white/30 mb-2">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={set("message")}
          className={`${inputCls} resize-none`}
          style={{ "--accent": A } as React.CSSProperties}
        />
      </div>
      {status === "error" && (
        <p className="font-code text-[12px] text-red-400">Something went wrong. Try emailing me directly at abdelkarimsoussane@gmail.com</p>
      )}
      <motion.button
        type="submit"
        disabled={status === "sending"}
        className="w-full font-code text-[13px] font-bold py-4 rounded-xl tracking-[0.1em] uppercase transition-opacity disabled:opacity-60"
        style={{ background: A, color: "#0a0a0a" }}
        whileHover={{ scale: 1.02, boxShadow: `0 0 32px ${A}50` }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {status === "sending" ? "Sending…" : "Send Message ↗"}
      </motion.button>
    </form>
  );
}

// ─── Tools Grid ───────────────────────────────────────────────────────────────
const TOOLS = [
  { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", category: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", category: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "React Native", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Firebase", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "PostgreSQL", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind CSS", category: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];

function ToolsGrid() {
  return (
    <div className="w-full max-w-4xl">
      <Stagger className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {TOOLS.map((tool) => (
          <StaggerItem key={tool.name}>
            <motion.div
              className="relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] group cursor-default"
              whileHover={{ borderColor: `${A}35`, backgroundColor: "rgba(255,255,255,0.035)", y: -4 }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              {/* Icon */}
              <div className="w-9 h-9 relative flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-9 h-9 object-contain"
                  style={tool.invert ? { filter: "invert(1)" } : undefined}
                />
              </div>
              {/* Name */}
              <div className="text-center">
                <p className="font-code text-[11px] text-white/70 group-hover:text-white transition-colors leading-tight">{tool.name}</p>
                <p className="font-code text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{ color: `${A}60` }}>{tool.category}</p>
              </div>
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 50% 0%, ${A}10 0%, transparent 70%)` }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

// ─── Work Process ─────────────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: "01",
    title: "Brief & Scope",
    short: "Discovery",
    desc: "30-min call to map out your goals, users, and constraints. I draft a technical spec with milestones, stack choices, and a realistic timeline — before writing a single line of code.",
    tags: ["Requirements", "Tech Spec", "Timeline"],
    icon: "◎",
  },
  {
    num: "02",
    title: "Architecture & Design",
    short: "Blueprint",
    desc: "System design, DB schema, and API contracts documented in Notion. UI-heavy projects get full Figma wireframes. You review and approve before any development begins.",
    tags: ["System Design", "DB Schema", "Figma"],
    icon: "⬡",
  },
  {
    num: "03",
    title: "Build & Preview",
    short: "Development",
    desc: "Weekly preview links via Vercel or Expo Go — you see real progress every Friday. GitHub commits are daily and scoped. Feedback loops are tight so no surprises at the end.",
    tags: ["GitHub", "Vercel", "Weekly Previews"],
    icon: "⟨⟩",
  },
  {
    num: "04",
    title: "QA & Launch",
    short: "Delivery",
    desc: "Cross-device and cross-browser testing, Lighthouse performance audit, and a production deploy with CI/CD. Handoff includes full source code, docs, and 30 days of post-launch support.",
    tags: ["Testing", "CI/CD", "Handoff"],
    icon: "↗",
  },
];

function WorkProcess() {
  return (
    <div className="w-full max-w-4xl">
      {/* Connector line */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.08}>
              <motion.div
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 flex flex-col gap-4 h-full overflow-hidden"
                whileHover={{ borderColor: `${A}30`, backgroundColor: "rgba(255,255,255,0.03)", y: -4 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* Accent corner */}
                <motion.div
                  className="absolute top-0 left-0 h-px"
                  style={{ background: `linear-gradient(to right, ${A}, transparent)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
                />
                {/* Number + icon row */}
                <div className="flex items-start justify-between">
                  <span className="font-code text-[11px] tracking-[0.3em]" style={{ color: A }}>{step.num}</span>
                  <span className="font-heading text-2xl select-none" style={{ color: `${A}40` }}>{step.icon}</span>
                </div>
                {/* Title */}
                <div>
                  <p className="font-code text-[10px] tracking-[0.2em] uppercase text-white/25 mb-1">{step.short}</p>
                  <h3 className="font-heading text-3xl uppercase text-white leading-tight">{step.title}</h3>
                </div>
                {/* Description */}
                <p className="font-code text-[12.5px] text-white/45 leading-[1.85] flex-1">{step.desc}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.05]">
                  {step.tags.map((t) => (
                    <span key={t} className="font-code text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 rounded" style={{ color: `${A}80`, background: `${A}0e` }}>{t}</span>
                  ))}
                </div>
                {/* Big number watermark */}
                <span className="absolute -bottom-3 -right-1 font-heading text-[7rem] leading-none select-none pointer-events-none" style={{ color: `${A}06` }}>{step.num}</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$299",
    period: "one-time",
    desc: "Perfect for landing pages, portfolios, or simple marketing sites.",
    features: [
      "Up to 5 pages — responsive on all devices",
      "Custom design from Figma mockup",
      "Contact form + basic SEO setup",
      "2 rounds of revisions",
      "Delivered in 5–7 days",
      "Source code included",
    ],
    cta: "Get Started",
    href: "#contact",
    highlight: false,
  },
  {
    name: "Full Product",
    price: "$999+",
    period: "per project",
    desc: "For full-stack web or mobile apps — auth, database, API, and deployment.",
    features: [
      "Complete web or mobile app (React / React Native)",
      "Backend API + database design (Node.js / Python)",
      "User auth, admin dashboard, notifications",
      "CI/CD pipeline + production deploy",
      "Weekly preview links throughout build",
      "Full handoff: source code + docs + 30-day support",
    ],
    cta: "Let's Talk Scope",
    href: "#contact",
    highlight: true,
  },
];

function PricingPlans() {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
      {PRICING_PLANS.map((plan, i) => (
        <Reveal key={plan.name} delay={i * 0.1}>
          <motion.div
            className="relative rounded-2xl border flex flex-col h-full overflow-hidden"
            style={{
              borderColor: plan.highlight ? `${A}40` : "rgba(255,255,255,0.07)",
              background: plan.highlight ? `linear-gradient(135deg, ${A}0d 0%, transparent 60%), rgba(255,255,255,0.02)` : "rgba(255,255,255,0.02)",
            }}
            whileHover={{ borderColor: plan.highlight ? `${A}70` : `${A}30`, y: -4 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {plan.highlight && (
              <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${A}, transparent)` }} />
            )}
            {plan.highlight && (
              <div className="absolute top-5 right-5">
                <span className="font-code text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ background: `${A}20`, color: A }}>Most Popular</span>
              </div>
            )}
            <div className="p-8 flex flex-col gap-6 flex-1">
              {/* Header */}
              <div>
                <p className="font-code text-[11px] tracking-[0.3em] uppercase text-white/30 mb-3">{plan.name}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading text-[4.5rem] leading-none" style={{ color: plan.highlight ? A : "white" }}>{plan.price}</span>
                  <span className="font-code text-[12px] text-white/30">{plan.period}</span>
                </div>
                <p className="font-code text-[12.5px] text-white/40 leading-relaxed">{plan.desc}</p>
              </div>
              {/* Divider */}
              <div className="h-px" style={{ background: plan.highlight ? `${A}20` : "rgba(255,255,255,0.06)" }} />
              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-code text-[12.5px] text-white/50 leading-relaxed">
                    <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: A }}>▹</span>
                    {f}
                  </li>
                ))}
              </ul>
              {/* CTA */}
              <motion.a
                href={plan.href}
                className="mt-4 w-full flex items-center justify-center gap-2 font-code text-[13px] font-bold py-3.5 rounded-xl tracking-[0.08em]"
                style={plan.highlight
                  ? { background: A, color: "#0a0a0a" }
                  : { border: `1px solid ${A}30`, color: A }}
                whileHover={plan.highlight
                  ? { scale: 1.02, boxShadow: `0 0 28px ${A}40` }
                  : { borderColor: `${A}70`, backgroundColor: `${A}0a` }}
                transition={{ duration: 0.2 }}
              >
                {plan.cta} ↗
              </motion.a>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}

// ─── CV Download dropdown ─────────────────────────────────────────────────────
function CVDownload() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="font-code text-[12px] font-bold tracking-[0.1em] px-5 py-3 rounded-full border border-white/20 text-white/80 flex items-center gap-2"
        whileHover={{ borderColor: `${A}60`, color: A, y: -2 }}
        transition={{ duration: 0.2 }}
        aria-expanded={open}
      >
        Download CV
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="text-[10px]">▾</motion.span>
      </motion.button>
      <motion.div
        className="absolute top-full left-0 mt-2 w-44 rounded-xl border border-white/10 bg-[#111] overflow-hidden z-30"
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -6, scale: open ? 1 : 0.96, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.18, ease: EASE }}
      >
        <a
          href="/cv.pdf"
          download="Abdelkarim_Soussane_CV_EN.pdf"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-3.5 font-code text-[12px] text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors border-b border-white/[0.06]"
        >
          <span className="text-base">🇬🇧</span> English
        </a>
        <a
          href="/cv-zh.pdf"
          download="Abdelkarim_Soussane_CV_ZH.pdf"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-4 py-3.5 font-code text-[12px] text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
        >
          <span className="text-base">🇨🇳</span> Chinese
        </a>
      </motion.div>
    </div>
  );
}

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <span className="block font-code text-[11px] tracking-[0.35em] uppercase mb-4" style={{ color: A }}>
      {n} / {text}
    </span>
  );
}

// ─── Marquee ───────────────────────────────────────────────────────────────────
function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative overflow-hidden py-5 border-y border-white/[0.05]">
      <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span key={i} className="font-code text-[11px] tracking-[0.25em] uppercase text-white/30 shrink-0">
            {item}<span className="ml-10" style={{ color: `${A}40` }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Profile photo ─────────────────────────────────────────────────────────────
function ProfilePhoto({ className }: { className?: string }) {
  const [err, setErr] = useState(false);
  return !err ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/profile.jpg" alt="Abdelkarim Soussane" className={className ?? "w-full h-full object-cover"} onError={() => setErr(true)} />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] flex items-center justify-center">
      <span className="font-heading text-[6rem] text-white/[0.06] select-none">AK</span>
    </div>
  );
}

// ─── Phone hero — the Porty layout inside the phone screen ────────────────────
function PhoneHeroContent() {
  return (
    <div className="relative h-full bg-[#0a0a0a] overflow-hidden flex flex-col">

      {/* Full-bleed photo background */}
      <div className="absolute inset-0">
        <ProfilePhoto className="w-full h-full object-cover object-top" />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Top bar — Hello + social icons */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-5 pt-10"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-sm">👋</span>
          <span className="font-code text-[12px] tracking-wide" style={{ color: A }}>Hello</span>
        </div>
        <div className="flex gap-2">
          <SocialBtn type="x"        href="https://x.com/kimosoussane"                    title="X / Twitter" size="sm" />
          <SocialBtn type="github"   href="https://github.com/Kimox01"                    title="GitHub"      size="sm" />
          <SocialBtn type="linkedin" href="https://linkedin.com/in/abdelkarimsoussane"    title="LinkedIn"    size="sm" />
        </div>
      </motion.div>

      {/* Spacer — pushes name to lower half of photo */}
      <div className="flex-1" />

      {/* Name — massive, overlapping photo */}
      <motion.div
        className="relative z-10 px-4 pb-0"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, delay: 0.45, ease: EASE }}
      >
        <h1
          className="font-heading uppercase leading-[0.85] text-white"
          style={{ fontSize: "clamp(52px, 16vw, 72px)", letterSpacing: "-0.01em" }}
        >
          Abdelkarim<br />Soussane
        </h1>
      </motion.div>

      {/* Horizontal divider */}
      <motion.div
        className="relative z-10 mx-4 my-4 h-px bg-white/20"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
      />

      {/* Role + social dots */}
      <motion.div
        className="relative z-10 px-4 flex items-center justify-between mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="font-code text-white/60 text-[11px] leading-tight">
          I&apos;m a Full-Stack Developer
        </p>
      </motion.div>

      {/* Quote */}
      <motion.div
        className="relative z-10 px-4 mb-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: EASE }}
      >
        <p className="text-white/75 leading-[1.55]" style={{ fontFamily: "var(--font-jetbrains)", fontSize: "12px" }}>
          &ldquo;I design and code{" "}
          <span className="text-white font-bold">beautifully simple things</span>{" "}
          and i love what i do&rdquo;
        </p>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="relative z-10 px-4 flex items-center gap-2 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        {["React", "Node.js", "Python"].map((tag) => (
          <span key={tag} className="font-code text-[10px] tracking-[0.1em] px-2.5 py-1 rounded-full border border-white/15 text-white/50">{tag}</span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="relative z-10 px-4 flex gap-3 mb-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.05, ease: EASE }}
      >
        <motion.a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 font-code text-[12px] font-bold py-3 rounded-full"
          style={{ background: A, color: "#0a0a0a" }}
          whileHover={{ scale: 1.04, boxShadow: `0 0 24px ${A}60` }}
          transition={{ duration: 0.2 }}
        >
          Hire Me <span className="text-[14px]">↗</span>
        </motion.a>
        <motion.a
          href="#projects"
          className="flex-1 flex items-center justify-center font-code text-[12px] py-3 rounded-full border border-white/20 text-white/80"
          whileHover={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
          transition={{ duration: 0.2 }}
        >
          My Works
        </motion.a>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="relative z-10 px-4 pb-6 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.15 }}
      >
        <span className="font-code text-[10px] text-white/40 tracking-[0.1em] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse" style={{ background: A }} />
          Open to work · June 2026
        </span>
        <a href="#contact" className="font-code text-[10px] tracking-[0.1em] transition-opacity hover:opacity-70" style={{ color: A }}>
          Hire me ↗
        </a>
      </motion.div>
    </div>
  );
}

// ─── Phone frame ───────────────────────────────────────────────────────────────
const PHONE_W = 390;
const PHONE_H = 864;

function PhoneFrame() {
  return (
    <div className="relative" style={{ filter: "drop-shadow(0 60px 120px rgba(0,0,0,0.85)) drop-shadow(0 0 1px rgba(255,255,255,0.04))" }}>
      <div className="absolute -left-[14px] top-[120px] w-[6px] h-[36px] rounded-l-full bg-[#1c1c1c] border border-white/[0.06]" />
      <div className="absolute -left-[14px] top-[170px] w-[6px] h-[52px] rounded-l-full bg-[#1c1c1c] border border-white/[0.06]" />
      <div className="absolute -right-[14px] top-[150px] w-[6px] h-[68px] rounded-r-full bg-[#1c1c1c] border border-white/[0.06]" />
      <div
        className="relative rounded-[52px] overflow-hidden"
        style={{
          width: PHONE_W,
          padding: "10px",
          background: "linear-gradient(160deg, #2a2a2a 0%, #111 40%, #1e1e1e 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.5)",
        }}
      >
        <div className="rounded-[44px] overflow-hidden" style={{ background: "#000", height: 844 }}>
          <div className="relative flex justify-center pt-3 pb-1 bg-black z-20">
            <div className="w-[120px] h-[34px] rounded-full bg-black border border-white/[0.08] flex items-center justify-center gap-3">
              <div className="w-[10px] h-[10px] rounded-full bg-[#1a1a1a] border border-white/10" />
              <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a1a] border border-white/10" />
            </div>
          </div>
          <div style={{ height: "calc(844px - 50px)" }}>
            <PhoneHeroContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaledPhone() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const calc = () => setScale(parseFloat(Math.min(1, (window.innerWidth - 32) / PHONE_W).toFixed(3)));
    calc();
    window.addEventListener("resize", calc, { passive: true });
    return () => window.removeEventListener("resize", calc);
  }, []);
  return (
    <div style={{ width: PHONE_W * scale, height: PHONE_H * scale, position: "relative", flexShrink: 0 }}>
      <div style={{ transform: `scale(${scale})`, transformOrigin: "top left", position: "absolute", top: 0, left: 0 }}>
        <PhoneFrame />
      </div>
    </div>
  );
}

// ─── Scroll-stack project card ────────────────────────────────────────────────
type ProjectType = typeof PROJECTS[0];

function StackCard({
  project,
  index,
  activeIndex,
}: {
  project: ProjectType;
  index: number;
  activeIndex: number;
}) {
  const isPast   = index < activeIndex;
  const isFuture = index > activeIndex;
  const [hovered, setHovered] = useState(false);
  const primaryLink = project.demo ?? project.github;

  return (
    <motion.div
      style={{ position: "absolute", inset: 0, zIndex: index + 1 }}
      animate={{
        y:       isFuture ? "100%" : isPast ? "-6%" : "0%",
        scale:   isPast ? 0.92 : 1,
        opacity: isFuture ? 0 : 1,
      }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Card */}
      <div
        className="w-full h-full rounded-3xl overflow-hidden flex flex-col border border-white/[0.07]"
        style={{ background: "#141414" }}
      >
        {/* Image area ~60% */}
        <div className="relative flex-[3] overflow-hidden" style={{ background: project.bg }}>
          {/* Project image */}
          {project.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
          )}
          {/* Dot grid overlay */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle, ${project.grid} 1.5px, transparent 1.5px)`, backgroundSize: "28px 28px" }} />
          {/* Centre glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl"
            style={{ background: project.accent }}
            animate={{ opacity: hovered ? 0.22 : (project.image ? 0.05 : 0.1), scale: hovered ? 1.3 : 1 }}
            transition={{ duration: 0.45 }}
          />
          {/* Number watermark */}
          <span className="absolute bottom-3 right-5 font-heading text-[6rem] leading-none select-none pointer-events-none" style={{ color: `${project.accent}18` }}>{project.num}</span>
          {/* Category pill */}
          <div className="absolute top-5 left-5">
            <span className="font-code text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border backdrop-blur-sm" style={{ color: project.accent, borderColor: `${project.accent}50`, background: `rgba(0,0,0,0.5)` }}>
              {project.category}
            </span>
          </div>
          {/* GitHub + Demo link buttons (appear on hover) */}
          <div className="absolute top-5 right-5 flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3 rounded-full flex items-center gap-1.5 font-code text-[11px] border backdrop-blur-sm"
                style={{ background: "rgba(0,0,0,0.65)", color: "rgba(255,255,255,0.85)", borderColor: "rgba(255,255,255,0.18)" }}
                initial={{ opacity: 0, scale: 0.7, y: -4 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7, y: hovered ? 0 : -4 }}
                transition={{ duration: 0.22 }}
                onClick={(e) => e.stopPropagation()}
              >
                <span>⌥</span> GitHub
              </motion.a>
            )}
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-3 rounded-full flex items-center gap-1.5 font-code text-[11px] font-bold"
                style={{ background: project.accent, color: "#0a0a0a" }}
                initial={{ opacity: 0, scale: 0.7, y: -4 }}
                animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7, y: hovered ? 0 : -4 }}
                transition={{ duration: 0.22, delay: project.github ? 0.05 : 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                Live ↗
              </motion.a>
            )}
          </div>
          {/* Placeholder lines — only if no image */}
          {!project.image && (
            <div className="absolute bottom-8 left-8 right-8 space-y-2 opacity-20">
              {[80, 60, 40].map((w, i) => (
                <div key={i} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: project.accent }} />
              ))}
            </div>
          )}
        </div>

        {/* Content area ~40% */}
        <div className="flex-[2] px-7 py-6 relative">
          {/* Animated top border on hover */}
          <motion.div
            className="absolute top-0 left-0 h-px"
            style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
            animate={{ width: hovered ? "100%" : "0%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
          <h3 className="font-heading text-2xl md:text-4xl uppercase text-white leading-tight mb-2">{project.title}</h3>
          <p className="font-code text-[12px] text-white/40 leading-relaxed mb-5">{project.desc}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="font-code text-[10px] tracking-[0.15em] uppercase px-3 py-1 rounded-full border" style={{ color: project.accent, borderColor: `${project.accent}30`, background: `${project.accent}0a` }}>
                {t}
              </span>
            ))}
          </div>
          {/* Bottom-right link (primary: demo > github) */}
          {primaryLink && (
            <motion.a
              href={primaryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 right-7 w-10 h-10 rounded-full border flex items-center justify-center font-code text-white/50"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
              whileHover={{ borderColor: project.accent, color: project.accent, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Scroll-stack projects section ────────────────────────────────────────────
function ProjectsStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = PROJECTS.length;
  const [activeIndex, setActiveIndex] = useState(0);

  // Advance the active card whenever progress crosses a threshold
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(Math.floor(v * total), total - 1));
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section id="projects" ref={containerRef} style={{ height: `${total * 120}vh` }} className="relative">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 py-6" style={{ overflow: "clip" }}>

        {/* Header fades out as first card rises */}
        <motion.div className="text-center mb-6 w-full" style={{ opacity: headerOpacity }}>
          <SectionLabel n="03" text="Projects" />
          <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white">Selected Work</h2>
        </motion.div>

        {/* Card stack — all cards sit in the same slot, animated in/out */}
        <div className="relative w-full max-w-2xl mx-auto flex-1 min-h-0" style={{ maxHeight: "min(640px, 65vh)" }}>
          {PROJECTS.map((project, i) => (
            <StackCard key={project.num} project={project} index={i} activeIndex={activeIndex} />
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex gap-2.5 mt-6">
          {PROJECTS.map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{ background: A }}
              animate={{ width: i === activeIndex ? 20 : 8, height: 8, opacity: i === activeIndex ? 1 : 0.3 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social icons (SVG) ───────────────────────────────────────────────────────
const SOCIAL_SVGS = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
} as const;

function SocialBtn({ type, href, title, size = "md" }: { type: keyof typeof SOCIAL_SVGS; href: string; title: string; size?: "sm" | "md" }) {
  const dim = size === "sm" ? "w-8 h-8 text-white/60" : "w-10 h-10 text-white/50";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`${dim} rounded-full bg-white/10 border border-white/15 flex items-center justify-center`}
      whileHover={{ borderColor: `${A}50`, color: A, y: -2, backgroundColor: `${A}0d` }}
      transition={{ duration: 0.2 }}
    >
      {SOCIAL_SVGS[type]}
    </motion.a>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ className }: { className?: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <span className={`font-heading text-xl tracking-[0.12em] text-white ${className ?? ""}`}>AK</span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.png" alt="Logo" onError={() => setErr(true)} className={`h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(167,139,250,0.25)] ${className ?? ""}`} />
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Pricing", href: "#pricing" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 30); if (window.scrollY > 60) setMenuOpen(false); };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled ? "rgba(10,10,10,0.95)" : "rgba(20,20,20,0.6)";
  const navBorder = scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.07)";

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pt-4 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
    >
      {/* ── Main bar ── */}
      <nav
        className="w-full max-w-2xl flex items-center justify-between px-3 py-2 rounded-full border transition-all duration-500"
        style={{ background: navBg, borderColor: navBorder, backdropFilter: "blur(24px)" }}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center pl-1">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="font-code text-[12px] tracking-[0.15em] text-white/60 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5">{label}</a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a href="#contact" className="font-code text-[12px] font-bold tracking-[0.1em] px-4 py-2 rounded-full transition-all hover:opacity-85" style={{ background: A, color: "#0a0a0a" }}>
            <span className="hidden sm:inline">Contact ↗</span>
            <span className="sm:hidden">↗</span>
          </a>
          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden w-9 h-9 rounded-full border border-white/15 flex flex-col items-center justify-center gap-[5px] bg-white/5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <motion.span className="block w-4 h-px bg-white/70 rounded-full" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} transition={{ duration: 0.2 }} />
            <motion.span className="block w-4 h-px bg-white/70 rounded-full" animate={{ opacity: menuOpen ? 0 : 1 }} transition={{ duration: 0.15 }} />
            <motion.span className="block w-4 h-px bg-white/70 rounded-full" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} transition={{ duration: 0.2 }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown ── */}
      <motion.div
        className="sm:hidden w-full max-w-2xl mt-2 rounded-2xl border border-white/[0.08] overflow-hidden"
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(24px)" }}
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        <div className="flex flex-col p-3 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-code text-[14px] tracking-[0.15em] text-white/60 hover:text-white transition-colors px-5 py-3.5 rounded-xl hover:bg-white/[0.05]"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-1 font-code text-[14px] font-bold tracking-[0.1em] px-5 py-3.5 rounded-xl text-center"
            style={{ background: A, color: "#0a0a0a" }}
          >
            Contact ↗
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

// ─── Main ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 600], [0, 60]);
  const ghostY = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <div className="relative bg-[#080808] text-white" style={{ overflowX: "clip" }}>
      <Grain />
      <MorphingBlob />
      <Navbar />

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-10 overflow-hidden">
        {/* Ghost text sides */}
        <motion.div className="absolute left-[-2%] top-1/2 -translate-y-1/2 font-heading text-[clamp(60px,12vw,140px)] leading-none uppercase select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.022)", y: ghostY }}>
          portfolio
        </motion.div>
        <motion.div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-heading text-[clamp(60px,12vw,140px)] leading-none uppercase select-none pointer-events-none" style={{ color: "rgba(255,255,255,0.022)", y: ghostY }}>
          my work
        </motion.div>

        {/* Phone with glow */}
        <motion.div
          style={{ y: phoneY }}
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          className="relative z-10"
        >
          <div className="absolute inset-[-50px] rounded-[80px] blur-3xl pointer-events-none" style={{ background: `${A}09` }} />
          <ScaledPhone />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="font-code text-[10px] tracking-[0.4em] uppercase text-white/25">Scroll</span>
          <div className="relative w-px h-10 bg-white/10 overflow-hidden rounded-full">
            <motion.div className="absolute top-0 left-0 w-full rounded-full" style={{ height: "45%", background: A }} animate={{ y: ["-100%", "270%"] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }} />
          </div>
        </motion.div>
      </section>

      {/* Marquee strip */}
      <Marquee />

      {/* ═══════════════════════════════════ STATS ═══════════════════════════════════ */}
      <section className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-code text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: A }}>Why hire me</p>
            <h2 className="font-heading text-4xl md:text-6xl uppercase text-white">The Short Version</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1 — value proposition */}
            <StaggerItem>
              <motion.div className="rounded-2xl p-7 relative overflow-hidden h-full flex flex-col" style={{ background: A }} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.3, ease: EASE }}>
                <p className="font-code text-[11px] tracking-[0.25em] uppercase text-black/50 mb-5">· What I do</p>
                <h3 className="font-heading text-[3.2rem] leading-none text-black mb-3">Full-Stack</h3>
                <p className="font-code text-[12px] text-black/65 leading-relaxed flex-1">Web · Mobile · Backend · Data<br />One developer — the whole product.</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["React", "Next.js", "React Native", "Node.js", "Python"].map((t) => (
                    <span key={t} className="font-code text-[10px] px-2.5 py-1 rounded-full bg-black/10 text-black/60">{t}</span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 2 — track record */}
            <StaggerItem>
              <motion.div className="rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] h-full flex flex-col" whileHover={{ scale: 1.02, y: -4, borderColor: `${A}25` }} transition={{ duration: 0.3, ease: EASE }}>
                <p className="font-code text-[11px] tracking-[0.25em] uppercase text-white/35 mb-5">· Track record</p>
                <h3 className="font-heading text-[5.5rem] leading-none text-white">4+</h3>
                <p className="font-code text-[13px] text-white/60 mt-1 mb-3">Projects shipped to production</p>
                <p className="font-code text-[11px] text-white/30 leading-[1.7] flex-1">
                  DigiCard web app · SurFoodSave rescue platform<br />
                  Second-hand marketplace · Dev tooling
                </p>
              </motion.div>
            </StaggerItem>

            {/* Card 3 — availability */}
            <StaggerItem>
              <motion.div className="rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] h-full flex flex-col" whileHover={{ scale: 1.02, y: -4, borderColor: `${A}25` }} transition={{ duration: 0.3, ease: EASE }}>
                <p className="font-code text-[11px] tracking-[0.25em] uppercase text-white/35 mb-5">· Status</p>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse" style={{ background: A }} />
                  <h3 className="font-heading text-[3.2rem] leading-none" style={{ color: A }}>Open</h3>
                </div>
                <p className="font-code text-[13px] text-white/60 mb-3">To full-time or freelance roles</p>
                <p className="font-code text-[11px] text-white/30 leading-[1.7] flex-1">
                  Available June 2026 · Remote worldwide<br />
                  AR · FR · EN · ZH — work across any time zone
                </p>
              </motion.div>
            </StaggerItem>

          </Stagger>
        </div>
      </section>

      {/* ═══════════════════════════════════ ABOUT ═══════════════════════════════════ */}
      <section id="about" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 items-center">
            <Reveal>
              <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4, ease: EASE }} className="aspect-square rounded-3xl overflow-hidden border border-white/[0.07]">
                  <ProfilePhoto />
                </motion.div>
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2" style={{ borderColor: `${A}70` }} />
                <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2" style={{ borderColor: `${A}70` }} />
                <motion.div className="absolute -bottom-5 left-5 right-5 bg-[#111] border border-white/10 rounded-2xl px-5 py-3 shadow-xl" animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <div className="flex items-center justify-between">
                    <p className="font-code text-[11px] text-white/50">📍 Hangzhou, China</p>
                    <span className="flex items-center gap-1.5 font-code text-[10px]" style={{ color: A }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: A }} />
                      Open to work
                    </span>
                  </div>
                </motion.div>
              </div>
            </Reveal>
            <div>
              <Reveal>
                <SectionLabel n="01" text="About Me" />
                <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-8">Developer<br /><span style={{ color: A }}>&amp; Builder</span></h2>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-4 font-code text-[13px] text-white/50 leading-[1.9] mb-10">
                  <p>I&apos;m <span className="text-white font-bold">Abdelkarim Soussane</span> — a final-year Software Engineering student at <span className="text-white">Hangzhou Dianzi University</span>, building real products across the full stack since 2022.</p>
                  <p>At <span className="text-white">Innovatech Consulting</span>, I owned the entire frontend of DigiCard — a digital business card platform with QR sharing and an admin dashboard — from design in Figma to deployment, solo. When the team needed backend help, I covered that too.</p>
                  <p>I write <span className="text-white">React, React Native, Node.js, and Python</span> day-to-day, speak <span style={{ color: A }}>4 languages</span>, and work comfortably across time zones. Looking for a <span style={{ color: A }}>full-time role starting June 2026</span>.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex gap-4 flex-wrap">
                  <CVDownload />
                  <div className="flex items-center gap-2">
                    <SocialBtn type="github"   href="https://github.com/Kimox01"                 title="GitHub" />
                    <SocialBtn type="linkedin" href="https://linkedin.com/in/abdelkarimsoussane" title="LinkedIn" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SERVICES ═══════════════════════════════════ */}
      <section id="services" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal><SectionLabel n="02" text="Services" /><h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-14">What I Offer</h2></Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
            {SERVICES.map((s) => (
              <StaggerItem key={s.num}>
                <motion.div className="bg-[#0d0d0d] p-8 flex flex-col gap-4 h-full" whileHover={{ backgroundColor: "#121212" }} transition={{ duration: 0.2 }}>
                  <span className="font-code text-[11px] tracking-widest" style={{ color: `${A}50` }}>{s.num}</span>
                  <h3 className="font-heading text-2xl uppercase text-white leading-tight">{s.title}</h3>
                  <p className="font-code text-white/40 text-[12px] leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                    {s.tags.map((t) => <span key={t} className="font-code text-[10px] tracking-widest uppercase px-2.5 py-1 rounded" style={{ color: `${A}80`, background: `${A}0e` }}>{t}</span>)}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ═══════════════════════════════════ PROJECTS (scroll-stack) ═══════════════════════════════════ */}
      <ProjectsStack />

      {/* ═══════════════════════════════════ EXPERIENCE ═══════════════════════════════════ */}
      <section id="experience" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal><SectionLabel n="04" text="Experience" /><h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-12">Work History</h2></Reveal>
          <div className="relative pl-8 md:pl-12">
            <motion.div className="absolute left-0 top-2 bottom-2 w-px origin-top" style={{ background: `linear-gradient(to bottom, ${A}, ${A}15)` }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: EASE }} />
            <div className="space-y-6">
              {EXPERIENCE.map((exp, i) => (
                <Reveal key={exp.company} delay={i * 0.1}>
                  <div className="relative">
                    <motion.div className="absolute -left-8 md:-left-12 top-5 w-3 h-3 rounded-full border-2" style={{ background: "#080808", borderColor: A }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.3, type: "spring" }} />
                    <motion.div className="rounded-2xl p-7 border border-white/[0.06] bg-white/[0.02]" whileHover={{ borderColor: `${A}25`, backgroundColor: "rgba(255,255,255,0.035)" }} transition={{ duration: 0.25 }}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-heading text-2xl text-white uppercase">{exp.role}</h3>
                          <p className="font-code text-[13px] mt-0.5" style={{ color: A }}>{exp.company}</p>
                        </div>
                        <span className="font-code text-[11px] text-white/30 tracking-widest border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap h-fit">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="font-code text-[12.5px] text-white/40 leading-relaxed flex gap-3">
                            <span style={{ color: A }} className="mt-0.5 shrink-0">▹</span>{b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ SKILLS ═══════════════════════════════════ */}
      <section id="skills" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <SectionLabel n="05" text="Skills" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white">Tech Stack</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {SKILLS.map((g) => (
              <StaggerItem key={g.group}>
                <motion.div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] h-full" whileHover={{ borderColor: `${A}25`, y: -4 }} transition={{ duration: 0.3, ease: EASE }}>
                  <p className="font-code text-[11px] tracking-[0.25em] uppercase mb-5" style={{ color: A }}>{g.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <motion.span key={item} className="font-code text-[12px] text-white/60 border border-white/10 px-3 py-1.5 rounded-lg" whileHover={{ borderColor: `${A}40`, color: A }} transition={{ duration: 0.15 }}>{item}</motion.span>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <div className="rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] mb-10">
              <p className="font-code text-[11px] tracking-[0.25em] uppercase mb-5 text-center" style={{ color: A }}>Languages Spoken</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[{ lang: "Arabic", level: "Native" }, { lang: "French", level: "Bilingual" }, { lang: "English", level: "Fluent" }, { lang: "Chinese", level: "HSK4" }].map(({ lang, level }) => (
                  <div key={lang} className="flex flex-col gap-1 items-center text-center"><span className="font-heading text-2xl text-white uppercase">{lang}</span><span className="font-code text-[11px] text-white/40">{level}</span></div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex justify-center">
              <ToolsGrid />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════ PROCESS ═══════════════════════════════════ */}
      <section id="process" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel n="06" text="Process" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white">How I Work</h2>
          </Reveal>
          <div className="flex justify-center">
            <WorkProcess />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ TESTIMONIALS ═══════════════════════════════════ */}
      <section id="testimonials" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal><SectionLabel n="07" text="Testimonials" /><h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-14">What People Say</h2></Reveal>
          <TestimonialGrid />
        </div>
      </section>

      {/* ═══════════════════════════════════ PRICING ═══════════════════════════════════ */}
      <section id="pricing" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel n="08" text="Pricing" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white">Hire Me</h2>
          </Reveal>
          <div className="flex justify-center">
            <PricingPlans />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ FAQ ═══════════════════════════════════ */}
      <section id="faq" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <SectionLabel n="09" text="FAQ" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-4">Common Questions</h2>
            <p className="font-code text-white/35 text-[13px] leading-relaxed">Everything you might want to know before reaching out.</p>
          </Reveal>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <CustomFAQ />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ CONTACT ═══════════════════════════════════ */}
      <section id="contact" className="py-20 px-6 md:px-16 lg:px-24 relative z-10 overflow-hidden">
        <motion.div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${A}07 0%, transparent 70%)` }} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, repeat: Infinity }} />
        <div className="max-w-5xl mx-auto relative">
          <Reveal className="text-center mb-14">
            <SectionLabel n="10" text="Contact" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-4">Let&apos;s Work Together</h2>
            <p className="font-code text-white/40 text-[13px] leading-relaxed">
              Looking for a developer?{" "}
              <a href="mailto:abdelkarimsoussane@gmail.com" className="transition-colors hover:opacity-80" style={{ color: A }}>abdelkarimsoussane@gmail.com</a>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════ FOOTER ═══════════════════════════════════ */}
      <footer className="border-t border-white/[0.05] py-12 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo className="h-10" />
            <p className="font-code text-white/30 text-xs">Full-Stack Developer · Hangzhou, China</p>
          </div>
          <div className="flex items-center gap-3">
            {([
              { label: "GitHub",   href: "https://github.com/Kimox01" },
              { label: "LinkedIn", href: "https://linkedin.com/in/abdelkarimsoussane" },
              { label: "X",        href: "https://x.com/kimosoussane" },
              { label: "Email",    href: "mailto:abdelkarimsoussane@gmail.com" },
            ] as const).map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-code text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/[0.07] hover:border-white/20"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {label}
              </motion.a>
            ))}
          </div>
          <p className="font-code text-white/25 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Abdelkarim Soussane.<br className="hidden md:block" /> All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
