"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const categories = [
  {
    label: "Sports Day 2025",
    emoji: "🏆",
    images: [
      { src: "/gallery/meet-sportsday.jpg", caption: "Sports Day Inauguration" },
      { src: "/gallery/meet-sportsday.jpg", caption: "Sports Group Activity" },
      { src: "/gallery/meet-100m.png", caption: "100m Sprint Finals" },
      { src: "/gallery/meet-farewell.jpg", caption: "Farewell Relay 2025" },
    ],
    gradient: "linear-gradient(135deg, #43459E, #62C5D2)",
  },
  {
    label: "Annual Day 2025",
    emoji: "🎭",
    images: [
      { src: "/gallery/annualday1.jpg", caption: "Dance Performance" },
      { src: "/gallery/annualday2.jpg", caption: "Group Cultural Play" },
      { src: "/gallery/annualday3.jpg", caption: "Academic Award Ceremony" },
      { src: "/gallery/events1.jpg", caption: "Traditional Solo Performance" },
    ],
    gradient: "linear-gradient(135deg, #2563EB, #1D4ED8)",
  },
  {
    label: "Science Fair 2025",
    emoji: "🔬",
    images: [
      { src: "/gallery/science1.jpg", caption: "Science Projects Display" },
      { src: "/gallery/science2.jpg", caption: "Working Science Models" },
      { src: "/gallery/science3.jpg", caption: "Student Science Presenters" },
      { src: "/gallery/campus3.jpg", caption: "Science Experiments Lab" },
    ],
    gradient: "linear-gradient(135deg, #43459E, #1E1B4B)",
  },
  {
    label: "Republic Day 2025",
    emoji: "🇮🇳",
    images: [
      { src: "/gallery/republic1.jpg", caption: "Flag Hoisting & Salute" },
      { src: "/gallery/republic2.jpg", caption: "Republic Day March Past" },
      { src: "/gallery/events2.jpg", caption: "Patriotic Assembly Group" },
    ],
    gradient: "linear-gradient(135deg, #62C5D2, #43459E)",
  },
  {
    label: "Art Workshop",
    emoji: "🎨",
    images: [
      { src: "/gallery/art1.jpg", caption: "Saraswati Puja Event" },
      { src: "/gallery/art2.jpg", caption: "Group Painting & Drawing" },
      { src: "/gallery/art3.jpg", caption: "Clay Modeling Exhibition" },
    ],
    gradient: "linear-gradient(135deg, #0284C7, #62C5D2)",
  },
  {
    label: "Graduation 2024",
    emoji: "🎓",
    images: [
      { src: "/gallery/graduation1.jpg", caption: "Teachers' Day Celebrations" },
      { src: "/gallery/graduation2.jpg", caption: "Senior Class Graduation" },
      { src: "/gallery/graduation3.jpg", caption: "Group Valedictory Photo" },
    ],
    gradient: "linear-gradient(135deg, #0891B2, #62C5D2)",
  },
  {
    label: "Student Life",
    emoji: "🎒",
    images: [
      { src: "/gallery/students1.jpg", caption: "Little Learner — Ready for School" },
      { src: "/gallery/students2.jpg", caption: "Students in Group Study" },
      { src: "/gallery/students3.jpg", caption: "Classroom Activity Time" },
      { src: "/gallery/students4.jpg", caption: "School Campus Moments" },
    ],
    gradient: "linear-gradient(135deg, #43459E, #A78BFA)",
  },
];

export default function MemoriesSection() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCat, setActiveCat] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  const currentImages = categories[activeCat].images;
  const currentCat = categories[activeCat];

  return (
    <section ref={ref} id="memories" style={{ background: "#F9FAFB", padding: "80px 0", overflow: "hidden" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <span className="section-tag">✦ Our Gallery</span>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Our <span>Memories</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Captured moments from our vibrant school life — events, achievements and everyday joy.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "36px" }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCat(i)}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                padding: "9px 18px",
                borderRadius: "9999px",
                border: activeCat === i ? "2px solid #43459E" : "2px solid #E5E7EB",
                background: activeCat === i ? "#43459E" : "#ffffff",
                color: activeCat === i ? "#ffffff" : "#4B5563",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, fontSize: "0.83rem",
                cursor: "pointer", transition: "all 0.25s ease",
              }}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Scroll Area with side arrows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCat}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            style={{ position: "relative" }}
          >
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="scroll-arrow-btn left-arrow"
              style={{
                position: "absolute", left: -20, top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10, width: 44, height: 44, borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#43459E";
                (e.currentTarget as HTMLElement).style.borderColor = "#43459E";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronLeft size={20} color="currentColor" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="scroll-arrow-btn right-arrow"
              style={{
                position: "absolute", right: -20, top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10, width: 44, height: 44, borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#43459E";
                (e.currentTarget as HTMLElement).style.borderColor = "#43459E";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#ffffff";
                (e.currentTarget as HTMLElement).style.borderColor = "#E5E7EB";
                (e.currentTarget as HTMLElement).style.color = "inherit";
              }}
            >
              <ChevronRight size={20} color="currentColor" />
            </button>

            {/* Images */}
            <div
              ref={scrollRef}
              style={{
                display: "flex", gap: "16px",
                overflowX: "auto", paddingBottom: "8px",
                scrollbarWidth: "none",
              }}
            >
              {currentImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => setLightbox(img)}
                  className="memory-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    width: "290px",
                    background: "#ffffff",
                    borderRadius: "18px",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                    transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  {/* Image Container */}
                  <div style={{ position: "relative", width: "100%", height: "170px", overflow: "hidden" }}>
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
                      sizes="290px"
                      quality={95}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "rgba(67, 69, 158, 0.06)",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }} className="img-hover-overlay" />
                  </div>

                  {/* Caption Container */}
                  <div style={{
                    padding: "14px 16px",
                    background: "#ffffff",
                    borderTop: "1px solid #F3F4F6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: "#1F2937",
                      lineHeight: 1.4,
                    }}>
                      {img.caption}
                    </span>
                    <span style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#F3F4F6",
                      color: "#43459E",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                    }} className="memory-arrow-badge">
                      →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "28px" }}
        >
          <a href="/gallery" style={{ textDecoration: "none" }}>
            <button className="btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              View All Memories <ArrowRight size={16} />
            </button>
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.9)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{
                position: "relative",
                width: "min(90vw, 900px)", height: "min(80vh, 600px)",
                borderRadius: "20px", overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image src={lightbox.src} alt={lightbox.caption} fill style={{ objectFit: "cover" }} sizes="90vw" quality={95} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                padding: "24px",
              }}>
                <p style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1.1rem", color: "#fff" }}>
                  {lightbox.caption}
                </p>
              </div>
              <button onClick={() => setLightbox(null)} style={{
                position: "absolute", top: 16, right: 16,
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "#fff",
              }}>
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        div[style*="scrollbarWidth: none"]::-webkit-scrollbar { display: none; }
        .memory-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 16px 32px rgba(67, 69, 158, 0.12) !important;
          border-color: rgba(67, 69, 158, 0.35) !important;
        }
        .memory-card:hover img {
          transform: scale(1.06) !important;
        }
        .memory-card:hover .img-hover-overlay {
          opacity: 1 !important;
        }
        .memory-card:hover .memory-arrow-badge {
          background: #43459E !important;
          color: #ffffff !important;
          transform: translateX(2px) !important;
        }
        @media (max-width: 1024px) {
          .scroll-arrow-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
