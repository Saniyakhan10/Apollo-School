"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHomeSection from "@/components/ContactHomeSection";
import RegistrationForm from "@/components/RegistrationForm";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  { q: "Which board is the school affiliated with?", a: "Apollo Convent Higher Secondary School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi, offering quality education from Grade 1 to Grade 12." },
  { q: "What are the school timings?", a: "Our school timings are: Monday to Friday: 8:30 AM – 2:00 PM, and Saturday: 8:30 AM – 1:00 PM. Sunday remains closed for all classes." },
  { q: "What is the procedure for admission?", a: "Parents can fill out the online Inquiry/Registration Form, or collect the prospectus package directly from our Balaghat campus office. Admissions are offered depending on seat availability and basic screening evaluations." },
  { q: "Does the school provide transport facilities?", a: "Yes, we operate a fleet of safe, GPS-monitored school buses covering all major neighborhoods and local routes across Balaghat." },
  { q: "What is the general fee structure?", a: "The fee structure varies based on the grade level (Primary, Middle, or High School). Please drop an inquiry through our contact form or visit the admin office for a detailed fee schedule break-up." }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-soft" style={{ padding: "80px 0", background: "#F9FAFB", borderTop: "1px solid #F0F0F0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span className="section-tag">✦ Got Questions?</span>
          <h2 className="section-title" style={{ marginTop: "8px" }}>Frequently Asked <span>Questions</span></h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isOpen ? "0 10px 25px rgba(67, 69, 158, 0.05)" : "0 2px 8px rgba(0,0,0,0.02)",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.98rem",
                    color: isOpen ? "#43459E" : "#1F2937",
                    transition: "color 0.2s",
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: isOpen ? "#43459E" : "#9CA3AF",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform 0.2s",
                    lineHeight: 1,
                  }}>
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div style={{
                        padding: "0 24px 20px 24px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.92rem",
                        color: "#4B5563",
                        lineHeight: 1.7,
                      }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
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
                ✦ GET IN TOUCH
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
                Contact Us &<br />School Location
              </h1>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "700px",
                lineHeight: 1.7,
              }}>
                We're always happy to hear from parents, students and community<br />members. Reach out to us anytime.
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
              background: "rgba(255, 255, 255, 0.90)",
              backdropFilter: "blur(24px)",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
              padding: "16px 20px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              textAlign: "center",
            }} className="contact-stats-grid">
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>CBSE</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Board Affiliation</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>98%</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Board Results</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>120+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Expert Teachers</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", borderLeft: "1px solid rgba(0,0,0,0.08)" }} className="stat-divider">
                <div style={{ fontFamily: "'Merriweather', serif", fontSize: "1.45rem", fontWeight: 900, color: "#43459E" }}>25+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#6B7280" }}>Classroom Spaces</div>
              </div>
            </div>
          </div>
          <style>{`
            @media(max-width: 768px) {
              .contact-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 32px 16px !important;
              }
              .stat-divider {
                border-left: none !important;
              }
            }
            @media(max-width: 480px) {
              .contact-stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
        </section>

        {/* Map Section */}
        <section className="section-light" style={{ padding: "64px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <span className="section-tag">Interactive Map</span>
              <h2 className="section-title" style={{ marginTop: "8px" }}>Find Us on <span>Google Maps</span></h2>
            </div>
            <div style={{
              width: "100%",
              height: "450px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.05)",
              position: "relative",
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.083321557007!2d80.1923953!3d21.8228423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5bfe6df6cc39%3A0xfd6f61634d5c54af!2sApollo%20Convent%20Higher%20Secondary%20School%20Balaghat!5e0!3m2!1sen!2sin!4v1719123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating Directions Button */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#ffffff",
                padding: "10px 20px",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                border: "1px solid #E5E7EB",
                zIndex: 10,
              }}>
                <a
                  href="https://www.google.com/maps/dir/Apollo+Convent+Higher+Secondary+School+Balaghat,+Baihar+Rd,+Friends+Colony,+Ward+No+4,+Chitragupt+Nagar,+Balaghat,+Madhya+Pradesh+481001/Apollo+Convent+Higher+Secondary+School+Balaghat,+Baihar+Rd,+Friends+Colony,+Ward+No+4,+Chitragupt+Nagar,+Balaghat,+Madhya+Pradesh+481001"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#43459E",
                    textDecoration: "none",
                  }}
                >
                  🚗 Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reuse contact section */}
        <ContactHomeSection />

        {/* Dynamic FAQ Accordion Section */}
        <FAQSection />
      </motion.div>

      <Footer />
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
