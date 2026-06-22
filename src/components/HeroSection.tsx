"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Play,
  Puzzle,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Bus,
} from "lucide-react";

const features = [
  { icon: Puzzle, title: "Grade 1–12" },
  { icon: GraduationCap, title: "Expert Educators" },
  { icon: ShieldCheck, title: "Safe & Secure" },
  { icon: Bus, title: "Bus Facilities" },
];

/* ── Standalone FeatureCard — ensures icon is always white-visible on dark bg ── */
function FeatureCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "18px 10px",
        gap: "10px",
        background: hovered ? "#43459E" : "#1F2937",
        borderRadius: "16px",
        border: hovered ? "1px solid rgba(98,197,210,0.4)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hovered ? "0 12px 28px rgba(67,69,158,0.3)" : "0 4px 16px rgba(0,0,0,0.12)",
        cursor: "default",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
      }}
    >
      {/* Icon box */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: hovered ? "rgba(98,197,210,0.25)" : "rgba(98,197,210,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.35s ease",
          transform: hovered ? "rotate(-8deg) scale(1.1)" : "rotate(0) scale(1)",
        }}
      >
        <Icon size={20} strokeWidth={2} color={hovered ? "#62C5D2" : "#62C5D2"} />
      </div>
      {/* Title */}
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#ffffff",
        }}
      >
        {title}
      </span>
    </div>
  );
}


const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection({ onAdmissionClick }: { onAdmissionClick?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      id="home"
      ref={ref}
      style={{
        minHeight: "100vh",
        paddingTop: "90px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {/* Dot grid decor */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "3%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "12px",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      >
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            style={{ width: 8, height: 8, borderRadius: "50%", background: "#62C5D2" }}
          />
        ))}
      </div>

      {/* Main container */}
      <div className="hero-container">
        {/* ══════ LEFT CONTENT ══════ */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.15)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            style={{
              fontFamily: "'Merriweather', 'Georgia', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#43459E",
              marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}
          >
            Where Little Steps<br />Lead to Big Futures
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            {...fadeUp(0.25)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "#4B5563",
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            At Apollo Convent, we nurture curiosity, creativity and confidence
            through excellent education in a safe, happy and caring environment.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.35)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <button className="btn-primary" onClick={onAdmissionClick} style={{ color: "#ffffff" }}>
              Discover Our Programs
              <ArrowRight size={18} />
            </button>
            <a
              href="https://www.instagram.com/p/DYOvjGBosx2/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ textDecoration: "none" }}
            >
              <div
                className="play-icon-box"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "#43459E",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
              >
                <Play size={13} fill="currentColor" style={{ marginLeft: 2 }} />
              </div>
              Watch Video
            </a>
          </motion.div>

          {/* Feature Cards — 4 in a row */}
          <motion.div
            {...fadeUp(0.45)}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
            }}
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <FeatureCard key={i} icon={Icon} title={f.title} />
              );
            })}
          </motion.div>
        </div>

        {/* ══════ RIGHT IMAGE ══════ */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ position: "relative", width: "100%", maxWidth: "560px" }}>

            {/* Large glow behind everything */}
            <div
              style={{
                position: "absolute",
                inset: "-30px",
                borderRadius: "3rem",
                background: "linear-gradient(135deg, rgba(98,197,210,0.2) 0%, rgba(67,69,158,0.15) 50%, rgba(248,231,28,0.1) 100%)",
                filter: "blur(36px)",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Image Wrapper with Perfect Gradient Border */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "420px",
                borderRadius: "2rem",
                padding: "4px", // acts as the border width
                background: "linear-gradient(135deg, #62C5D2, #43459E, #F8E71C)",
                boxShadow: "0 24px 60px rgba(67,69,158,0.2), 0 8px 20px rgba(0,0,0,0.08)",
                zIndex: 10,
              }}
            >
              {/* Inner Container to clip the image and zoom it */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "calc(2rem - 4px)",
                  overflow: "hidden",
                  background: "#f3f4f6",
                }}
              >
                <Image
                  src="/school-building.jpg"
                  alt="Apollo Convent School Building"
                  fill
                  className="object-cover object-center"
                  style={{ transform: "scale(1.08)" }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle bottom gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(67,69,158,0.15) 0%, transparent 50%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* Floating badge — top left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                zIndex: 20,
                background: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid #F3F4F6",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(67,69,158,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GraduationCap size={18} color="#43459E" />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#1F2937", lineHeight: 1.2, fontFamily: "inherit" }}>Grade 1–12</p>
                <p style={{ fontSize: "10px", color: "#6B7280", lineHeight: 1.2 }}>Complete K-12</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
              style={{
                position: "absolute",
                bottom: -20,
                right: -20,
                zIndex: 20,
                background: "#43459E",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(67,69,158,0.25)",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Sparkles size={18} color="#F8E71C" />
              </div>
              <div>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2 }}>Excellence</p>
                <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", lineHeight: 1.2 }}>Through Education</p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Responsive grid CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&display=swap');
        
        .hero-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 48px 5%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          box-sizing: border-box;
        }

        @media (max-width: 1200px) {
          .hero-container {
            padding: 40px 4%;
            gap: 40px;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            padding: 40px 6%;
            gap: 48px;
            text-align: center;
          }
          /* Center content wrapper elements on mobile */
          .hero-container > div {
            align-items: center !important;
            text-align: center !important;
          }
          .hero-container p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-container div[style*="display: flex"] {
            justify-content: center !important;
          }
        }

        @media (max-width: 640px) {
          .hero-container {
            padding: 32px 5%;
            gap: 36px;
          }
        }
      `}</style>
    </section>
  );
}
