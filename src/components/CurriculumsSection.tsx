"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const curriculums = [
  {
    level: "Primary",
    grades: "Grade 1 – 5",
    tag: "Foundation Years",
    desc: "Play-based, activity-driven learning that builds strong literacy, numeracy and life skills in a joyful, nurturing environment.",
    image: "/gallery/students1.jpg",
    points: ["Activity-based learning", "Art & Craft integration", "Weekly sports & yoga"],
    color: "#43459E",
    bg: "rgba(67,69,158,0.06)",
  },
  {
    level: "Middle School",
    grades: "Grade 6 – 8",
    tag: "Exploration Years",
    desc: "Independent thinking through science labs, computer classes and structured project-based learning preparing students for secondary school.",
    image: "/gallery/students2.jpg",
    points: ["Science & Computer labs", "Project-based learning", "Debate & public speaking"],
    color: "#62C5D2",
    bg: "rgba(98,197,210,0.06)",
  },
  {
    level: "Secondary",
    grades: "Grade 9 – 10",
    tag: "CBSE Preparation",
    desc: "Rigorous CBSE board preparation with expert faculty, regular mock tests and individualised attention for every student.",
    image: "/gallery/students3.jpg",
    points: ["CBSE Board curriculum", "Regular mock tests", "Career counselling"],
    color: "#43459E",
    bg: "rgba(67,69,158,0.06)",
  },
  {
    level: "Senior Secondary",
    grades: "Grade 11 – 12",
    tag: "Specialisation",
    desc: "Stream-based education in Science, Commerce & Arts with JEE/NEET coaching and professional readiness programmes.",
    image: "/gallery/students4.jpg",
    points: ["Science, Commerce & Arts", "JEE / NEET preparation", "College admission guidance"],
    color: "#62C5D2",
    bg: "rgba(98,197,210,0.06)",
  },
];

export default function CurriculumsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="curriculums"
      style={{ background: "#F9FAFB", padding: "96px 0", overflow: "hidden" }}
    >
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span className="section-tag">✦ What We Offer</span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            Our <span>Curriculums</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            A progressive curriculum matching every stage of a child's growth — from curious beginners to confident achievers.
          </p>
        </motion.div>

        {/* Alternating Rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
          {curriculums.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "60px",
                  alignItems: "center",
                }}
                className="curriculum-row"
              >
                {/* Image */}
                {isEven ? (
                  <>
                    <CurriculumImage item={item} />
                    <CurriculumContent item={item} inView={inView} i={i} />
                  </>
                ) : (
                  <>
                    <CurriculumContent item={item} inView={inView} i={i} />
                    <CurriculumImage item={item} />
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ textAlign: "center", marginTop: "64px" }}
        >
          <a href="/academics" style={{ textDecoration: "none" }}>
            <button className="btn-primary" style={{ color: "#ffffff" }}>
              View All Academics <ArrowRight size={18} />
            </button>
          </a>
        </motion.div>
      </div>

      <style>{`
        .curriculum-image-container {
          position: relative;
          width: 100%;
          height: 340px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(0,0,0,0.10);
        }
        @media (max-width: 900px) {
          .curriculum-row { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          .curriculum-image-container { height: 240px !important; }
        }
      `}</style>
    </section>
  );
}

function CurriculumImage({ item }: { item: typeof curriculums[0] }) {
  return (
    <div style={{ position: "relative" }}>
      <div className="curriculum-image-container">
        <Image
          src={item.image}
          alt={item.level}
          fill
          style={{ objectFit: "cover" }}
          sizes="50vw"
          quality={95}
        />
        {/* Colored overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${item.color}44 0%, transparent 60%)`,
        }} />
        {/* Grade badge */}
        <div style={{
          position: "absolute", top: 16, left: 16,
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          padding: "7px 14px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800, fontSize: "0.78rem",
          color: item.color,
          letterSpacing: "0.04em",
        }}>
          {item.grades}
        </div>
      </div>
    </div>
  );
}

function CurriculumContent({ item, inView, i }: { item: typeof curriculums[0]; inView: boolean; i: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <span style={{
        display: "inline-block",
        padding: "5px 14px",
        background: item.bg,
        color: item.color,
        borderRadius: "9999px",
        fontSize: "0.72rem",
        fontWeight: 700,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        width: "fit-content",
      }}>{item.tag}</span>

      <h3 style={{
        fontFamily: "'Merriweather', Georgia, serif",
        fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)",
        fontWeight: 900, color: "#1F2937", lineHeight: 1.25,
      }}>{item.level}</h3>

      <p style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.92rem", color: "#4B5563", lineHeight: 1.8,
      }}>{item.desc}</p>

      {/* Points */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.points.map((pt, j) => (
          <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%",
              background: item.color, flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.88rem", color: "#374151", fontWeight: 600,
            }}>{pt}</span>
          </div>
        ))}
      </div>

      <a
        href="/academics"
        style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700, fontSize: "0.92rem",
          color: item.color, textDecoration: "none",
          marginTop: "4px", transition: "gap 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.gap = "10px")}
        onMouseLeave={e => (e.currentTarget.style.gap = "6px")}
      >
        Learn More <ArrowRight size={15} />
      </a>
    </div>
  );
}
