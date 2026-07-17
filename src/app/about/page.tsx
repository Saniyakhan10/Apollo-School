"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Heart, Star, Users } from "lucide-react";

const milestones = [
  { year: "2009", title: "School Founded", desc: "Apollo Convent was established at Balaghat with 100 students to provide quality education." },
  { year: "2013", title: "Facilities Expansion", desc: "Added modern computer labs, reading room, and sports facilities to enhance student learning." },
  { year: "2017", title: "Academic Upgrades", desc: "Expanded curricula to middle school and secondary grades with focus on conceptual learning." },
  { year: "2021", title: "Smart AV & Tech Labs", desc: "Introduced digital smart boards and fully-equipped interactive audio-visual learning rooms." },
  { year: "2025", title: "Milestone of Excellence", desc: "Nurturing 16+ years of child-centric academic success and creative co-curricular development." },
];

const values = [
  { icon: Star, title: "Excellence", desc: "We set high standards and support every student to achieve their personal best." },
  { icon: Heart, title: "Compassion", desc: "We nurture kindness, empathy and respect as core values in every student." },
  { icon: Users, title: "Community", desc: "We build a strong, inclusive school family where everyone belongs and thrives." },
  { icon: CheckCircle2, title: "Integrity", desc: "We uphold honesty, accountability and ethical conduct in all our actions." },
];

export default function AboutPage() {
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
                ✦ OUR STORY
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
                About Apollo Convent<br />Higher Secondary School
              </h1>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "700px",
                lineHeight: 1.7,
              }}>
                Over 16 years of academic dedication, shaping confident,<br />compassionate and capable young minds in Balaghat.
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
            }} className="about-stats-grid glass-stats-bar">
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
              .about-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 32px 16px !important;
              }
              .stat-divider {
                border-left: none !important;
              }
            }
            @media(max-width: 480px) {
              .about-stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Mission & Vision */}
        <section className="section-light">
          <div className="container">
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "56px",
              alignItems: "center",
            }}
              className="about-mv-grid"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  position: "relative", width: "100%", height: "420px",
                  borderRadius: "24px", overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.10)",
                }}>
                  <Image
                    src="/about-our-school.jpg"
                    alt="Apollo Convent School Leadership"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="50vw"
                    quality={95}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "flex", flexDirection: "column", gap: "32px" }}
              >
                <div>
                  <span className="section-tag">Our Mission</span>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", color: "#4B5563", lineHeight: 1.8, marginTop: "12px" }}>
                    To provide world-class education that nurtures holistic development — academic excellence, moral character, physical fitness and social responsibility — preparing students for life beyond the classroom.
                  </p>
                </div>
                <div>
                  <span className="section-tag">Our Vision</span>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", color: "#4B5563", lineHeight: 1.8, marginTop: "12px" }}>
                    To be the most trusted school in our region — known for transforming curious children into confident, compassionate and capable global citizens who contribute positively to society.
                  </p>
                </div>
                <button className="btn-primary" style={{ color: "#ffffff", width: "fit-content" }} onClick={() => setFormOpen(true)}>
                  Enroll Your Child <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.about-mv-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* Core Values */}
        <section className="section-soft">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="section-tag">✦ What We Stand For</span>
              <h2 className="section-title" style={{ marginTop: "8px" }}>Our Core <span>Values</span></h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="values-grid">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="light-card"
                    style={{ padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}
                  >
                    <div style={{ width: 56, height: 56, borderRadius: "16px", background: "rgba(67,69,158,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={26} color="#43459E" />
                    </div>
                    <h3 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1rem", color: "#1F2937" }}>{v.title}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.75 }}>{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <style>{`@media(max-width:1024px){.values-grid{grid-template-columns:repeat(2,1fr) !important;}} @media(max-width:640px){.values-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:480px){.values-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* Timeline */}
        <section className="section-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="section-tag">✦ Our Journey</span>
              <h2 className="section-title" style={{ marginTop: "8px" }}>Our Journey of <span>Excellence</span></h2>
            </div>
            <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
              {/* Timeline line */}
              <div className="timeline-line" />
              <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto 1fr",
                      gap: "24px",
                      alignItems: "center",
                    }}
                    className={i % 2 === 0 ? "timeline-row timeline-row-even" : "timeline-row timeline-row-odd"}
                  >
                    {i % 2 === 0 ? (
                      <>
                        <div className="light-card" style={{ padding: "20px 24px", textAlign: "right" }}>
                          <h4 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "0.95rem", color: "#1F2937", marginBottom: "6px" }}>{m.title}</h4>
                          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{m.desc}</p>
                        </div>
                        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#43459E,#62C5D2)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(67,69,158,0.2)", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "#fff" }}>{m.year}</span>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div />
                        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#62C5D2,#43459E)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(67,69,158,0.2)", flexShrink: 0 }}>
                          <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "#fff" }}>{m.year}</span>
                        </div>
                        <div className="light-card" style={{ padding: "20px 24px" }}>
                          <h4 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "0.95rem", color: "#1F2937", marginBottom: "6px" }}>{m.title}</h4>
                          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.7 }}>{m.desc}</p>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            .timeline-line {
              position: absolute;
              left: 50%;
              top: 0;
              bottom: 0;
              width: 2px;
              background: linear-gradient(to bottom, #43459E, #62C5D2);
              transform: translateX(-50%);
              opacity: 0.2;
            }
            @media (max-width: 640px) {
              .timeline-line {
                left: 24px !important;
                transform: none !important;
              }
              .timeline-row {
                grid-template-columns: auto 1fr !important;
                gap: 16px !important;
              }
              /* For even index: card is first child, circle is second, empty is third */
              .timeline-row-even > div:nth-child(1) {
                order: 2 !important;
                text-align: left !important;
              }
              .timeline-row-even > div:nth-child(2) {
                order: 1 !important;
              }
              .timeline-row-even > div:nth-child(3) {
                display: none !important;
              }
              /* For odd index: empty is first child, circle is second, card is third */
              .timeline-row-odd > div:nth-child(1) {
                display: none !important;
              }
              .timeline-row-odd > div:nth-child(2) {
                order: 1 !important;
              }
              .timeline-row-odd > div:nth-child(3) {
                order: 2 !important;
              }
            }
          `}</style>
        </section>
      </motion.div>

      <Footer />
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
