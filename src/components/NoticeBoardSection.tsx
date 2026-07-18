"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Pin, Bell, BookOpen, AlertCircle, Info, Calendar, ArrowRight } from "lucide-react";

type Category = "All" | "Academic" | "Holiday" | "Exam" | "General";

const notices = [
  {
    id: 1, category: "Exam" as Category,
    title: "Unit Test Schedule — July 2025",
    date: "28 Jun 2025", pinned: true,
    icon: BookOpen, color: "#43459E",
    short: "Classes 6–10 | July 7–12, 2025",
    full: "Unit Test for Classes 6–10 will be held from July 7–12, 2025. The complete timetable is available on the school portal and notice board. All students must carry their admit cards. No student will be allowed into the exam hall without proper ID. Parents are requested to ensure students are well-prepared.",
  },
  {
    id: 2, category: "Holiday" as Category,
    title: "Summer Vacation Extended Notice",
    date: "25 Jun 2025", pinned: true,
    icon: Bell, color: "#62C5D2",
    short: "School closed till July 1. Reopens July 2.",
    full: "School will remain closed till July 1, 2025 for summer vacations. Regular school resumes from July 2 onwards. Students are advised to complete holiday homework and be prepared for unit tests from July 7. Transport services will resume normally from July 2.",
  },
  {
    id: 3, category: "Academic" as Category,
    title: "New Textbooks Distribution — Classes 1–5",
    date: "22 Jun 2025", pinned: false,
    icon: BookOpen, color: "#43459E",
    short: "Distribution on July 3 | School Office",
    full: "New academic year textbooks for Classes 1–5 will be distributed on July 3, 2025. Parents are requested to collect them from the school office between 9 AM–1 PM. Please carry the fee receipt as proof of payment. Students must cover all books with brown paper before July 7.",
  },
  {
    id: 4, category: "General" as Category,
    title: "Uniform & ID Card Guidelines 2025–26",
    date: "20 Jun 2025", pinned: false,
    icon: Info, color: "#62C5D2",
    short: "Proper uniform mandatory from July 2.",
    full: "All students must wear proper school uniform as per the school handbook from July 2, 2025. School ID cards are mandatory for entry into the campus. Strict disciplinary action will be taken against students found without ID cards or wearing improper uniform.",
  },
  {
    id: 5, category: "Exam" as Category,
    title: "CBSE Practical Dates — Class 10 & 12",
    date: "18 Jun 2025", pinned: false,
    icon: AlertCircle, color: "#43459E",
    short: "CBSE practicals | January 2026",
    full: "As per the CBSE circular, practical examinations for Class 10 and 12 students will be conducted in January 2026. The school will share the exact schedule by October 2025. Students are advised to maintain proper practical records from the start of the session.",
  },
  {
    id: 6, category: "General" as Category,
    title: "Parent-Teacher Meeting — August 2025",
    date: "15 Jun 2025", pinned: false,
    icon: Calendar, color: "#62C5D2",
    short: "August 20 | 9 AM–1 PM | All parents",
    full: "A Parent-Teacher Meeting is scheduled for August 20, 2025 from 9:00 AM to 1:00 PM. Attendance is requested for all parents. Teachers will discuss first-term academic progress, attendance, conduct and upcoming examinations.",
  },
];

const categories: Category[] = ["All", "Academic", "Holiday", "Exam", "General"];

