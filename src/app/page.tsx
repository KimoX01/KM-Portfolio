"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// ─── Constants ─────────────────────────────────────────────────────────────────
const A = "#a78bfa";
const DESIGN_PORTFOLIO = "https://kimodesigns.vercel.app/";
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ─── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", title: "Frontend Development", desc: "Fast, accessible interfaces in React and Next.js, typed end to end with TypeScript.", tags: ["React", "Next.js", "TypeScript"] },
  { num: "02", title: "Mobile App Development", desc: "Cross-platform iOS and Android apps with React Native and Expo, from auth to in-app messaging.", tags: ["React Native", "Expo", "Firebase"] },
  { num: "03", title: "Backend & APIs", desc: "REST APIs and data models that the frontend can rely on, with FastAPI, Node.js or Spring Boot.", tags: ["FastAPI", "Node.js", "MongoDB"] },
  { num: "04", title: "UI/UX Design", desc: "I design in Figma first, then build it myself, so nothing gets lost between design and code.", tags: ["Figma", "Prototyping", "Design systems"] },
];

const PROJECTS = [
  {
    num: "01",
    category: "Web + Mobile",
    title: "PetiVeto",
    desc: "Two-sided veterinary platform for Morocco that I co-founded: a Next.js clinic dashboard for vets and a React Native app for pet owners, connected to a FastAPI backend. Pre-launch.",
    tags: ["Next.js", "React Native", "FastAPI"],
    bg: "#0a5768",
    grid: "#2dd4bf",
    accent: "#2dd4bf",
    image: "/petiveto-logo.jpg",
    // Brand logo baked onto a wide teal canvas: shown at full opacity, not dimmed like screenshots.
    imageFit: "logo",
    github: null as string | null,
    demo: null as string | null,
  },
  {
    num: "02",  
    category: "Concept · Full-stack",
    title: "Passiflora",
    desc: "Full-stack, French-language restaurant platform for Casablanca: menu, online ordering, table reservations and order tracking.",
    tags: ["Next.js", "React 19", "FastAPI", "MongoDB"],
    bg:"#05080f",
    grid: "#60a5fa",
    accent: "#60a5fa",
    image: "/passiflora.webp",
    github: "https://github.com/KimoX01/passiflora-menu" as string | null,
    demo: "https://passiflora-menu.vercel.app/" as string | null,
  },
  {
    num: "03",  
    category: "Web App",
    title: "Pulse AI News",
    desc: "Real-time news aggregator pulling live stories from BBC, NPR, The Guardian, arXiv and more, filtered by category and refreshed automatically.",
    tags: ["Next.js", "React 19", "FastAPI"],
    bg:"#05080f",
    grid: "#60a5fa",
    accent: "#60a5fa",
    image: "/pulse.webp",
    github: "https://github.com/KimoX01/PULSE-Ai-news" as string | null,
    demo: "https://pulseainews.vercel.app/" as string | null,
  },
  {
    num: "04",
    category: "Concept · Web",
    title: "Luckin Coffee",
    desc: "Responsive English/中文 site for Luckin Coffee (瑞幸咖啡) with language switching, statically exported.",
    tags: ["Next.js 16", "TypeScript"],
    bg: "#1a0505",
    grid: "#ef4444",
    accent: "#ef4444",
    image: "/luckin-logo.webp",
    github: "https://github.com/KimoX01/Luckin-Coffee-Landing" as string | null,
    demo: "https://luckincoffee.vercel.app/luckin" as string | null,
  },
  {
    num: "05",
    category: "Concept · Web",
    title: "Seiko Watches",
    desc: "Scroll-driven product page with cinematic animations, optimized for load performance.",
    tags: ["Next.js", "TypeScript"],
    bg: "#05080f",
    grid: "#60a5fa",
    accent: "#60a5fa",
    image: "/seiko.webp",
    github: "https://github.com/KimoX01/SEIKO" as string | null,
    demo: "https://seiko-watches.vercel.app/" as string | null,
  },
  {
    num: "06",
    category: "Mobile App",
    title: "SurFoodSave",
    desc: "App for reselling near-expiry food, with listings, expiry tracking, user auth and in-app messaging. Designed in Figma first.",
    tags: ["React Native", "Expo", "Firebase"],
    bg: "#0d0d1f",
    grid: "#818cf8",
    accent: "#818cf8",
    image: "/surfoodsave.webp",
    github: "https://github.com/KimoX01/SurFoodSave" as string | null,
    demo: null as string | null,
  },
  {
    num: "07",
    category: "Web Development",
    title: "DigiCard Web App",
    desc: "Digital business card platform with QR sharing and an admin dashboard. I built the complete Angular frontend during my internship at Innovatech.",
    tags: ["Angular", "TypeScript", "Spring Boot"],
    bg: "#0d1f0d",
    grid: "#4ade80",
    accent: "#4ade80",
    image: "/digicard.webp",
    github: null as string | null,
    demo: null as string | null,
  },
  {
    num: "08",
    category: "Mobile App",
    title: "Second-hand Market",
    desc: "P2P marketplace with in-app messaging, photo uploads, category filtering and a Node.js REST backend.",
    tags: ["React Native", "Expo", "Node.js"],
    bg: "#1f0d0d",
    grid: "#fb923c",
    accent: "#fb923c",
    image: "/secondhand.webp",
    github: null as string | null,
    demo: null as string | null,
  },
  {
    num: "09",
    category: "Dev Tool",
    title: "Convertiverse",
    desc: "Automated pipeline transforming structured Excel data into clean, styled, production-ready HTML tables. Live on the web.",
    tags: ["Python", "JavaScript", "PHP"],
    bg: "#0d1a1f",
    grid: "#22d3ee",
    accent: "#22d3ee",
    image: "/convertiverse.webp",
    github: "https://github.com/KimoX01/excel-to-html" as string | null,
    demo: "https://converter.simplesolutions.uz/" as string | null,
  },
];

