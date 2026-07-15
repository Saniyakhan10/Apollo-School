"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ClipboardList, FileCheck, UserCheck, CheckCircle2 } from "lucide-react";

const steps = [
  { num: "01", title: "Online Registration", desc: "Fill out the online admission form with student details and preferred grade.", icon: ClipboardList, color: "#62C5D2" },
  { num: "02", title: "Document Submission", desc: "Upload birth certificate, last report card and photographs securely.", icon: FileCheck, color: "#A78BFA" },
  { num: "03", title: "Interaction & Test", desc: "A brief interaction session to understand the child's learning stage.", icon: UserCheck, color: "#F8E71C" },
  { num: "04", title: "Admission Confirmed", desc: "Complete fee formalities and secure your child's seat!", icon: CheckCircle2, color: "#4ADE80" },
];

export default function AdmissionsSection({ onAdmissionClick }: { onAdmissionClick?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="admissions"
      ref={ref}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #43459E 0%, #2D2F7A 40%, #1A1C5C 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        padding: "80px 0",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,197,210,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(248,231,28,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

      {/* Dot grid pattern */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 60px", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", fontSize: "0.8rem", fontWeight: 800, color: "#62C5D2", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}
          >
            ADMISSIONS 2026–27
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, marginBottom: 16 }}
          >
            Start Your Child's Journey with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}
          >
            Our admission process is simple, transparent, and parent-friendly. Just four easy steps to enroll your child.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 56 }} className="steps-grid">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="step-card"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 24,
                  padding: "32px 24px",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ y: -10, background: "rgba(255,255,255,0.14)", borderColor: `${step.color}60` }}
              >
                {/* Number watermark */}
                <div style={{ position: "absolute", top: -10, right: 12, fontSize: "5rem", fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 1, userSelect: "none", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {step.num}
                </div>

                {/* Icon */}
                <div
                  className="step-num"
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${step.color}20`,
                    border: `1.5px solid ${step.color}40`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                    transition: "all 0.35s ease",
                  }}
                >
                  <Icon size={24} color={step.color} />
                </div>

                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: step.color, letterSpacing: "0.12em", marginBottom: 8 }}>STEP {step.num}</div>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff", marginBottom: 10 }}>{step.title}</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <motion.button
            onClick={onAdmissionClick}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.04, boxShadow: "0 16px 40px rgba(98,197,210,0.35)" }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "16px 44px",
              background: "linear-gradient(135deg, #62C5D2, #43459E)",
              color: "#ffffff",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.05rem", fontWeight: 800,
              borderRadius: 9999, border: "none",
              boxShadow: "0 8px 24px rgba(98,197,210,0.3)",
              cursor: "pointer",
            }}
          >
            Apply for Admission Now
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
