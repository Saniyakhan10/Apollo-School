"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Share2, Send, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "/contact" },
  { label: "Notice Board", href: "#notices" },
];

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Share2, href: "https://www.instagram.com/p/DYOvjGBosx2/", label: "Instagram" },
  { icon: Send, href: "#", label: "Telegram" },
];

export default function Footer() {
  return (
    <footer style={{
      color: "#ffffff",
      paddingTop: "72px",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "48px",
          paddingBottom: "56px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
          className="footer-grid"
        >

          {/* Column 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{
                position: "relative",
                width: 52,
                height: 52,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(67,69,158,0.5)",
                flexShrink: 0,
              }}>
                <Image src="/logo.jpg" alt="Apollo Logo" fill style={{ objectFit: "cover" }} sizes="52px" />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 900,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}>Apollo Convent</div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "#a5a6df",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>Higher Secondary School</div>
              </div>
            </div>

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.8,
              maxWidth: "300px",
            }}>
              Nurturing curiosity, creativity and confidence since 2009. A beacon of quality education in Balaghat.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.6)",
                      transition: "all 0.25s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "0.95rem",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "20px",
            }}>Quick Links</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#a5a6df"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >
                  <ArrowRight size={12} />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 — Timings */}
          <div>
            <h4 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "0.95rem",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "20px",
            }}>School Timings</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { day: "Monday – Friday", time: "8:30 AM – 2:00 PM" },
                { day: "Saturday", time: "8:30 AM – 1:00 PM" },
                { day: "Sunday", time: "Closed" },
                { day: "Office Hours", time: "9:00 AM – 2:00 PM" },
              ].map((t, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "#a5a6df",
                    marginBottom: "2px",
                  }}>{t.day}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.55)",
                  }}>{t.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "0.95rem",
              fontWeight: 900,
              color: "#ffffff",
              marginBottom: "20px",
            }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: Phone, text: "+91 94258 92693" },
                { icon: Mail, text: "apolloschoolbgt@gmail.com" },
                { icon: MapPin, text: "Friends Colony, Ward No 4, Baihar Road, Balaghat - 481001" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={15} color="#a5a6df" />
                    </div>
                    <span style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.6,
                      marginTop: "8px",
                    }}>{c.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }} className="footer-bottom">
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.35)",
          }}>
            © 2025 Apollo Convent Higher Secondary School. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Use"].map((link, i) => (
              <a
                key={i}
                href="#"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-bottom {
            flex-direction: column !important;
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
