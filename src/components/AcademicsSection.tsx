"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, BookOpen, FlaskConical, Cpu } from "lucide-react";

const levels = [
  {
    num: "01",
    title: "Primary",
    grade: "Grade 1–5",
    age: "Age 6–10 Years",
    color: "#62C5D2",
    icon: BookOpen,
    description: "Our primary education builds core literacy and numeracy while fostering curiosity, creativity, and social skills in a joyful, nurturing atmosphere.",
    subjects: ["English Literature & Grammar", "Mathematics", "Environmental Studies (EVS)", "Art & Craft", "Second Language"],
    imageSrc: "/gallery/campus3.jpg",
  },
  {
    num: "02",
    title: "Middle School",
    grade: "Grade 6–8",
    age: "Age 11–13 Years",
    color: "#A78BFA",
    icon: FlaskConical,
    description: "Middle school bridges conceptual understanding with real-world problem solving, introducing advanced sciences and robust logical reasoning.",
    subjects: ["Integrated Sciences", "Algebra & Geometry", "Social Sciences", "Computer Studies", "Third Language Options"],
    imageSrc: "/gallery/science1.jpg",
  },
  {
    num: "03",
    title: "Secondary",
    grade: "Grade 9–10",
    age: "Age 14–15 Years",
    color: "#059669",
    icon: Cpu,
    description: "Rigorous CBSE board preparation focusing on theoretical foundations, laboratory experiments, and conceptual mastery across key disciplines.",
    subjects: ["Science (Physics, Chemistry, Biology)", "Mathematics & Algebra", "Social Sciences & History", "English Language & Lit.", "Hindi / Sanskrit Options"],
    imageSrc: "/gallery/campus2.jpg",
  },
  {
    num: "04",
    title: "Senior Secondary",
    grade: "Grade 11–12",
    age: "Age 16–18 Years",
    color: "#FBBF24",
    icon: Cpu,
    description: "Focusing on academic rigor and board preparation, we guide young adults towards high-caliber collegiate and career pathways.",
    subjects: ["Physics, Chemistry, Biology", "Advanced Mathematics", "Accountancy & Economics", "Computer Science / Python", "English & Humanities"],
    imageSrc: "/gallery/graduation1.jpg",
  },
];

export default function AcademicsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  const current = levels[active];

  return (
    <section
      id="academics"
      ref={ref}
      className="section-soft"
      style={{
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Subtle BG decoration */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,69,158,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,197,210,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1 }} className="academics-container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", fontSize: "0.8rem", fontWeight: 800, color: "#62C5D2", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}
          >
            ACADEMICS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 900, color: "#43459E", lineHeight: 1.2 }}
          >
            Curriculum Tailored for Comprehensive Excellence
          </motion.h2>
        </div>

        {/* Tab Selector Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }} className="academics-tabs">
          {levels.map((lvl, i) => {
            const Icon = lvl.icon;
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "12px 24px",
                  borderRadius: 50,
                  border: isActive ? `2px solid ${lvl.color}` : "1px solid rgba(255, 255, 255, 0.50)",
                  background: isActive ? "#43459E" : "rgba(255, 255, 255, 0.35)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  color: isActive ? "#fff" : "#4B5563",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  boxShadow: isActive ? `0 8px 24px rgba(67,69,158,0.25)` : "none",
                }}
              >
                <Icon size={16} color={isActive ? lvl.color : "#9CA3AF"} />
                {lvl.title}
                <span style={{
                  fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px",
                  borderRadius: 20,
                  background: isActive ? lvl.color : "#F3F4F6",
                  color: isActive ? "#0D0F1A" : "#6B7280",
                  transition: "all 0.3s ease"
                }}>{lvl.grade}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="academics-panel"
            style={{
              display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40,
              background: "rgba(255, 255, 255, 0.22)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              borderRadius: 28,
              border: "1px solid rgba(255, 255, 255, 0.50)",
              boxShadow: "0 20px 60px rgba(67,69,158,0.08)",
              overflow: "hidden",
            }}
          >
            {/* Left: Content */}
            <div style={{ padding: "40px" }} className="academics-content-left">
              {/* Number + Grade */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{
                  fontSize: "3.6rem",
                  fontWeight: 900,
                  color: current.color,
                  lineHeight: 1,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  flexShrink: 0,
                }}>
                  {current.num}
                </div>
                <div style={{ borderLeft: `2px solid ${current.color}30`, paddingLeft: 16 }}>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1F2937", fontFamily: "'Merriweather', serif" }}>{current.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 600 }}>{current.age}</div>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "#4B5563", marginBottom: 28 }}>
                {current.description}
              </p>

              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#1F2937", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
                KEY SUBJECTS
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }} className="academics-subjects-grid">
                {current.subjects.map((sub, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.88rem", color: "#374151", fontWeight: 600 }}>
                    <CheckCircle size={15} color={current.color} style={{ flexShrink: 0 }} />
                    <span style={{ lineHeight: 1.3 }}>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div style={{ position: "relative", minHeight: 320 }} className="academics-image-right">
              <Image
                src={current.imageSrc}
                alt={current.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="40vw"
                quality={95}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(to right, ${current.color}20, transparent)`,
              }} />
              {/* Color accent bar */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: current.color }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .academics-container {
            padding: 0 20px !important;
          }
          .academics-panel {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .academics-content-left {
            padding: 28px 24px 32px 24px !important;
          }
          .academics-image-right {
            min-height: 240px !important;
            order: -1;
          }
          .academics-image-right div {
            width: 100% !important;
            height: 4px !important;
            bottom: 0 !important;
            top: auto !important;
            left: 0 !important;
            right: 0 !important;
          }
          .academics-subjects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
