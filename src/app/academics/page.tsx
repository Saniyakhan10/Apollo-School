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
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
          display: "flex",
          alignItems: "center",
        }}>
          {/* Layer 1: Background Image */}
          <div style={{ position: "absolute", top: "104px", bottom: 0, left: 0, right: 0, zIndex: 0 }}>
            <Image
              src="/academics-banner.png"
              alt="Academics Banner"
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
            }} className="academics-stats-grid">
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
              .academics-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 16px !important;
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
