"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  { num: "01", title: "Fill Online Form", desc: "Complete the admission inquiry form on our website or visit school office." },
  { num: "02", title: "Document Submission", desc: "Submit required documents — birth certificate, marksheets, photographs." },
  { num: "03", title: "Entrance Assessment", desc: "Students appear for a simple age-appropriate entrance assessment." },
  { num: "04", title: "Confirmation & Fee", desc: "Receive admission confirmation and complete fee payment to secure your seat." },
];

export default function AdmissionBannerSection({ onAdmissionClick }: { onAdmissionClick?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-light" id="admissions">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-tag">✦ Join Our Family</span>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Admissions <span>Open 2025–26</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Begin your child's journey to excellence. Seats are limited — apply early to secure your place at Apollo Convent.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "64px",
        }}
          className="admission-steps"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }}
            >
              {/* Number circle */}
              <div style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #43459E, #62C5D2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(67,69,158,0.2)",
              }}>
                <span style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  color: "#ffffff",
                }}>{step.num}</span>
              </div>


              <h3 style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "0.95rem",
                fontWeight: 900,
                color: "#1F2937",
              }}>{step.title}</h3>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem",
                color: "#6B7280",
                lineHeight: 1.7,
              }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: "linear-gradient(135deg, #43459E 0%, #323490 60%, #1a1b6e 100%)",
            borderRadius: "28px",
            padding: "60px 72px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "48px",
            alignItems: "center",
            boxShadow: "0 24px 60px rgba(67,69,158,0.25)",
            position: "relative",
            overflow: "hidden",
          }}
          className="admission-banner"
        >
          {/* BG elements */}
          <div style={{
            position: "absolute", top: -60, right: 80,
            width: 240, height: 240,
            borderRadius: "50%",
            background: "rgba(98,197,210,0.08)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: -80, right: -20,
            width: 300, height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }} />

          <div style={{ zIndex: 1 }}>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "#62C5D2",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              ✦ Limited Seats Available
            </p>
            <h3 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.3,
              marginBottom: "16px",
            }}>
              Give Your Child the Education<br />They Deserve
            </h3>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.97rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
            }}>
              Apply now for Classes 1–11. Online and offline modes available. Our team will guide you through the entire process.
            </p>
          </div>

          <div style={{ zIndex: 1, display: "flex", flexDirection: "column", gap: "14px", flexShrink: 0 }}>
            <button
              onClick={onAdmissionClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "16px 36px",
                background: "#ffffff",
                color: "#43459E",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
              }}
            >
              Apply Now
              <ArrowRight size={18} />
            </button>
            <a
              href="tel:09425892693"
              style={{
                textAlign: "center",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}
            >
              📞 Call us: 09425892693
            </a>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .admission-steps { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .admission-steps { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .admission-banner {
            grid-template-columns: 1fr !important;
            padding: 40px 28px !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
