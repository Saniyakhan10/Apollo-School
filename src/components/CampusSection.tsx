"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FlaskConical, Dumbbell, BookOpen, Monitor, Palette, Bus } from "lucide-react";

const campusCards = [
  {
    icon: FlaskConical,
    title: "Science & Computer Labs",
    desc: "Modern equipment and digital tools for hands-on experiments and coding.",
    image: "/gallery/campus-sciencelab.jpg",
    tag: "Infrastructure",
    gradient: "linear-gradient(135deg, #43459E 0%, #6366F1 100%)",
    shadow: "rgba(67,69,158,0.30)",
  },
  {
    icon: Dumbbell,
    title: "Sports Complex",
    desc: "Cricket, football, basketball & indoor badminton for complete physical development.",
    image: "/gallery/campus-sports.jpg",
    tag: "Sports",
    gradient: "linear-gradient(135deg, #059669 0%, #34D399 100%)",
    shadow: "rgba(5,150,105,0.30)",
  },
  {
    icon: BookOpen,
    title: "School Library",
    desc: "10,000+ books, periodicals and digital resources fostering a love for reading.",
    image: "/gallery/campus-library.jpg",
    tag: "Learning Hub",
    gradient: "linear-gradient(135deg, #D97706 0%, #FBBF24 100%)",
    shadow: "rgba(217,119,6,0.30)",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Interactive boards and digital tools for engaging, tech-integrated learning.",
    image: "/gallery/campus-smartclass.jpg",
    tag: "Technology",
    gradient: "linear-gradient(135deg, #0891B2 0%, #62C5D2 100%)",
    shadow: "rgba(8,145,178,0.30)",
  },
  {
    icon: Palette,
    title: "Arts & Music Room",
    desc: "Dedicated spaces for visual arts, Indian classical music, dance and drama.",
    image: "/gallery/campus-arts.jpg",
    tag: "Creative Arts",
    gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
    shadow: "rgba(124,58,237,0.30)",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    desc: "GPS-enabled buses with lady attendants covering all major city routes.",
    image: "https://images.pexels.com/photos/28203486/pexels-photo-28203486.jpeg?cs=srgb&dl=pexels-usbofphotography-28203486.jpg&fm=jpg",
    tag: "Transport",
    gradient: "linear-gradient(135deg, #DC2626 0%, #F87171 100%)",
    shadow: "rgba(220,38,38,0.30)",
  },
];

export default function CampusSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} id="campus" style={{ background: "#ffffff", padding: "96px 0", overflow: "hidden" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span className="section-tag">✦ Where We Learn</span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            Our <span>Campus</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            A beautifully designed campus — every corner built with purpose, safety and inspiration in mind.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "28px",
          }}
          className="campus-grid"
        >
          {campusCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="campus-card"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", width: "100%", height: "160px", overflow: "hidden" }}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    sizes="33vw"
                    quality={95}
                  />
                  {/* Gradient overlay on image bottom */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "60px",
                    background: `linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)`,
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: "18px 18px 22px" }}>
                  {/* Gradient Circle Icon */}
                  <div 
                    className="campus-icon-box"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: card.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "10px",
                      boxShadow: `0 6px 16px ${card.shadow}`,
                      transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    <Icon size={19} color="#ffffff" strokeWidth={2} />
                  </div>

                  {/* Tag */}
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: "#9CA3AF",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}>{card.tag}</span>

                  <h3 style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontSize: "0.92rem",
                    fontWeight: 900,
                    color: "#1F2937",
                    marginBottom: "6px",
                  }}>{card.title}</h3>

                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "#6B7280",
                    lineHeight: 1.6,
                  }}>{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .campus-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .campus-grid { grid-template-columns: 1fr !important; } }
        
        .campus-card:hover {
          box-shadow: 0 20px 40px rgba(67, 69, 158, 0.12) !important;
          border-color: rgba(67, 69, 158, 0.3) !important;
        }
        .campus-card:hover img {
          transform: scale(1.08) !important;
        }
        .campus-card:hover .campus-icon-box {
          transform: scale(1.12) rotate(-8deg) !important;
        }
      `}</style>
    </section>
  );
}
