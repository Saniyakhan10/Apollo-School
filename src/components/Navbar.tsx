"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/* ── Single Nav Link ── */
function NavLink({
  label,
  href,
  active,
  onClick,
}: {
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
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
        padding: "8px 18px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: "0.92rem",
        fontWeight: 700,
        color: active ? "#ffffff" : hovered ? "#43459E" : "#1F2937",
        textDecoration: "none",
        transition: "color 0.25s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        zIndex: 1,
      }}
    >
      {/* Background active pill */}
      {active && (
        <motion.span
          layoutId="navbarActivePill"
          style={{
            position: "absolute",
            inset: 0,
            background: "#43459E",
            borderRadius: "20px",
            zIndex: -1,
            boxShadow: "0 4px 12px rgba(67,69,158,0.2)",
          }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
        />
      )}
      {/* Background hover pill */}
      {!active && hovered && (
        <motion.span
          layoutId="navbarHoverPill"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(67, 69, 158, 0.08)",
            borderRadius: "20px",
            zIndex: -1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      {label}
    </a>
  );
}

/* ── Main Navbar ── */
export default function Navbar({
  onAdmissionClick,
}: {
  onAdmissionClick?: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [moreHovered, setMoreHovered] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;

      if (
        currentPath === "/streams" ||
        (currentPath === "/" &&
          ["#faculty", "#events", "#notices"].includes(currentHash))
      ) {
        setActiveLink("More");
        return;
      }

      const matched = navLinks.find((l) => l.href === currentPath);
      if (matched) {
        setActiveLink(matched.label);
      } else {
        setActiveLink("Home");
      }
    };

    handleLocationChange();
    window.addEventListener("hashchange", handleLocationChange);
    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Glass Floating Navbar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          margin: "16px auto 0",
          width: "calc(100% - 48px)",
          maxWidth: "1360px",
          zIndex: 100,
          background: "rgba(255, 255, 255, 0.82)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "32px",
          border: "1px solid rgba(255, 255, 255, 0.50)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.4) inset",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            padding: "0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
          className="navbar-inner"
        >
          {/* ── Logo ── */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 48,
                height: 48,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid #43459E",
                boxShadow: "0 4px 12px rgba(67,69,158,0.15)",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/logo.jpg"
                alt="Apollo Convent"
                fill
                style={{ objectFit: "cover" }}
                sizes="48px"
                priority
              />
            </div>
            <div
              className="logo-text"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontFamily: "'Merriweather', Georgia, serif",
                  fontSize: "0.98rem",
                  fontWeight: 900,
                  color: "#43459E",
                  lineHeight: 1.2,
                }}
              >
                Apollo Convent
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.63rem",
                  fontWeight: 600,
                  color: "#6B7280",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Higher Secondary School
              </span>
            </div>
          </a>

          {/* ── Nav Links (Desktop) ── */}
          <nav
            className="nav-links-desktop"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                label={link.label}
                href={link.href}
                active={activeLink === link.label}
                onClick={() => {
                  setActiveLink(link.label);
                  setMobileOpen(false);
                }}
              />
            ))}

            {/* More Dropdown */}
            <div
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => {
                setMoreOpen(false);
                setMoreHovered(false);
              }}
              style={{ position: "relative" }}
            >
              <button
                onMouseEnter={() => setMoreHovered(true)}
                onMouseLeave={() => setMoreHovered(false)}
                style={{
                  background: activeLink === "More" ? "#43459E" : moreHovered || moreOpen ? "rgba(67, 69, 158, 0.08)" : "transparent",
                  border: "none",
                  padding: "8px 18px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  color: activeLink === "More" ? "#ffffff" : moreHovered || moreOpen ? "#43459E" : "#1F2937",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "20px",
                  boxShadow: activeLink === "More" ? "0 4px 12px rgba(67,69,158,0.2)" : "none",
                  transition: "all 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
              >
                More{" "}
                <ChevronDown
                  size={14}
                  style={{
                    transform: moreOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                />
              </button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                      borderRadius: "14px",
                      padding: "8px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                      minWidth: "165px",
                      border: "1px solid rgba(255,255,255,0.9)",
                      zIndex: 110,
                    }}
                  >
                    {[
                      { label: "Career Pathway", href: "/streams" },
                      { label: "Faculty", href: "/#faculty" },
                      { label: "Events", href: "/#events" },
                      { label: "Notices", href: "/#notices" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setActiveLink("More");
                          setMoreOpen(false);
                        }}
                        style={{
                          padding: "10px 16px",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.88rem",
                          fontWeight: 700,
                          color: "#1F2937",
                          textDecoration: "none",
                          borderRadius: "8px",
                          transition: "all 0.2s ease",
                          display: "block",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(67, 69, 158, 0.08)";
                          e.currentTarget.style.color = "#43459E";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "#1F2937";
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <motion.button
              onClick={onAdmissionClick}
              className="desktop-cta-btn"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 24px",
                background: "#43459E",
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.92rem",
                fontWeight: 700,
                borderRadius: "9999px",
                border: "none",
                boxShadow: "0 4px 14px rgba(67,69,158,0.28)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#323490";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 20px rgba(67,69,158,0.38)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#43459E";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 14px rgba(67,69,158,0.28)";
              }}
            >
              Admission Form
              <ArrowRight size={15} strokeWidth={2.5} />
            </motion.button>
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
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: 200,
                backdropFilter: "blur(4px)",
              }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "300px",
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                zIndex: 201,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/logo.jpg"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: "#F3F4F6",
                    border: "none",
                    borderRadius: "10px",
                    padding: "8px",
                    cursor: "pointer",
                  }}
                >
                  <X size={20} color="#1F2937" />
                </button>
              </div>

              <nav
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  flex: 1,
                  overflowY: "auto",
                }}
              >
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMobileOpen(false);
                    }}
                    style={{
                      display: "block",
                      padding: "14px 16px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color:
                        activeLink === link.label ? "#43459E" : "#1F2937",
                      textDecoration: "none",
                      borderRadius: "12px",
                      background:
                        activeLink === link.label
                          ? "rgba(67,69,158,0.07)"
                          : "transparent",
                      transition: "all 0.2s ease",
                      borderBottom: "1px solid #F3F4F6",
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}

                {/* Mobile More */}
                <div style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <button
                    onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "14px 16px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#1F2937",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>More</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transform: mobileMoreOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileMoreOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{
                          overflow: "hidden",
                          background: "#F9FAFB",
                          borderRadius: "10px",
                        }}
                      >
                        {[
                          { label: "Career Pathway", href: "/streams" },
                          { label: "Faculty", href: "/#faculty" },
                          { label: "Events", href: "/#events" },
                          { label: "Notices", href: "/#notices" },
                        ].map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => {
                              setActiveLink("More");
                              setMobileOpen(false);
                            }}
                            style={{
                              display: "block",
                              padding: "12px 32px",
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: "0.9rem",
                              color: "#4B5563",
                              textDecoration: "none",
                            }}
                          >
                            • {sub.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              <div style={{ paddingTop: "24px" }}>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    if (onAdmissionClick) onAdmissionClick();
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    padding: "14px 24px",
                    background: "#43459E",
                    color: "#fff",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Admission Form <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&display=swap');

        .hamburger-btn {
          display: none !important;
        }

        @media (max-width: 1024px) {
          .nav-links-desktop {
            position: static !important;
            transform: none !important;
            display: flex !important;
            gap: 2px !important;
          }
          .desktop-cta-btn {
            display: none !important;
          }
          .navbar-inner {
            padding: 0 16px !important;
            justify-content: space-between !important;
          }
        }

        @media (max-width: 768px) {
          .nav-links-desktop {
            gap: 1px !important;
          }
          .nav-links-desktop a, .nav-links-desktop button {
            padding: 6px 10px !important;
            font-size: 0.82rem !important;
          }
        }

        @media (max-width: 640px) {
          .logo-text span:first-child { font-size: 0.82rem !important; }
          .logo-text span:last-child { font-size: 0.55rem !important; }
          .nav-links-desktop {
            display: none !important; /* Hide links on extremely small screens to avoid overflow */
          }
        }

        @media (max-width: 360px) {
          .logo-text { display: none !important; }
        }
      `}</style>
    </>
  );
}
