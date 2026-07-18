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
          position: "relative",
          overflow: "hidden",
          minHeight: "500px",
        }}>
          {/* Layer 1: Background Image */}
          <div style={{ position: "absolute", top: "104px", bottom: 0, left: 0, right: 0, zIndex: 0 }}>
            <Image
              src="/contact-banner.png"
              alt="Contact Banner"
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
            }} className="contact-stats-grid">
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
              .contact-stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 16px !important;
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