const EXPERIENCE = [
  {
    period: "Apr 2026 – Present",
    role: "Co-Founder · Frontend Developer & Product Designer",
    company: "PetiVeto · Morocco, remote",
    bullets: [
      "Built the entire frontend of a two-sided veterinary platform: a Next.js clinic dashboard for vets and a React Native (Expo) mobile app for pet owners (pre-launch).",
      "Implemented the core flows across web and mobile: patient records, appointments and owner communication, connected to the platform's FastAPI backend.",
      "Designed the UI in Figma first, then turned it into the components and screens of both apps.",
      "Shaped the feature set from interviews with 4 Moroccan veterinarians about their clinic workflows.",
    ],
  },
  {
    period: "Jul 2025 – Sep 2025",
    role: "Frontend Developer & UI/UX Designer Intern",
    company: "Innovatech Consulting · Casablanca",
    bullets: [
      "Built the complete Angular frontend of DigiCard, a digital business card platform with QR sharing and an admin dashboard, focused on clean UI and fast load times.",
      "Reworked UI components based on feedback from users and the team, simplifying navigation.",
      "Took on Spring Boot backend tasks when the team needed support, beyond the original scope.",
    ],
  },
  {
    period: "Sep 2026 – Jun 2029",
    role: "Master's, Computer Science",
    company: "Nanjing University of Science and Technology",
    bullets: [
      "Currently enrolled, available for part-time and freelance work alongside my studies.",
    ],
  },
  {
    period: "2022 – 2026",
    role: "B.Sc. Software Engineering",
    company: "Hangzhou Dianzi University",
    bullets: [
      "Graduated with a GPA of 4.44 / 5.",
      "Shipped live web and mobile projects alongside my studies, from a restaurant ordering platform to a real-time news aggregator.",
      "Volunteer & Learning Affairs Head at the International Student Union · GDG Hangzhou volunteer for 1+ year.",
    ],
  },
  {
    period: "2019 – 2021",
    role: "Chinese Language Program",
    company: "Donghua University, Shanghai",
    bullets: [
      "Reached HSK 4, working in Mandarin in technical and professional settings.",
      "\"Outstanding Student\" recognition three years running.",
    ],
  },
];

