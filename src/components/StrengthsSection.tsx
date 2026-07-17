"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, ShieldCheck, Lightbulb, Bus, Music } from "lucide-react";

const strengths = [
  {
    icon: Trophy,
    title: "Academic Excellence",
    desc: "Consistently top CBSE results — a curriculum that nurtures curiosity and critical thinking.",
    accent: "#43459E",
  },
  {
    icon: Users,
    title: "Expert Educators",
    desc: "120+ qualified, passionate teachers dedicated to bringing out the best in every student.",
    accent: "#62C5D2",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    desc: "CCTV-monitored, gated campus with trained security ensuring complete safety for all.",
    accent: "#43459E",
  },
  {
    icon: Lightbulb,
    title: "Smart Classrooms",
    desc: "Tech-integrated learning with smart boards and digital labs for 21st-century education.",
    accent: "#62C5D2",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    desc: "GPS-enabled buses with lady attendants covering all major city routes — safe and punctual.",
    accent: "#43459E",
  },
  {
    icon: Music,
    title: "Co-Curricular Activities",
    desc: "Sports, music, dance and drama that build confidence, teamwork and creative expression.",
    accent: "#62C5D2",
  },
];

export default function StrengthsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-soft" id="strengths">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-tag">✦ Why Choose Us</span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            Our <span>Strengths</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            At Apollo Convent, we go beyond textbooks — building character, confidence and capabilities that last a lifetime.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="strengths-grid"
        >
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="strength-card"
                style={{
                  borderRadius: "20px",
                  padding: "36px 28px",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Thin colored left border accent — no gradient */}
                <div
                  className={`strength-accent-${i}`}
                  style={{
                    position: "absolute",
                    top: 0, left: 0, bottom: 0,
                    width: "3px",
                    background: s.accent,
                    borderRadius: "20px 0 0 20px",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                  }}
                />

                {/* Plain icon box — no gradient */}
                <div
                  className={`strength-icon-box-${i}`}
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "14px",
                    background: `${s.accent}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    transition: "background 0.35s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  <Icon
                    size={24}
                    color={s.accent}
                    strokeWidth={2}
                    className={`strength-icon-svg-${i}`}
                    style={{ transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)" }}
                  />
                </div>

                <h3 style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontSize: "1.02rem",
                  fontWeight: 900,
                  color: "#1F2937",
                  marginBottom: "10px",
                  transition: "color 0.3s ease",
                }} className={`strength-title-${i}`}>
                  {s.title}
                </h3>

                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.86rem",
                  color: "#6B7280",
                  lineHeight: 1.75,
                }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .strengths-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .strengths-grid { grid-template-columns: 1fr !important; } }

        .strength-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 24px 48px rgba(0,0,0,0.09) !important;
          border-color: #43459E !important;
        }

        ${strengths.map((s, i) => `
          .strength-card:hover .strength-accent-${i} { opacity: 1 !important; }
          .strength-card:hover .strength-icon-box-${i} {
            background: ${s.accent}18 !important;
            transform: scale(1.08) rotate(-4deg) !important;
          }
          .strength-card:hover .strength-title-${i} { color: ${s.accent} !important; }
        `).join("")}
      `}</style>
    </section>
  );
}