export default function NoticeBoardSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<Category>("All");
  const [popup, setPopup] = useState<typeof notices[0] | null>(null);
  const [viewAllOpen, setViewAllOpen] = useState(false);

  const filtered = active === "All" ? notices : notices.filter(n => n.category === active);

  return (
    <section ref={ref} id="notices" style={{ background: "#F9FAFB", padding: "80px 0", overflow: "hidden" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <span className="section-tag">✦ Stay Informed</span>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            School <span>Notice Board</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Important announcements, circulars and updates for students and parents.
          </p>
        </motion.div>

        {/* ── Official Bulletins Notice Board Board Frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
          }}
        >
          {/* Main Board Container */}
          <div className="registration-modal-content" style={{
            borderRadius: "28px",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Header bar */}
            <div style={{
              background: "#43459E",
              padding: "16px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* macOS control dots */}
                <div style={{ display: "flex", gap: "6px" }}>
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
                  <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F" }} />
                </div>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  color: "#ffffff",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  OFFICIAL BULLETINS
                </span>
              </div>

              {/* Filter pills */}
              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    style={{
                      padding: "4px 14px",
                      borderRadius: "9999px",
                      border: active === cat ? "1.5px solid #ffffff" : "1.5px solid rgba(255,255,255,0.25)",
                      background: active === cat ? "#ffffff" : "transparent",
                      color: active === cat ? "#43459E" : "#ffffff",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Notices Grid */}
            <div style={{ padding: "36px 32px" }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }} className="notice-grid">
                {filtered.slice(0, 4).map((notice, i) => {
                  // Color codes
                  let catColor = "#43459E";
                  let catBg = "rgba(67, 69, 158, 0.08)";
                  if (notice.category === "Holiday") {
                    catColor = "#EA580C";
                    catBg = "rgba(234, 88, 12, 0.08)";
                  } else if (notice.category === "Exam") {
                    catColor = "#DC2626";
                    catBg = "rgba(220, 38, 38, 0.08)";
                  } else if (notice.category === "General") {
                    catColor = "#0D9488";
                    catBg = "rgba(13, 148, 136, 0.08)";
                  }

                  return (
                    <motion.div
                      key={notice.id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => setPopup(notice)}
                      style={{
                        background: "#ffffff",
                        borderRadius: "18px",
                        border: "1px solid rgba(0,0,0,0.06)",
                        padding: "20px 24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.01)",
                        position: "relative",
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.015,
                        boxShadow: "0 16px 36px rgba(67,69,158,0.1)",
                        borderColor: "rgba(67,69,158,0.25)"
                      }}
                    >
                      {/* Red Pushpin Icon rotated */}
                      <div style={{
                        transform: "rotate(45deg)",
                        color: "#EF4444",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Pin size={20} fill="#EF4444" color="#EF4444" />
                      </div>

                      {/* Content block */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                          <span style={{
                            fontSize: "0.65rem",
                            fontWeight: 800,
                            color: catColor,
                            background: catBg,
                            padding: "2px 8px",
                            borderRadius: "6px",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            letterSpacing: "0.03em",
                            textTransform: "uppercase",
                          }}>
                            {notice.category}
                          </span>
                          <span style={{
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            color: "#6B7280",
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}>
                            {notice.date}
                          </span>
                          {notice.pinned && (
                            <span style={{
                              fontSize: "0.65rem",
                              fontWeight: 800,
                              color: "#ffffff",
                              background: "#EF4444",
                              padding: "2px 6px",
                              borderRadius: "4px",
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              letterSpacing: "0.03em",
                            }}>
                              NEW
                            </span>
                          )}
                        </div>
                        <h4 style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.98rem",
                          color: "#1F2937",
                          lineHeight: 1.4,
                          margin: 0,
                        }}>
                          {notice.title}
                        </h4>
                      </div>

                      {/* Arrow indicator */}
                      <div style={{
                        color: "#CBCBCB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginLeft: "8px",
                      }}>
                        <ArrowRight size={18} strokeWidth={1.5} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* View All Button */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "36px",
            }}>
              <motion.button
                onClick={() => setViewAllOpen(true)}
                whileHover={{ y: -3, scale: 1.02, boxShadow: "0 10px 24px rgba(67, 69, 158, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#43459E",
                  color: "#ffffff",
                  padding: "14px 36px",
                  borderRadius: "9999px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                className="view-all-notices-btn"
              >
                View All Notices
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Notice Popup */}
      <AnimatePresence>
        {popup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopup(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 1000,
              background: "rgba(0,0,0,0.65)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                width: "min(520px, 95vw)",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.2)",
                borderTop: `5px solid ${popup.color}`,
              }}
            >
              <div style={{ padding: "24px 28px 28px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: "14px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {popup.pinned && <span style={{ padding: "3px 10px", background: "rgba(13,15,26,0.08)", borderRadius: "9999px", fontSize: "0.7rem", fontWeight: 700, color: "#0D0F1A", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>📌 PINNED</span>}
                    <span style={{ padding: "3px 10px", background: `${popup.color}12`, color: popup.color, borderRadius: "9999px", fontSize: "0.7rem", fontWeight: 700, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{popup.category}</span>
                    <span style={{ fontSize: "0.73rem", color: "#9CA3AF", fontFamily: "'Plus Jakarta Sans',sans-serif", alignSelf: "center" }}>{popup.date}</span>
                  </div>
                  <button onClick={() => setPopup(null)} style={{ width: 30, height: 30, borderRadius: "50%", background: "#F3F4F6", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                    <X size={13} color="#6B7280" />
                  </button>
                </div>
                <h3 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1.1rem", color: "#1F2937", marginBottom: "14px", lineHeight: 1.4 }}>{popup.title}</h3>
                <div className="light-card" style={{ borderRadius: "12px", padding: "16px 18px", borderLeft: `4px solid ${popup.color}` }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.9rem", color: "#374151", lineHeight: 1.85 }}>{popup.full}</p>
                </div>
                <div style={{ marginTop: "18px", display: "flex", justifyContent: "flex-end" }}>
                  <button onClick={() => setPopup(null)} className="btn-primary" style={{ color: "#ffffff", padding: "10px 24px", fontSize: "0.85rem" }}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Notices (Line-by-Line List) Modal */}
      <AnimatePresence>
        {viewAllOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setViewAllOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 1200,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: "24px",
                width: "min(680px, 95vw)",
                maxHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              {/* Modal Header */}
              <div style={{
                padding: "20px 28px",
                background: "#43459E",
                color: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <h3 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem" }}>
                  All Official Bulletins
                </h3>
                <button
                  onClick={() => setViewAllOpen(false)}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "none",
                    color: "#ffffff",
                    width: 32, height: 32,
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {/* List of Notices (line by line) */}
              <div style={{ padding: "24px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
                {filtered.map((notice) => {
                  let catColor = "#43459E";
                  let catBg = "rgba(67, 69, 158, 0.08)";
                  if (notice.category === "Holiday") {
                    catColor = "#EA580C";
                    catBg = "rgba(234, 88, 12, 0.08)";
                  } else if (notice.category === "Exam") {
                    catColor = "#DC2626";
                    catBg = "rgba(220, 38, 38, 0.08)";
                  } else if (notice.category === "General") {
                    catColor = "#0D9488";
                    catBg = "rgba(13, 148, 136, 0.08)";
                  }

                  return (
                    <div
                      key={notice.id}
                      onClick={() => {
                        setPopup(notice);
                      }}
                      style={{
                        padding: "16px 20px",
                        background: "#F9FAFB",
                        borderRadius: "14px",
                        border: "1px solid rgba(0,0,0,0.05)",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      className="view-all-notice-row"
                    >
                      <div style={{ color: "#EF4444", flexShrink: 0 }}>
                        <Pin size={16} fill="#EF4444" color="#EF4444" />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
                          <span style={{ fontSize: "0.62rem", fontWeight: 800, color: catColor, background: catBg, padding: "1px 6px", borderRadius: "4px" }}>
                            {notice.category}
                          </span>
                          <span style={{ fontSize: "0.72rem", color: "#6B7280" }}>
                            {notice.date}
                          </span>
                        </div>
                        <h4 style={{ margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#1F2937" }}>
                          {notice.title}
                        </h4>
                      </div>
                      <ArrowRight size={16} color="#6B7280" />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) { .notice-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 480px) {
          .notice-board-title { font-size: 0.8rem !important; }
        }
      `}</style>
    </section>
  );
}
