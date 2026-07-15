"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

const images = [
  { src: "/gallery/campus3.jpg", alt: "Modern Smart Classroom", category: "Classroom", span: "wide" },
  { src: "/gallery/science1.jpg", alt: "Science & Computer Labs", category: "Science Lab", span: "tall" },
  { src: "/gallery/sports1.jpg", alt: "Sports Grounds", category: "Sports", span: "normal" },
  { src: "/gallery/campus1.jpg", alt: "School Library", category: "Library", span: "normal" },
  { src: "/gallery/art1.jpg", alt: "Activity Area", category: "Activities", span: "normal" },
  { src: "/gallery/annualday1.jpg", alt: "Annual Celebrations", category: "Events", span: "wide" },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <section
      id="gallery"
      ref={ref}
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #0D0F1A 0%, #111426 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "5%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,69,158,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,197,210,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 60px", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{ display: "block", fontSize: "0.8rem", fontWeight: 800, color: "#62C5D2", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}
            >
              CAMPUS GALLERY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, margin: 0 }}
            >
              Vibrant Life at Apollo Convent
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontSize: "0.9rem", color: "#64748B", maxWidth: 300, textAlign: "right", lineHeight: 1.6 }}
          >
            A glimpse into our classrooms, labs, sports grounds and campus life
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 160px)",
          gap: 14,
        }}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
              className="gallery-card"
              onClick={() => setSelected(img)}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                gridColumn: idx === 0 ? "span 2" : idx === 5 ? "span 2" : "span 1",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1360px) 25vw"
              />
              {/* Hover Overlay */}
              <div className="gallery-overlay">
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 8,
                }}>
                  <Maximize2 size={18} color="#fff" />
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: 2 }}>{img.alt}</div>
                <div style={{ fontSize: "0.75rem", color: "#62C5D2", fontWeight: 600 }}>{img.category}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{ position: "absolute", top: 20, right: 20, width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ position: "relative", maxWidth: 900, width: "100%", height: "75vh", borderRadius: 24, overflow: "hidden" }}
            >
              <Image src={selected.src} alt={selected.alt} fill style={{ objectFit: "contain" }} sizes="100vw" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
