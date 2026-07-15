"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Apollo Convent Higher Secondary School, Balaghat, Madhya Pradesh", color: "#62C5D2" },
  { icon: Phone, label: "Phone", value: "+91 731 4567890 / +91 9876543210", color: "#43459E" },
  { icon: Mail, label: "Email", value: "info@apolloconvent.edu.in", color: "#62C5D2" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => { setSubmitted(true); setForm({ name: "", email: "", subject: "", message: "" }); }, 800);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        height: "100vh",
        background: "#F8FAFF",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* BG Decoration */}
      <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(67,69,158,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, right: -60, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(98,197,210,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 60px", width: "100%", boxSizing: "border-box", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", fontSize: "0.8rem", fontWeight: 800, color: "#62C5D2", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}
          >
            CONTACT US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 900, color: "#43459E", lineHeight: 1.2 }}
          >
            Get In Touch with Us
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }}>

          {/* Left: Info Cards + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, boxShadow: `0 8px 28px rgba(67,69,158,0.1)`, borderColor: `${item.color}40` }}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 16,
                    padding: "18px 20px",
                    background: "#ffffff",
                    borderRadius: 18,
                    border: "1.5px solid #E5E7EB",
                    transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                    cursor: "default",
                  }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={20} color={item.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#9CA3AF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#1F2937", lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                </motion.div>
              );
            })}

            {/* Map */}
            <div style={{ borderRadius: 18, overflow: "hidden", border: "1.5px solid #E5E7EB", height: 180 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5647571343714!2d75.8943343758814!3d22.74443427936854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3bc8351dbf%3A0x6b72a08f5d02636f!2sScheme%20No%2078%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              background: "#ffffff",
              borderRadius: 28,
              padding: "40px",
              border: "1.5px solid #E5E7EB",
              boxShadow: "0 20px 60px rgba(67,69,158,0.06)",
            }}
          >
            <h3 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: "1.4rem", fontWeight: 800, color: "#43459E", marginBottom: 6 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#6B7280", marginBottom: 28, lineHeight: 1.6 }}>
              Have questions? Our team will respond within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "40px 20px" }}
              >
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #62C5D2, #43459E)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Check size={30} color="#fff" />
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1F2937", marginBottom: 8 }}>Message Sent!</h4>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: 20 }}>Thank you for reaching out. We will contact you soon.</p>
                <button onClick={() => setSubmitted(false)} style={{ background: "none", border: "none", color: "#43459E", fontWeight: 700, cursor: "pointer", textDecoration: "underline", fontSize: "0.9rem" }}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#374151", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Name</label>
                    <input className="contact-input" type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#374151", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Email</label>
                    <input className="contact-input" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#374151", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Subject</label>
                  <input className="contact-input" type="text" required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="How can we help?" />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 800, color: "#374151", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Message</label>
                  <textarea className="contact-input" rows={4} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Your message here..." style={{ resize: "none" }} />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(67,69,158,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    padding: "14px 28px",
                    background: "linear-gradient(135deg, #43459E, #62C5D2)",
                    color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "1rem", fontWeight: 700,
                    borderRadius: 12, border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
