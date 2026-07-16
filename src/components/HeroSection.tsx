"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Bus,
  Phone,
  MapPin,
  Globe,
  Sun,
  BookOpen,
  Users,
} from "lucide-react";

/* ─── Inline social SVGs (not in this lucide version) ─── */
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/* ─── Feature data ─── */
const features = [
  { icon: BookOpen,    title: "Grade 1–12" },
  { icon: Users,       title: "Expert Educators" },
  { icon: ShieldCheck, title: "Safe & Secure" },
  { icon: Bus,         title: "Bus Facilities" },
];

/* ─── Glass Feature Card (matches reference exactly) ─── */
function GlassFeatureCard({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "18px 10px 14px",
        gap: "8px",
        background: hovered ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.22)",
        backdropFilter: "blur(32px)",
        WebkitBackdropFilter: "blur(32px)",
        borderRadius: "16px",
        border: "1px solid rgba(255,255,255,0.50)",
        boxShadow: hovered
          ? "0 12px 32px rgba(0,0,0,0.12)"
          : "0 4px 18px rgba(0,0,0,0.05)",
        cursor: "default",
        transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: "12px",
          background: "rgba(255,255,255,0.60)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
        }}
      >
        <Icon size={21} strokeWidth={1.8} color="#43459E" />
      </div>
      <span style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "11.5px",
        fontWeight: 700,
        lineHeight: 1.35,
        color: "#1F2937",
      }}>
        {title}
      </span>
    </div>
  );
}

