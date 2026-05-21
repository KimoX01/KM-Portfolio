"use client";
/**
 * Framer component registry.
 * All components are dynamically imported with ssr:false because they rely on
 * browser APIs (CSS injection, SVG templates, gesture handlers).
 */
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function framerDynamic<P>(path: () => Promise<{ default: ComponentType<any> }>) {
  return dynamic(path, { ssr: false }) as ComponentType<P>;
}

// ─── Prop Types ───────────────────────────────────────────────────────────────

export interface SocialIconsProps {
  /** "DhmOgeC0D" = Primary, "XMeTD6glG" = Secondary */
  variant?: "DhmOgeC0D" | "XMeTD6glG";
  /** Icon component */
  q2AxCa26g?: string;
  /** Link URL */
  DAyu7SPw2?: string;
  [key: string]: unknown;
}

export interface PrimaryButtonProps {
  /** Button label. Default: "View All Projects" */
  XuRPDUOvp?: string;
  /** Link URL */
  rtUD4mhMC?: string;
  [key: string]: unknown;
}

export interface OutlineButtonProps {
  /** Link URL */
  mEOFGK7WG?: string;
  [key: string]: unknown;
}

export interface TextButtonProps {
  /** "Jm9vjItyJ" = Default, "ZAKDDSxj3" = Alt */
  variant?: "Jm9vjItyJ" | "ZAKDDSxj3";
  /** Button label. Default: "Contact me" */
  okVeDh8xi?: string;
  /** Link URL */
  UcynSyUpX?: string;
  [key: string]: unknown;
}

export interface AnimatedNumberCounterProps {
  mode?: "default" | "variants";
  value?: number;
  start?: number;
  end?: number;
  animation?: Record<string, unknown>;
  transition?: object;
  decimals?: string;
  commas?: boolean;
  font?: string;
  color?: Record<string, unknown>;
  prefix?: string;
  suffix?: string;
  decoration?: "none" | "underline" | "line-through";
  balance?: boolean;
  userSelect?: boolean;
  tag?: "h1" | "h2" | "h3" | "p";
  monospace?: boolean;
  [key: string]: unknown;
}

export interface ProjectCardProps {
  /** Image URL */
  jANXNKveC?: string;
  /** Project title. Default: "Italic Web Development" */
  nRMDD4Hiv?: string;
  /** Service labels. Default: "branding, ui/ux design" */
  eha8mSl5G?: string;
  [key: string]: unknown;
}

export interface ExperienceCardProps {
  variant?: "PrM_kbXEb" | "eZCdpNvSa" | "snCacfHrN" | "cfSyWw853" | "P23ESBw3B" | "HYolL68K3";
  [key: string]: unknown;
}


export interface ToolsSectionProps {
  variant?: "TCLT97H8h" | "bqp6M4Nkv" | "fbxXeXEI2";
  /** Padding CSS value. Default: "300px 0px 0px 0px" */
  gzLuf0uSQ?: string;
  [key: string]: unknown;
}

export interface ProcessSectionProps {
  variant?: "wYHk7g8yU" | "wQJRWV5TR" | "xI65YsG5q";
  [key: string]: unknown;
}

export interface TestimonialCardProps {
  variant?: "lXSfmIBYL" | "rGFAAwPUW" | "zKrj4X7Xj" | "PjgjyC7Ao" | "bCYSB3NYt" | "av8dwpb5s";
  [key: string]: unknown;
}

export interface PricingSectionProps {
  variant?: "cBTQgjlKC" | "DnqDvdnTj" | "K3VUoRYrn";
  [key: string]: unknown;
}

export interface FAQSectionProps {
  variant?: "felEB2V67" | "SPH18VVhm" | "AeAwSztzN";
  [key: string]: unknown;
}

export interface ContactSectionProps {
  variant?: "MZ4z9Ps8a" | "Is0j9t3cO" | "OBQlMn0mp";
  [key: string]: unknown;
}

// ─── Dynamic Imports ──────────────────────────────────────────────────────────

export const SocialIcons = framerDynamic<SocialIconsProps>(() => import("./social-icons"));
export const PrimaryButton = framerDynamic<PrimaryButtonProps>(() => import("./primary-button"));
export const OutlineButton = framerDynamic<OutlineButtonProps>(() => import("./outline-button"));
export const TextButton = framerDynamic<TextButtonProps>(() => import("./text-button"));
export const AnimatedNumberCounter = framerDynamic<AnimatedNumberCounterProps>(
  () => import("./animated-number-counter")
);
export const ProjectCard = framerDynamic<ProjectCardProps>(() => import("./project-card"));
export const ExperienceCard = framerDynamic<ExperienceCardProps>(() => import("./experience-card"));

export const ToolsSection = framerDynamic<ToolsSectionProps>(() => import("./tools-section"));
export const ProcessSection = framerDynamic<ProcessSectionProps>(() => import("./process-section"));
export const TestimonialCard = framerDynamic<TestimonialCardProps>(
  () => import("./testimonial-card")
);
export const PricingSection = framerDynamic<PricingSectionProps>(() => import("./pricing-section"));
export const FAQSection = framerDynamic<FAQSectionProps>(() => import("./faq-section"));
export const ContactSection = framerDynamic<ContactSectionProps>(
  () => import("./contact-section")
);