const SKILLS = [
  { group: "Languages & Markup", items: ["TypeScript", "JavaScript", "HTML/CSS", "Python", "SQL"] },
  { group: "Frameworks", items: ["React", "Next.js", "React Native (Expo)", "Angular"] },
  { group: "Backend & Data", items: ["FastAPI", "Node.js", "Firebase", "MongoDB", "Spring Boot"] },
];

// const TESTIMONIALS = [
//   {
//     quote: "Abdelkarim delivered a complete frontend for our internal tool in three weeks — clean code, solid UX, and zero hand-holding required. He's one of those rare developers who thinks about the product, not just the ticket.",
//     name: "Yassine Alaoui",
//     role: "CTO",
//     company: "Innovatech Consulting",
//     initials: "YA",
//   },
//   {
//     quote: "Worked with him on our food-rescue app. He handled auth, real-time chat, maps, and push notifications — basically the whole technical scope — while keeping the UI genuinely good-looking. Impressive range.",
//     name: "Fatima Zahra Benali",
//     role: "Co-founder",
//     company: "SurFoodSave",
//     initials: "FB",
//   },
//   {
//     quote: "Top GPA, top attitude. Abdelkarim consistently produces work that goes beyond the brief. If you need someone who ships and communicates well across languages and time zones, he's the right pick.",
//     name: "Prof. Li Mingzhe",
//     role: "Academic Supervisor",
//     company: "Hangzhou Dianzi University",
//     initials: "LM",
//   },
// ];

const FAQ_ITEMS = [
  {
    q: "How long does a project typically take?",
    a: "A landing page or portfolio site takes 3–5 days. A full web or mobile app with auth, database, and API layer is typically 3–6 weeks. I always scope and share a timeline before writing a single line of code.",
  },
  {
    q: "What's your tech stack?",
    a: "Frontend: React, Next.js, TypeScript, Tailwind CSS, Angular. Mobile: React Native + Expo. Backend: FastAPI, Node.js, Spring Boot. Data: MongoDB, Firebase, SQL. Tooling: Git, Docker, Vercel, Figma.",
  },
  {
    q: "Can you handle design as well as development?",
    a: "Yes — I design in Figma first, then build it myself. That means no designer-developer gap, tighter iteration, and a cohesive product. My design work lives on a separate portfolio: kimodesigns.vercel.app.",
  },
  {
    q: "Do you work remotely with international clients?",
    a: "Absolutely. I'm based in Nanjing, China, and speak Arabic, French, English and Chinese (HSK 4). I've worked with teams in Morocco while studying in China, so async work across time zones is my normal.",
  },
  {
    q: "Are you available for work?",
    a: "Yes. I'm doing my Master's in Computer Science at Nanjing University of Science and Technology, and I'm available for part-time and freelance frontend work alongside it. Remote or on-site, and open to relocating.",
  },
  {
    q: "What does your development process look like?",
    a: "Brief & scope → Figma prototype → dev build with weekly preview links → QA & polish → deploy. You have a live preview and direct communication at every step — no black-box development.",
  },
];

const MARQUEE_ITEMS = [
  "React", "Next.js", "TypeScript", "React Native", "Expo", "Angular",
  "FastAPI", "Node.js", "MongoDB", "Firebase", "Spring Boot", "Tailwind CSS",
  "Git", "Docker", "Vercel", "Figma", "Python", "SQL",
];