export default function HeroSection({ onAdmissionClick }: { onAdmissionClick?: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 110,
      },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "620px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >

      {/* ══════════════════════════════════════════════════
          LAYER 1 — FULL-SCREEN BACKGROUND
          Uses the campus background image containing trees, sky, ground and building
      ══════════════════════════════════════════════════ */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/campus-bg.jpg"
          alt="Apollo Convent Campus"
          fill
          priority
          unoptimized /* Bypasses Next.js image optimization to render the source HD image directly */
          quality={100}
          sizes="100vw"
          className="hero-bg-img"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        {/* Soft dark vignette at edges */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)",
        }} />
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 2 — WHITE FOG on left (behind text)
          Matches the soft white glow in reference image
      ══════════════════════════════════════════════════ */}
      <div 
        className="hero-fog-overlay"
        style={{
          position: "absolute",
          top: 0, left: 0, bottom: 0,
          width: "55%",
          background: "radial-gradient(ellipse 80% 80% at 30% 55%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.50) 40%, transparent 75%)",
          zIndex: 1,
          pointerEvents: "none",
        }} 
      />

      {/* ══════════════════════════════════════════════════
          LAYER 3 — MAIN CONTENT GRID
          Left: text content | Right: empty to show the building in the background
      ══════════════════════════════════════════════════ */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "46% 54%",
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
      >
        {/* ── LEFT — Text Content ── */}
        <div
          className="hero-text-container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "140px 4% 90px 6%", /* Brought down a bit on desktop */
          }}
        >

          {/* Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              fontWeight: 900,
              lineHeight: 1.16,
              color: "#192060",
              marginBottom: 0,
              letterSpacing: "-0.5px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {["Where", "Little", "Steps", "\n", "Lead", "to", "Big", "Futures"].map((word, idx) => {
              if (word === "\n") {
                return <div key={idx} style={{ width: "100%", height: 0 }} />;
              }
              return (
                <span key={idx} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.22em" }}>
                  <motion.span
                    variants={childVariants}
                    style={{ display: "inline-block" }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>

          {/* Blue underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "60px",
              height: "4px",
              background: "#3B3EA0",
              borderRadius: "3px",
              marginTop: "16px",
              marginBottom: "20px",
              transformOrigin: "left center",
            }}
          />

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.96rem",
              lineHeight: 1.78,
              color: "#2D3748",
              marginBottom: "30px",
              maxWidth: "380px",
            }}
          >
            At Apollo Convent, we nurture curiosity, creativity and confidence
            through excellent education in a safe, happy and caring environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "34px" }}
          >
            <button className="hbtn-primary" onClick={onAdmissionClick}>
              Discover Our Programs
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
            <a
              href="https://www.instagram.com/p/DYOvjGBosx2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hbtn-secondary"
            >
              <span className="hbtn-play">
                <Play size={11} fill="currentColor" style={{ marginLeft: 2 }} />
              </span>
              Watch Video
            </a>
          </motion.div>

          {/* Glass Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.50, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
              maxWidth: "450px",
            }}
            className="hero-cards"
          >
            {features.map((f, i) => (
              <GlassFeatureCard key={i} icon={f.icon} title={f.title} />
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Empty container (shows building directly from background image) ── */}
        <div style={{ width: "100%", height: "100%" }} />
      </div>

      {/* ══════════════════════════════════════════════════
          LAYER 4 — BOTTOM GLASS INFO BAR
          Matches reference exactly: weather | phone | address | socials
      ══════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          width: "calc(100% - 48px)",
          margin: "0 24px 20px",
          background: "rgba(255,255,255,0.35)",
          backdropFilter: "blur(42px)",
          WebkitBackdropFilter: "blur(42px)",
          border: "1px solid rgba(255,255,255,0.55)",
          borderRadius: "32px",
          boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
          padding: "12px 28px",
          gap: "0",
          boxSizing: "border-box",
        }}
        className="hero-infobar"
      >
        {/* Weather */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <Sun size={26} color="#F59E0B" strokeWidth={2} />
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#1F2937", lineHeight: 1.2 }}>33°C</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.70rem", color: "#6B7280", fontWeight: 500 }}>Partly sunny</div>
          </div>
        </div>

        <div className="infobar-divider" style={{ width: "1px", height: "32px", background: "rgba(0,0,0,0.10)", margin: "0 20px", flexShrink: 0 }} />

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "9px", flexShrink: 0 }}>
          <Phone size={17} color="#43459E" strokeWidth={2.5} />
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.86rem", fontWeight: 600, color: "#1F2937", whiteSpace: "nowrap" }}>
            +91 9302712711, 9359823934
          </span>
        </div>

        <div className="infobar-divider" style={{ width: "1px", height: "32px", background: "rgba(0,0,0,0.10)", margin: "0 20px", flexShrink: 0 }} />

        {/* Address */}
        <div style={{ display: "flex", alignItems: "center", gap: "9px", flex: 1, minWidth: 0 }}>
          <MapPin size={17} color="#43459E" strokeWidth={2.5} style={{ flexShrink: 0 }} />
          <span className="infobar-address-text" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.84rem", fontWeight: 500, color: "#1F2937", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Sumit bazar ke bazu me gondia road balaghat
          </span>
        </div>

        <div className="infobar-divider" style={{ width: "1px", height: "32px", background: "rgba(0,0,0,0.10)", margin: "0 20px", flexShrink: 0 }} />

        {/* Social Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
          {[
            { C: FacebookIcon,  href: "#" },
            { C: InstagramIcon, href: "#" },
            { C: Globe,         href: "#" },
          ].map(({ C, href }, i) => (
            <a
              key={i}
              href={href}
              style={{ color: "#43459E", display: "flex", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.55")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <C size={20} />
            </a>
          ))}
        </div>
      </motion.div>

      {/* ══ CSS ══ */}
      <style>{`
        /* Primary CTA button */
        .hbtn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.93rem;
          font-weight: 700;
          color: #fff;
          background: #3B3EA0;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 18px rgba(59,62,160,0.38);
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .hbtn-primary:hover {
          background: #2d2f80;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(59,62,160,0.48);
        }

        /* Secondary glass button */
        .hbtn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 26px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 0.93rem;
          font-weight: 700;
          color: #1F2937;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255,255,255,0.85);
          border-radius: 9999px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .hbtn-secondary:hover {
          background: rgba(255,255,255,0.88);
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.11);
        }
        .hbtn-play {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #3B3EA0;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          #home {
            height: auto !important;
            min-height: 100vh !important;
            overflow: visible !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-text-container {
            padding: 110px 24px 40px 24px !important;
            text-align: center !important;
            align-items: center !important;
          }
          .hero-bg-img {
            object-position: 82% center !important; /* Positions building on right into center view on mobile */
          }
          .hero-fog-overlay {
            width: 100% !important;
            background: radial-gradient(ellipse 90% 90% at 50% 50%, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0.15) 100%) !important;
          }
        }
        @media (max-width: 768px) {
          .hero-cards {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-infobar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
            padding: 20px 24px !important;
            border-radius: 20px !important;
            width: calc(100% - 24px) !important;
            margin: 0 12px 14px !important;
          }
          .infobar-divider {
            display: none !important;
          }
          .infobar-address-text {
            white-space: normal !important;
          }
        }
        @media (max-width: 480px) {
          .hero-text-container {
            padding: 95px 16px 30px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
