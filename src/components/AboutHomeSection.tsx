"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "CBSE affiliated — Grade 1 to 12",
  "Eco-friendly & secured campus",
  "120+ expert faculty members",
];

export default function AboutHomeSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about-home"
      style={{ background: "#ffffff", padding: "80px 0", overflow: "hidden" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* LEFT — Single clean image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative" }}
          >
            <div className="about-image-container">
              <Image
                src="/about-our-school.jpg"
                alt="Apollo Convent School Leadership"
                fill
                style={{ objectFit: "cover" }}
                sizes="50vw"
                priority
                quality={95}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(67,69,158,0.3) 0%, transparent 50%)",
              }} />
            </div>

            {/* Decorative dots */}
            <div style={{
              position: "absolute", top: -16, right: -16,
              display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "8px",
              opacity: 0.15, pointerEvents: "none", zIndex: -1,
            }}>
              {[...Array(25)].map((_, i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#43459E" }} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span className="section-tag">✦ About Our School</span>
            <h2 className="section-title">
              Shaping Futures,<br /><span>Inspiring Minds</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.95rem",
              color: "#4B5563",
              lineHeight: 1.8,
            }}>
              Apollo Convent Higher Secondary School was established in 2009 with 100 students to create centers of excellence in Balaghat. We filter all our decisions and actions through our core mantra: "What’s Right For the Child."
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "11px 15px",
                    background: "#F9FAFB",
                    borderRadius: "12px",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <CheckCircle2 size={16} color="#43459E" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.87rem", color: "#374151", fontWeight: 600,
                  }}>{h}</span>
                </motion.div>
              ))}
            </div>

            <a href="/about" style={{ textDecoration: "none" }}>
              <button className="btn-primary" style={{ color: "#ffffff", marginTop: "4px" }}>
                Discover Our Story <ArrowRight size={17} />
              </button>
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-image-container {
          position: relative;
          width: 100%;
          height: 460px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 64px rgba(67,69,158,0.14);
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
        @media (max-width: 640px) {
          .about-image-container { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