// ─── Grain ─────────────────────────────────────────────────────────────────────
function Grain() {
  return (
    <div className="fixed inset-0 z-[9990] pointer-events-none select-none" style={{ opacity: 0.035, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "200px 200px", transform: "translateZ(0)" }} />
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
          borderRadius: "62% 38% 46% 54% / 60% 44% 56% 40%",
          animation: "blob-drift 28s ease-in-out infinite",
          willChange: "transform",
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
            backgroundColor: open ? `${A}12` : `${A}00`,
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
// function TestimonialGrid() {
//   return (
//     <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
//       {TESTIMONIALS.map((t, i) => (
//         <StaggerItem key={i}>
//           <motion.div
//             className="relative rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] flex flex-col gap-5 h-full"
//             whileHover={{ borderColor: `${A}20`, backgroundColor: "rgba(255,255,255,0.035)", y: -4 }}
//             transition={{ duration: 0.3, ease: EASE }}
//           >
//             {/* Quote mark */}
//             <span className="font-heading text-5xl leading-none select-none" style={{ color: `${A}25` }}>&ldquo;</span>
//             <p className="font-code text-[12.5px] text-white/55 leading-[1.8] flex-1 -mt-4">{t.quote}</p>
//             <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
//               <div className="w-9 h-9 rounded-full flex items-center justify-center font-code text-[11px] font-bold shrink-0" style={{ background: `${A}18`, color: A }}>
//                 {t.initials}
//               </div>
//               <div>
//                 <p className="font-code text-[12px] text-white leading-tight">{t.name}</p>
//                 <p className="font-code text-[11px] text-white/35 leading-tight mt-0.5">{t.role} · {t.company}</p>
//               </div>
//             </div>
//           </motion.div>
//         </StaggerItem>
//       ))}
//     </Stagger>
//   );
// }

// ─── Contact form (Formspree) ─────────────────────────────────────────────────
// Sign up at formspree.io → create a form → paste your form ID below
const FORMSPREE_ID = "mredpnav"; // replace with your real Formspree form ID

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
  { name: "React Native", category: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Angular", category: "Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  { name: "Tailwind CSS", category: "Styling", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "FastAPI", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", category: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Git", category: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Figma", category: "Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
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
// const PRICING_PLANS = [
//   {
//     name: "Starter",
//     price: "$299",
//     period: "one-time",
//     desc: "Perfect for landing pages, portfolios, or simple marketing sites.",
//     features: [
//       "Up to 5 pages — responsive on all devices",
//       "Custom design from Figma mockup",
//       "Contact form + basic SEO setup",
//       "2 rounds of revisions",
//       "Delivered in 5–7 days",
//       "Source code included",
//     ],
//     cta: "Get Started",
//     href: "#contact",
//     highlight: false,
//   },
//   {
//     name: "Full Product",
//     price: "$999+",
//     period: "per project",
//     desc: "For full-stack web or mobile apps — auth, database, API, and deployment.",
//     features: [
//       "Complete web or mobile app (React / React Native)",
//       "Backend API + database design (Node.js / Python)",
//       "User auth, admin dashboard, notifications",
//       "CI/CD pipeline + production deploy",
//       "Weekly preview links throughout build",
//       "Full handoff: source code + docs + 30-day support",
//     ],
//     cta: "Let's Talk Scope",
//     href: "#contact",
//     highlight: true,
//   },
// ];
//
// function PricingPlans() {
//   return (
//     <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
//       {PRICING_PLANS.map((plan, i) => (
//         <Reveal key={plan.name} delay={i * 0.1}>
//           <motion.div
//             className="relative rounded-2xl border flex flex-col h-full overflow-hidden"
//             style={{
//               borderColor: plan.highlight ? `${A}40` : "rgba(255,255,255,0.07)",
//               background: plan.highlight ? `linear-gradient(135deg, ${A}0d 0%, transparent 60%), rgba(255,255,255,0.02)` : "rgba(255,255,255,0.02)",
//             }}
//             whileHover={{ borderColor: plan.highlight ? `${A}70` : `${A}30`, y: -4 }}
//             transition={{ duration: 0.3, ease: EASE }}
//           >
//             {plan.highlight && (
//               <div className="absolute top-0 inset-x-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${A}, transparent)` }} />
//             )}
//             {plan.highlight && (
//               <div className="absolute top-5 right-5">
//                 <span className="font-code text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ background: `${A}20`, color: A }}>Most Popular</span>
//               </div>
//             )}
//             <div className="p-8 flex flex-col gap-6 flex-1">
//               {/* Header */}
//               <div>
//                 <p className="font-code text-[11px] tracking-[0.3em] uppercase text-white/30 mb-3">{plan.name}</p>
//                 <div className="flex items-baseline gap-2 mb-2">
//                   <span className="font-heading text-[4.5rem] leading-none" style={{ color: plan.highlight ? A : "white" }}>{plan.price}</span>
//                   <span className="font-code text-[12px] text-white/30">{plan.period}</span>
//                 </div>
//                 <p className="font-code text-[12.5px] text-white/40 leading-relaxed">{plan.desc}</p>
//               </div>
//               {/* Divider */}
//               <div className="h-px" style={{ background: plan.highlight ? `${A}20` : "rgba(255,255,255,0.06)" }} />
//               {/* Features */}
//               <ul className="space-y-3 flex-1">
//                 {plan.features.map((f) => (
//                   <li key={f} className="flex items-start gap-3 font-code text-[12.5px] text-white/50 leading-relaxed">
//                     <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: A }}>▹</span>
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//               {/* CTA */}
//               <motion.a
//                 href={plan.href}
//                 className="mt-4 w-full flex items-center justify-center gap-2 font-code text-[13px] font-bold py-3.5 rounded-xl tracking-[0.08em]"
//                 style={plan.highlight
//                   ? { background: A, color: "#0a0a0a" }
//                   : { border: `1px solid ${A}30`, color: A }}
//                 whileHover={plan.highlight
//                   ? { scale: 1.02, boxShadow: `0 0 28px ${A}40` }
//                   : { borderColor: `${A}70`, backgroundColor: `${A}0a` }}
//                 transition={{ duration: 0.2 }}
//               >
//                 {plan.cta} ↗
//               </motion.a>
//             </div>
//           </motion.div>
//         </Reveal>
//       ))}
//     </div>
//   );
// }

// ─── CV viewer ─────────────────────────────────────────────────────────────────
// Opens the CV as a full-size preview (EN / 中文) with a download button.
// Previews are images so they render on every phone, even where inline PDFs don't.
const CVS = [
  { label: "English", lang: "en", pdf: "/cv.pdf", preview: "/cv.jpg", file: "Abdelkarim_Soussane_CV_EN.pdf" },
  { label: "中文", lang: "zh", pdf: "/cv-zh.pdf", preview: "/cv-zh.jpg", file: "Abdelkarim_Soussane_CV_ZH.pdf" },
];

function CVViewer() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cv = CVS[index];

  // Portal target only exists in the browser; also keeps the overlay out of animated (transformed) parents.
  useEffect(() => setMounted(true), []);

  useEffect(() => setLoaded(false), [index, open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="font-code text-[12px] font-bold tracking-[0.1em] px-5 py-3 rounded-full border border-white/20 text-white/80 flex items-center gap-2"
        whileHover={{ borderColor: `${A}60`, color: A, y: -2 }}
        transition={{ duration: 0.2 }}
        aria-haspopup="dialog"
      >
        View CV
      </motion.button>

      {mounted && createPortal(
      <AnimatePresence>
      {open && (
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="CV"
        className="fixed inset-0 z-[9995] flex flex-col bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: EASE }}
      >
        <div className="flex items-center justify-between gap-3 px-4 sm:px-8 py-4">
          <div className="flex items-center gap-1 rounded-full border border-white/10 p-1" role="group" aria-label="Language">
            {CVS.map((c, i) => (
              <button
                key={c.pdf}
                lang={c.lang}
                aria-pressed={index === i}
                onClick={() => setIndex(i)}
                className="font-code text-[12px] tracking-[0.1em] px-4 py-1.5 rounded-full transition-colors"
                style={index === i ? { background: A, color: "#0a0a0a" } : { color: "rgba(255,255,255,0.65)" }}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={cv.pdf}
              download={cv.file}
              className="font-code text-[12px] font-bold tracking-[0.1em] px-4 py-2 rounded-full"
              style={{ background: A, color: "#0a0a0a" }}
            >
              Download <span className="hidden sm:inline">PDF</span> ↓
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close CV"
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/80 font-code text-lg leading-none hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-8 pb-10">
          <motion.div
            className="relative mx-auto w-full max-w-[820px] rounded-xl overflow-hidden bg-white shadow-2xl"
            style={{ aspectRatio: "1600 / 2262" }}
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {!loaded && <div className="absolute inset-0 bg-[#141414] animate-pulse" />}
            {open && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={cv.preview}
                src={cv.preview}
                alt={`Abdelkarim Soussane CV, ${cv.label}`}
                onLoad={() => setLoaded(true)}
                className="block w-full h-full transition-opacity duration-300"
                style={{ opacity: loaded ? 1 : 0 }}
              />
            )}
          </motion.div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>,
      document.body,
      )}
    </>
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
    <img src="/profile.webp" alt="Abdelkarim Soussane" loading="lazy" decoding="async" className={className ?? "w-full h-full object-cover"} onError={() => setErr(true)} />
  ) : (
    <div className="w-full h-full bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] flex items-center justify-center">
      <span className="font-heading text-[6rem] text-white/[0.06] select-none">AK</span>
    </div>
  );
}

// ─── Magnet ────────────────────────────────────────────────────────────────────
// Pulls its child toward the cursor while the cursor is within `padding` px of it.
function Magnet({ children, padding = 150, strength = 3 }: { children: React.ReactNode; padding?: number; strength?: number }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    const onMove = (e: PointerEvent) => {
      const r = areaRef.current?.getBoundingClientRect();
      if (!r) return;
      const near =
        e.clientX > r.left - padding && e.clientX < r.right + padding &&
        e.clientY > r.top - padding && e.clientY < r.bottom + padding;
      x.set(near ? (e.clientX - (r.left + r.width / 2)) / strength : 0);
      y.set(near ? (e.clientY - (r.top + r.height / 2)) / strength : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [padding, strength, x, y]);

  return (
    <div ref={areaRef}>
      <motion.div style={{ x: sx, y: sy, willChange: "transform" }}>{children}</motion.div>
    </div>
  );
}

// ─── Gradient call-to-action pill ─────────────────────────────────────────────
function ContactButton() {
  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("contact");
    if (!target) return;
    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", "#contact");
  };
  return (
    <motion.a
      href="#contact"
      onClick={goToContact}
      className="inline-flex items-center gap-2 rounded-full font-code font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-[11px] sm:text-[12px] md:text-[13px]"
      style={{
        background: "linear-gradient(123deg, #12051f 7%, #5b21b6 40%, #7c3aed 74%, #9d4edd 100%)",
        boxShadow: `0px 4px 4px ${A}40, 4px 4px 12px #4c1d95 inset`,
        outline: "2px solid rgba(255,255,255,0.85)",
        outlineOffset: "-3px",
      }}
      whileHover={{ scale: 1.04, boxShadow: `0 0 36px ${A}60, 4px 4px 12px #4c1d95 inset` }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
    >
      Hire me <span aria-hidden="true">↗</span>
    </motion.a>
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
              loading="lazy"
              decoding="async"
              className={
                project.imageFit === "logo"
                  ? "absolute inset-0 w-full h-full object-cover"
                  : "absolute inset-0 w-full h-full object-cover opacity-75"
              }
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
    <section id="projects" ref={containerRef} style={{ height: `${total * 70}vh` }} className="relative">
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
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  // { label: "Pricing", href: "#pricing" },
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
          <a href={DESIGN_PORTFOLIO} target="_blank" rel="noopener noreferrer" className="font-code text-[12px] tracking-[0.15em] text-white/60 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5">Design ↗</a>
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
            href={DESIGN_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="font-code text-[14px] tracking-[0.15em] text-white/60 hover:text-white transition-colors px-5 py-3.5 rounded-xl hover:bg-white/[0.05]"
          >
            Design portfolio ↗
          </a>
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
  const headingY = useTransform(scrollY, [0, 700], [0, -80]);

  return (
    <div className="relative bg-[#080808] text-white" style={{ overflowX: "clip" }}>
      <Grain />
      <MorphingBlob />
      <Navbar />

      {/* ═══════════════════════════════════ HERO ═══════════════════════════════════ */}
      <section id="home" className="relative h-[100svh] min-h-[620px] flex flex-col z-10" style={{ overflowX: "clip" }}>
        {/* Massive greeting behind the character */}
        <motion.div className="overflow-hidden px-2 pt-24 sm:pt-24 md:pt-20" style={{ y: headingY }}>
          <motion.h1
            className="hero-heading font-heading uppercase leading-[0.86] tracking-tight whitespace-nowrap w-full text-center text-[29vw] sm:text-[28.5vw] lg:text-[28.5vw]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            Hi, I&apos;m Kimo
          </motion.h1>
        </motion.div>

        {/* Character, pulled toward the cursor */}
        <motion.div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-[38%] sm:top-auto sm:translate-y-0 sm:bottom-[4%] w-[78vw] max-w-[300px] sm:max-w-none sm:w-[300px] md:w-[360px] lg:w-[420px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        >
          <Magnet padding={150} strength={3}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kimo-head.webp"
              alt="Abdelkarim Soussane, 3D character"
              width={915}
              height={1171}
              className="w-full h-auto select-none pointer-events-none drop-shadow-[0_40px_60px_rgba(0,0,0,0.65)]"
              draggable={false}
            />
          </Magnet>
        </motion.div>

        {/* Bottom bar: who I am on the left, call to action on the right */}
        <div className="mt-auto relative z-20 flex justify-between items-end gap-6 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          >
            <p
              className="font-code uppercase tracking-wide leading-snug text-[#D7E2EA] max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
              style={{ fontSize: "clamp(0.68rem, 1.05vw, 1rem)" }}
            >
              Frontend developer building fast, polished web &amp; mobile apps, from Figma to production
            </p>
            <div className="hidden sm:flex items-center gap-2 mt-5">
              <SocialBtn type="github"   href="https://github.com/Kimox01"                 title="GitHub" />
              <SocialBtn type="linkedin" href="https://linkedin.com/in/abdelkarimsoussane" title="LinkedIn" />
              <SocialBtn type="x"        href="https://x.com/kimosoussane"                 title="X / Twitter" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          >
            <ContactButton />
          </motion.div>
        </div>
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
                <h3 className="font-heading text-[3.2rem] leading-none text-black mb-3">Frontend</h3>
                <p className="font-code text-[12px] text-black/65 leading-relaxed flex-1">Web · Mobile · From Figma to production<br />I design it, then I build it.</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {["Next.js", "React", "React Native", "TypeScript", "FastAPI"].map((t) => (
                    <span key={t} className="font-code text-[10px] px-2.5 py-1 rounded-full bg-black/10 text-black/60">{t}</span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>

            {/* Card 2 — track record */}
            <StaggerItem>
              <motion.div className="rounded-2xl p-7 border border-white/[0.07] bg-white/[0.02] h-full flex flex-col" whileHover={{ scale: 1.02, y: -4, borderColor: `${A}25` }} transition={{ duration: 0.3, ease: EASE }}>
                <p className="font-code text-[11px] tracking-[0.25em] uppercase text-white/35 mb-5">· Track record</p>
                <h3 className="font-heading text-[5.5rem] leading-none text-white">5</h3>
                <p className="font-code text-[13px] text-white/60 mt-1 mb-3">Live web projects</p>
                <p className="font-code text-[11px] text-white/30 leading-[1.7] flex-1">
                  Passiflora · Pulse AI News · Luckin Coffee · Seiko<br />
                  Plus PetiVeto, a platform I co-founded (pre-launch)
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
                <p className="font-code text-[13px] text-white/60 mb-3">To part-time or freelance work</p>
                <p className="font-code text-[11px] text-white/30 leading-[1.7] flex-1">
                  Master&apos;s student in Nanjing · Open to relocate<br />
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
                    <p className="font-code text-[11px] text-white/50">📍 Nanjing, China</p>
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
                  <p>I&apos;m <span className="text-white font-bold">Abdelkarim Soussane</span> — a frontend developer who ships complete products, from Figma designs to production web and mobile apps. I&apos;m doing my <span className="text-white">Master&apos;s in Computer Science at Nanjing University of Science and Technology</span>, after graduating in Software Engineering from Hangzhou Dianzi University.</p>
                  <p>I co-founded <span className="text-white">PetiVeto</span>, a veterinary platform for Morocco, and built its entire frontend: a Next.js clinic dashboard and a React Native mobile app. Before that, I built the complete Angular frontend of DigiCard at <span className="text-white">Innovatech Consulting</span>.</p>
                  <p>I write <span className="text-white">Next.js, TypeScript and React Native</span> day-to-day, speak <span style={{ color: A }}>4 languages</span>, and I&apos;m available for <span style={{ color: A }}>part-time or freelance work</span>.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex gap-4 flex-wrap">
                  <CVViewer />
                  <motion.a
                    href={DESIGN_PORTFOLIO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code text-[12px] font-bold tracking-[0.1em] px-5 py-3 rounded-full border border-white/20 text-white/80 flex items-center gap-2"
                    whileHover={{ borderColor: `${A}60`, color: A, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Design portfolio ↗
                  </motion.a>
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
          <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
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
      {/* <section id="testimonials" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal><SectionLabel n="07" text="Testimonials" /><h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white mb-14">What People Say</h2></Reveal>
          <TestimonialGrid />
        </div>
      </section> */}

      {/* ═══════════════════════════════════ PRICING ═══════════════════════════════════ */}
      {/* <section id="pricing" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionLabel n="08" text="Pricing" />
            <h2 className="font-heading text-5xl md:text-7xl uppercase leading-none text-white">Hire Me</h2>
          </Reveal>
          <div className="flex justify-center">
            <PricingPlans />
          </div>
        </div>
      </section> */}

      {/* ═══════════════════════════════════ DESIGN PORTFOLIO ═══════════════════════════════════ */}
      <section className="py-10 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <motion.a
              href={DESIGN_PORTFOLIO}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row md:items-center gap-8 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 overflow-hidden"
              whileHover={{ borderColor: `${A}40`, backgroundColor: "rgba(255,255,255,0.035)" }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-[#15202f] border border-white/10 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/kimo-designs-mark.webp" alt="" className="h-11 w-auto" />
              </div>
              <div className="flex-1">
                <p className="font-code text-[11px] tracking-[0.3em] uppercase mb-2" style={{ color: A }}>Also a designer</p>
                <h3 className="font-heading text-4xl md:text-5xl uppercase text-white leading-none mb-3">Kimo Designs</h3>
                <p className="font-code text-[12.5px] text-white/45 leading-relaxed max-w-xl">My UI/UX portfolio: case studies for PetiVeto and SurFoodSave, live demos of my websites, and the design side of everything I build.</p>
              </div>
              <span className="shrink-0 self-start md:self-center w-12 h-12 rounded-full border border-white/15 flex items-center justify-center font-code text-white/70 transition-all duration-300 group-hover:bg-[#a78bfa] group-hover:text-black group-hover:border-transparent">↗</span>
            </motion.a>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════ FAQ ═══════════════════════════════════ */}
      <section id="faq" className="py-20 px-6 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-12">
            <SectionLabel n="07" text="FAQ" />
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
            <SectionLabel n="08" text="Contact" />
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
            <p className="font-code text-white/30 text-xs">Frontend Developer · Nanjing, China</p>
          </div>
          <div className="flex items-center gap-3">
            {([
              { label: "GitHub",   href: "https://github.com/Kimox01" },
              { label: "LinkedIn", href: "https://linkedin.com/in/abdelkarimsoussane" },
              { label: "X",        href: "https://x.com/kimosoussane" },
              { label: "Design",   href: DESIGN_PORTFOLIO },
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
