"use client";

import React from "react";
import { motion } from "framer-motion";

/* ===== Individual SVG Icons ===== */

function GraduationCapSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8L4 24L32 40L60 24L32 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.6" />
      <path d="M16 32V48C16 48 24 56 32 56C40 56 48 48 48 48V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      <path d="M52 26V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="52" cy="46" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function BookSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12C8 12 16 8 32 8C48 8 56 12 56 12V52C56 52 48 48 32 48C16 48 8 52 8 52V12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.5" />
      <path d="M32 8V48" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M16 16H28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M16 22H24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

function TrophySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8H44V28C44 36 38 44 32 44C26 44 20 36 20 28V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.5" />
      <path d="M20 16H12C12 16 10 24 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M44 16H52C52 16 54 24 48 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
      <path d="M32 44V50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M24 50H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M22 54H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function StarSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 6L39.5 23.5L58 26L44 40L48 58L32 49L16 58L20 40L6 26L24.5 23.5L32 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.4" />
    </svg>
  );
}

function AtomSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="32" rx="28" ry="12" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(0 32 32)" />
      <ellipse cx="32" cy="32" rx="28" ry="12" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="28" ry="12" stroke="currentColor" strokeWidth="1" opacity="0.3" transform="rotate(120 32 32)" />
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function PencilSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44 8L56 20L24 52L8 56L12 40L44 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" opacity="0.4" />
      <path d="M36 16L48 28" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

/* ===== Floating SVG Items Config ===== */
interface FloatingItem {
  icon: React.FC<{ className?: string }>;
  size: number;
  top: string;
  left: string;
  color: string;
  delay: number;
  duration: number;
  yRange: number;
  rotate: number;
  blur?: boolean;
}

const floatingItems: FloatingItem[] = [
  {
    icon: GraduationCapSVG,
    size: 48,
    top: "12%",
    left: "6%",
    color: "rgba(98,197,210,0.4)",
    delay: 0,
    duration: 8,
    yRange: 24,
    rotate: 8,
  },
  {
    icon: BookSVG,
    size: 42,
    top: "18%",
    left: "88%",
    color: "rgba(67,69,158,0.35)",
    delay: 1.5,
    duration: 9,
    yRange: 18,
    rotate: -12,
  },
  {
    icon: TrophySVG,
    size: 38,
    top: "75%",
    left: "4%",
    color: "rgba(248,231,28,0.3)",
    delay: 3,
    duration: 10,
    yRange: 15,
    rotate: 15,
  },
  {
    icon: StarSVG,
    size: 32,
    top: "60%",
    left: "92%",
    color: "rgba(98,197,210,0.3)",
    delay: 2,
    duration: 7,
    yRange: 22,
    rotate: -18,
  },
  {
    icon: AtomSVG,
    size: 44,
    top: "88%",
    left: "72%",
    color: "rgba(67,69,158,0.25)",
    delay: 4,
    duration: 11,
    yRange: 16,
    rotate: 0,
  },
  {
    icon: PencilSVG,
    size: 36,
    top: "45%",
    left: "2%",
    color: "rgba(248,231,28,0.25)",
    delay: 2.5,
    duration: 9,
    yRange: 18,
    rotate: 20,
  },
  {
    icon: StarSVG,
    size: 24,
    top: "28%",
    left: "52%",
    color: "rgba(98,197,210,0.2)",
    delay: 1,
    duration: 6,
    yRange: 12,
    rotate: -8,
    blur: true,
  },
  {
    icon: GraduationCapSVG,
    size: 32,
    top: "80%",
    left: "42%",
    color: "rgba(67,69,158,0.2)",
    delay: 3.5,
    duration: 8,
    yRange: 14,
    rotate: 12,
    blur: true,
  },
];

/* ===== Main Component ===== */
export default function FloatingSVGs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {floatingItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              color: item.color,
              filter: item.blur ? "blur(3px)" : "drop-shadow(0 0 15px rgba(255,255,255,0.05))",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -item.yRange, 0],
              rotate: [0, item.rotate, 0],
            }}
            transition={{
              opacity: { duration: 1.5, delay: item.delay },
              scale: { duration: 1.5, delay: item.delay },
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotate: {
                duration: item.duration * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
