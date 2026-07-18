"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import MemoriesSection from "@/components/MemoriesSection";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryAlbums = [
  { title: "Annual Sports Day 2024", count: "32 photos", cover: "/gallery/event-sports.jpg" },
  { title: "Cultural Festival 2024", count: "56 photos", cover: "/gallery/event-annual.jpg" },
  { title: "Science Exhibition", count: "28 photos", cover: "/gallery/campus-sciencelab.jpg" },
  { title: "Graduation Day 2024", count: "44 photos", cover: "/gallery/meet-farewell.jpg" },
  { title: "Republic Day Parade", count: "22 photos", cover: "/gallery/event-independence.jpg" },
  { title: "Music & Dance Show", count: "38 photos", cover: "/gallery/campus-arts.jpg" },
  { title: "Little Learners", count: "18 photos", cover: "/gallery/students1.jpg" },
  { title: "Student Life", count: "24 photos", cover: "/gallery/students2.jpg" },
  { title: "Classroom Moments", count: "20 photos", cover: "/gallery/students3.jpg" },
  { title: "School Memories", count: "30 photos", cover: "/gallery/students4.jpg" },
];

export default function GalleryPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<{ src: string; title: string } | null>(null);

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
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}>
          {/* Layer 1: Background Image */}
          <div style={{ position: "absolute", top: "104px", bottom: 0, left: 0, right: 0, zIndex: 0 }}>
            <Image
              src="/gallery-banner.png"
              alt="Gallery Banner"
              fill
              priority
              unoptimized
              style={{
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
          </div>
        </section>

        {/* Stats Bar */}
        <section style={{
          marginTop: "32px",
          position: "relative",
          zIndex: 10,
          padding: "0 48px",
        }}>
          <div className="container" style={{ padding: 0, maxWidth: "1000px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }} className="gallery-stats-grid">
              {[
                { val: "CBSE", label: "Board Affiliation", color: "#43459E" },
                { val: "98%", label: "Board Results", color: "#62C5D2" },
                { val: "120+", label: "Expert Teachers", color: "#43459E" },
                { val: "25+", label: "Classroom Spaces", color: "#62C5D2" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 36px rgba(67, 69, 158, 0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                    borderRadius: "18px",
                    padding: "24px 16px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div style={{ 
                    fontFamily: "'Plus Jakarta Sans', sans-serif", 
                    fontSize: "1.6rem", 
                    fontWeight: 800, 
                    color: item.color,
                    lineHeight: 1.2,
                    letterSpacing: "-0.5px"
                  }}>
                    {item.val}
                  </div>
                  <div style={{ 
                    fontFamily: "'Plus Jakarta Sans', sans-serif", 
                    fontSize: "0.82rem", 
                    fontWeight: 700, 
                    color: "#6B7280",
                    lineHeight: 1.3
                  }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`
            @media(max-width: 768px) {
              .gallery-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 16px !important;
              }
            }
            @media(max-width: 480px) {
              .gallery-stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Albums */}
        <section className="section-light">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
              <span className="section-tag">✦ Browse by Event</span>
              <h2 className="section-title" style={{ marginTop: "8px" }}>Photo <span>Albums</span></h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="album-grid">
              {galleryAlbums.map((album, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  onClick={() => setSelectedAlbum({ src: album.cover, title: album.title })}
                  className="light-card"
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}
                      sizes="(max-width:768px) 100vw, 33vw"
                      quality={90}
                    />
                  </div>
                  <div style={{ padding: "20px 20px 24px" }}>
                    <h3 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1rem", color: "#1F2937" }}>{album.title}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.82rem", color: "#9CA3AF", marginTop: "4px" }}>{album.count}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.album-grid{grid-template-columns:repeat(2,1fr) !important;}} @media(max-width:640px){.album-grid{grid-template-columns:1fr !important;}}`}</style>
        </section>

        {/* Reuse memories grid */}
        <MemoriesSection />
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAlbum(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                width: "min(90vw, 900px)",
                height: "min(80vh, 600px)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={selectedAlbum.src}
                alt={selectedAlbum.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="90vw"
                quality={95}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                padding: "24px",
              }}>
                <p style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1.10rem", color: "#fff" }}>
                  {selectedAlbum.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedAlbum(null)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
