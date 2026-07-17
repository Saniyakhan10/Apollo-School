"use client";

import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

export default function ContactHomeSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1.5px solid #E5E7EB",
    background: "#F9FAFB",
    color: "#1F2937",
    fontSize: "0.9rem",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <section
      id="contact-home"
      className="section-light"
      style={{
        padding: "72px 0",
      }}
    >
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(67,69,158,0.08)",
            color: "#43459E",
            padding: "6px 18px",
            borderRadius: "9999px",
            fontSize: "0.78rem",
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: "0.06em",
            marginBottom: "12px",
          }}>
            ✦ We'd Love to Hear From You
          </span>
          <h2 style={{
            fontFamily: "'Merriweather', Georgia, serif",
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            fontWeight: 900,
            color: "#1F2937",
            margin: "0 0 12px",
          }}>Get In <span style={{ color: "#43459E" }}>Touch</span></h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.95rem",
            color: "#6B7280",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Have a question or want to schedule a visit? Our team is always happy to help.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "32px",
          alignItems: "stretch",
        }} className="chs-grid">

          {/* LEFT — Info Panel */}
          <div style={{
            background: "linear-gradient(145deg, #43459E 0%, #191B4E 100%)",
            borderRadius: "20px",
            padding: "40px 32px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}>
            <div>
              <h3 style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "1.3rem",
                fontWeight: 900,
                color: "#ffffff",
                margin: "0 0 8px",
              }}>Contact Information</h3>
              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.65)",
                margin: 0,
              }}>Reach us through any of these channels</p>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />

            {/* Info items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {[
                { Icon: Phone, label: "Call Us", value: "+91 94258 92693", sub: "Mon–Sat, 8:30 AM – 2:00 PM" },
                { Icon: Mail, label: "Email Us", value: "apolloschoolbgt@gmail.com", sub: "apolloinstitute@rediffmail.com" },
                { Icon: MapPin, label: "Visit Us", value: "Friends Colony, Balaghat", sub: "Baihar Road, MP – 481001" },
                { Icon: Clock, label: "School Hours", value: "8:30 AM – 2:00 PM", sub: "Monday to Saturday" },
              ].map(({ Icon, label, value, sub }, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "10px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <Icon size={17} color="#ffffff" strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.68rem", fontWeight: 800, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>{label}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#ffffff" }}>{value}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.77rem", color: "rgba(255,255,255,0.5)" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom decoration dots */}
            <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
              {[1,2,3].map(i => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i === 1 ? "#ffffff" : "rgba(255,255,255,0.3)" }} />
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="registration-modal-content" style={{
            overflow: "hidden",
          }}>
            {/* Form header strip */}
            <div style={{
              background: "#43459E",
              padding: "22px 32px",
            }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "#ffffff", margin: 0 }}>
                Send Us a Message
              </h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", margin: "4px 0 0" }}>
                We typically reply within 24 hours.
              </p>
            </div>

            {/* Form body */}
            <div style={{ padding: "28px 32px" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <CheckCircle2 size={52} color="#10B981" style={{ margin: "0 auto 14px", display: "block" }} />
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#1F2937", marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#6B7280" }}>Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="chs-row">
                    <input className="contact-input" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required style={inputStyle} />
                    <input className="contact-input" type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={inputStyle} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="chs-row">
                    <input className="contact-input" type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
                    <div style={{ position: "relative" }}>
                      <select className="contact-input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                        <option value="" disabled>Select Subject</option>
                        <option>Admission Enquiry</option>
                        <option>Fee Structure</option>
                        <option>Academic Query</option>
                        <option>Transport</option>
                        <option>General Enquiry</option>
                      </select>
                      <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#9CA3AF", fontSize: "0.7rem" }}>▼</div>
                    </div>
                  </div>
                  <textarea
                    className="contact-input"
                    placeholder="Your message..."
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    style={{ ...inputStyle, resize: "none" }}
                  />
                  <button type="submit" style={{
                    background: "#43459E",
                    color: "#ffffff",
                    width: "100%",
                    padding: "13px 28px",
                    borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    fontWeight: 700, fontSize: "0.9rem",
                    border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .chs-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 580px) { .chs-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
