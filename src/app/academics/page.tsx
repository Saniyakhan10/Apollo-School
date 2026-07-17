"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import CurriculumsSection from "@/components/CurriculumsSection";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Award, Users, Clock } from "lucide-react";

const highlights = [
  { icon: BookOpen, value: "CBSE", label: "Board Affiliation" },
  { icon: Award, value: "98%", label: "Board Results" },
  { icon: Users, value: "120+", label: "Expert Teachers" },
  { icon: Clock, value: "25+", label: "Years of Experience" },
];

export default function AcademicsPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main style={{ background: "#ffffff" }}>
      <Navbar onAdmissionClick={() => setFormOpen(true)} />

      {/* Page entrance animations wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Hero Banner */}
        <section style={{
          paddingTop: "95px",
          position: "relative",
          overflow: "hidden",
          minHeight: "290px",
          display: "flex",
          alignItems: "center",
        }}>
          {/* Layer 1: Background Image */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <Image
              src="/school-building.jpg"
              alt="Apollo Convent School Building"
              fill
              priority
              unoptimized
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
            {/* Layer 2: Blue Overlay Gradient */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(67, 69, 158, 0.88) 0%, rgba(50, 52, 144, 0.88) 100%)",
            }} />
          </div>

          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 280, height: 280, borderRadius: "50%",
            background: "rgba(98,197,210,0.06)", pointerEvents: "none",
            zIndex: 1,
          }} />

          <div className="container" style={{ padding: "70px 48px 80px", position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="section-tag" style={{ background: "rgba(255,255,255,0.12)", color: "#ffffff", letterSpacing: "1px", fontSize: "0.78rem", padding: "6px 12px" }}>
                ✦ LEARNING AT APOLLO
              </span>
              <h1 style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "clamp(1.8rem, 4.2vw, 2.9rem)",
                fontWeight: 900,
                color: "#ffffff",
                marginTop: "18px",
                marginBottom: "12px",
                lineHeight: 1.25,
              }}>
                Academics at<br />Apollo Convent
              </h1>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "700px",
                lineHeight: 1.7,
              }}>
                A rigorous, progressive curriculum designed to spark curiosity,<br />develop critical thinking and nurture every student's unique potential.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{
          marginTop: "-20px",
          position: "relative",
          zIndex: 10,
          padding: "0 48px",
        }}>
          <div className="container" style={{ padding: 0, maxWidth: "1000px" }}>
            <div style={{
              padding: "16px 20px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              textAlign: "center",
            }} className="academics-stats-grid glass-stats-bar">
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>CBSE</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Board Affiliation</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#62C5D2" }}>98%</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Board Results</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>120+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Expert Teachers</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#62C5D2" }}>25+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Classroom Spaces</div>
              </div>
            </div>
          </div>
          <style>{`
            @media(max-width: 768px) {
              .academics-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 32px 16px !important;
              }
              .stat-divider {
                border-left: none !important;
              }
            }
            @media(max-width: 480px) {
              .academics-stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Curriculums — reuse component */}
        <div style={{ paddingTop: "80px" }}>
          <CurriculumsSection />
        </div>
      </motion.div>

      <Footer />
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
