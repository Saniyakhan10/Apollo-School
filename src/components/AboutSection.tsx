"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, Users, BookOpen, Star, Lightbulb, Shield } from "lucide-react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Excellence", icon: Award, color: "#F8E71C" },
  { value: 50, suffix: "+", label: "Expert Teachers", icon: Users, color: "#62C5D2" },
  { value: 1200, suffix: "+", label: "Happy Students", icon: BookOpen, color: "#FF6B9D" },
];

const values = [
  { icon: Star, title: "Academic Excellence", desc: "Rigorous curriculum driving top results" },
  { icon: Lightbulb, title: "Innovation & Creativity", desc: "Fostering curious, thinking minds" },
  { icon: Shield, title: "Safe Environment", desc: "Secure, nurturing campus for every child" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0D0F1A 0%, #131629 50%, #0D0F1A 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{ position: "absolute", top: "10%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,69,158,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,197,210,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 60px", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* LEFT: Stats + Values */}
          <div>
            {/* Section label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "inline-block", fontSize: "0.8rem", fontWeight: 800, color: "#62C5D2", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}
            >
              ABOUT OUR SCHOOL
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(1.8rem, 2.8vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, color: "#ffffff", marginBottom: 20 }}
            >
              Empowering Students to Shape the Future
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ fontSize: "1rem", lineHeight: 1.8, color: "#94A3B8", marginBottom: 40 }}
            >
              Apollo Convent Higher Secondary School has been a cornerstone of quality education for over two decades — fostering academic excellence, critical thinking, and character development in a safe, joyful environment.
            </motion.p>

            {/* Stats Row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="glow-card"
                    style={{ padding: "20px 16px", textAlign: "center", cursor: "default" }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: `${stat.color}20`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                      <Icon size={18} color={stat.color} />
                    </div>
                    <div style={{ fontSize: "clamp(1.6rem, 2.5vw, 2rem)", fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: 6 }}>
                      <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B", fontWeight: 600 }}>{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Value Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "14px 20px", borderRadius: 14,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    whileHover={{ x: 8, background: "rgba(98,197,210,0.08)", borderColor: "rgba(98,197,210,0.25)" }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(98,197,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="#62C5D2" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#fff", marginBottom: 2 }}>{v.title}</div>
                      <div style={{ fontSize: "0.78rem", color: "#64748B" }}>{v.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ position: "relative" }}
          >
            {/* Glowing border frame */}
            <div style={{
              position: "relative",
              borderRadius: 28,
              padding: 3,
              background: "linear-gradient(135deg, rgba(98,197,210,0.6), rgba(67,69,158,0.6), rgba(98,197,210,0.2))",
              boxShadow: "0 0 60px rgba(98,197,210,0.2), 0 0 120px rgba(67,69,158,0.15)",
            }}>
              <div style={{ borderRadius: 26, overflow: "hidden", height: 440, position: "relative" }}>
                <Image
                  src="/about-our-school.jpg"
                  alt="Apollo Convent School Leadership"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="50vw"
                />
                {/* Overlay gradient */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,15,26,0.5) 0%, transparent 60%)" }} />
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              style={{
                position: "absolute", bottom: -20, left: -20,
                background: "#43459E", borderRadius: 16,
                padding: "12px 20px",
                boxShadow: "0 12px 30px rgba(67,69,158,0.4)",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Award size={18} color="#F8E71C" />
              </div>
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#fff" }}>Est. 2000</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)" }}>25 Years of Trust</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
