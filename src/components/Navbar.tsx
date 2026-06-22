"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Academics", href: "#academics" },
  { label: "Gallery", href: "#gallery" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

/* ── Single Nav Link with hover animation ── */
function NavLink({ label, href, active, onClick }: {
  label: string; href: string; active: boolean; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "6px 14px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.95rem",
        fontWeight: 700,
        color: active ? "#43459E" : hovered ? "#43459E" : "#1F2937",
        textDecoration: "none",
        transition: "color 0.25s ease",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {label}
      {/* Animated underline */}
      <motion.span
        layoutId={undefined}
        animate={{ width: hovered || active ? "100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          bottom: -2,
          left: 0,
          height: 3,
          background: "linear-gradient(90deg, #62C5D2, #43459E)",
          borderRadius: 4,
          width: "100%",
        }}
      />
    </a>
  );
}

/* ── Main Navbar ── */
export default function Navbar({ onAdmissionClick }: { onAdmissionClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#ffffff",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.07)" : "0 1px 0 rgba(0,0,0,0.06)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1360px",
            margin: "0 auto",
            padding: "0 64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "90px",
          }}
          className="navbar-inner"
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          >
            <div
              style={{
                position: "relative",
                width: 62,
                height: 62,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                src="/logo.jpg"
                alt="Apollo Convent"
                fill
                className="object-contain"
                sizes="62px"
                priority
              />
            </div>
            <div className="logo-text" style={{ display: "flex", flexDirection: "column" }}>
              <span style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: "1rem",
                fontWeight: 900,
                color: "#43459E",
                lineHeight: 1.2,
              }}>
                Apollo Convent
              </span>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#6B7280",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Higher Secondary School
              </span>
            </div>
          </a>

          {/* ── Nav Links (Desktop) ── */}
          <nav
            className="nav-links-desktop"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                active={activeLink === link.label}
                onClick={() => setActiveLink(link.label)}
              />
            ))}
          </nav>

          {/* ── CTA Button ── */}
          <div className="cta-wrapper" style={{ display: "flex", alignItems: "center" }}>
            <motion.button
              onClick={onAdmissionClick}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 28px",
                background: "#43459E",
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 700,
                borderRadius: "9999px",
                border: "none",
                boxShadow: "0 4px 14px rgba(67,69,158,0.25)",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#323490";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 20px rgba(67,69,158,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#43459E";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(67,69,158,0.25)";
              }}
            >
              Admission Form
              <ArrowRight size={16} strokeWidth={2.5} />
            </motion.button>

            {/* Hamburger (mobile) */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen(true)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                color: "#1F2937",
                marginLeft: "8px",
              }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
                zIndex: 200,
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0,
                width: "300px", background: "#fff",
                zIndex: 201, padding: "28px 24px",
                display: "flex", flexDirection: "column",
                boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
                <div style={{ position: "relative", width: 44, height: 44, borderRadius: "50%", overflow: "hidden" }}>
                  <Image src="/logo.jpg" alt="Logo" fill className="object-contain" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ background: "#F3F4F6", border: "none", borderRadius: "10px", padding: "8px", cursor: "pointer" }}
                >
                  <X size={20} color="#1F2937" />
                </button>
              </div>

              <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                    style={{
                      display: "block",
                      padding: "14px 16px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: activeLink === link.label ? "#43459E" : "#1F2937",
                      textDecoration: "none",
                      borderRadius: "12px",
                      background: activeLink === link.label ? "rgba(67,69,158,0.07)" : "transparent",
                      transition: "all 0.2s ease",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div style={{ paddingTop: "24px" }}>
                <a
                  href="#admissions"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    padding: "14px 24px",
                    background: "#43459E",
                    color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  Admission Form <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&display=swap');
        @media (max-width: 1024px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .logo-text { display: none !important; }
          .navbar-inner { padding: 0 20px !important; }
        }
        @media (max-width: 640px) {
          .cta-wrapper a:first-child { display: none !important; }
        }
      `}</style>
    </>
  );
}
