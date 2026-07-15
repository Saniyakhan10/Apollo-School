"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator, Microscope, TrendingUp, CheckCircle, X, Send,
  Rocket, Stethoscope, Briefcase, GraduationCap, BarChart2, Award,
  BookOpen, FlaskConical, ArrowRight, ChevronRight, Sparkles, Globe,
  Compass, Palette, Smile
} from "lucide-react";

/* ── Decorative components matching the Hero Section theme ── */
function FloatingDoodle({ icon: Icon, top, left, right, bottom, delay, duration, size, color }: {
  icon: React.ElementType;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],
        rotate: [0, 15, -15, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        color,
        opacity: 0.16,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Icon size={size} />
    </motion.div>
  );
}

function HandDrawnStar({ size, top, left, right, bottom, color, delay }: {
  size: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  color: string;
  delay: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      animate={{
        opacity: [0.2, 0.6, 0.2],
        scale: [0.9, 1.1, 0.9],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <path
        d="M12,2 L14.8,8.2 L21.5,8.8 L16.4,13.2 L17.9,19.8 L12,16.3 L6.1,19.8 L7.6,13.2 L2.5,8.8 L9.2,8.2 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </motion.svg>
  );
}

function HandDrawnSparkle({ size, top, left, right, bottom, color, delay }: {
  size: number;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  color: string;
  delay: number;
}) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      animate={{
        opacity: [0.25, 0.7, 0.25],
        scale: [0.95, 1.15, 0.95],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <path
        d="M12,3 Q12,12 21,12 Q12,12 12,21 Q12,12 3,12 Q12,12 12,3 Z"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.45"
      />
    </motion.svg>
  );
}

/* ────────────────────────────────────────────────────────── */
/*  STREAM DATA                                               */
/* ────────────────────────────────────────────────────────── */
const streams = [
  {
    id: "maths",
    label: "Mathematics",
    short: "PCM",
    tagline: "Engineer Tomorrow",
    icon: Calculator,
    accentColor: "#43459E",
    accentBg: "rgba(67, 69, 158, 0.08)",
    dotColor: "#62C5D2",
    subjects: [
      { name: "Physics", icon: "⚛️", detail: "Mechanics, Optics, Electricity & Modern Physics" },
      { name: "Chemistry", icon: "🧪", detail: "Organic, Inorganic & Physical Chemistry" },
      { name: "Mathematics", icon: "➗", detail: "Calculus, Algebra, Trigonometry & Statistics" },
      { name: "English", icon: "📚", detail: "Literature, Writing & Communication Skills" },
      { name: "Optional", icon: "💻", detail: "Computer Science / Physical Education / Economics" },
    ],
    careers: [
      { title: "Engineering (B.Tech)", icon: Rocket, desc: "IIT, NIT — Civil, CS, Mechanical, ECE & more" },
      { title: "Architecture", icon: BookOpen, desc: "B.Arch — Design buildings and urban spaces" },
      { title: "Data Science & AI", icon: BarChart2, desc: "Machine Learning, Analytics & Future Tech" },
      { title: "Defence Services", icon: Award, desc: "NDA, CDS — Army, Navy, Air Force Officer roles" },
    ],
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT-CET", "VITEEE"],
    stat1: "5,000+ Colleges",
    stat2: "₹6–30 LPA",
    quote: "Mathematics is the language in which the universe is written.",
  },
  {
    id: "bio",
    label: "Biology",
    short: "PCB",
    tagline: "Heal the World",
    icon: Microscope,
    accentColor: "#62C5D2",
    accentBg: "rgba(98, 197, 210, 0.08)",
    dotColor: "#43459E",
    subjects: [
      { name: "Physics", icon: "⚛️", detail: "Mechanics, Optics, Electricity & Magnetism" },
      { name: "Chemistry", icon: "🧪", detail: "Organic, Inorganic & Biochemistry" },
      { name: "Biology", icon: "🌿", detail: "Botany, Zoology, Genetics & Human Physiology" },
      { name: "English", icon: "📚", detail: "Communication Skills & Scientific Writing" },
      { name: "Optional", icon: "🧬", detail: "Biotechnology / Psychology / Physical Education" },
    ],
    careers: [
      { title: "Medicine (MBBS)", icon: Stethoscope, desc: "AIIMS, Government & Private Medical Colleges" },
      { title: "Pharmacy (B.Pharm)", icon: FlaskConical, desc: "Drug design, clinical research & healthcare" },
      { title: "Biotechnology", icon: Microscope, desc: "Genetic engineering, research & biopharma" },
      { title: "Nursing & Allied Health", icon: GraduationCap, desc: "BPT, BSc Nursing, MLT & Paramedical Sciences" },
    ],
    exams: ["NEET-UG", "AIIMS MBBS", "JIPMER", "BHU-UET", "CUET"],
    stat1: "600+ Medical Colleges",
    stat2: "₹8–40 LPA",
    quote: "The best way to find yourself is to lose yourself in the service of others.",
  },
  {
    id: "commerce",
    label: "Commerce",
    short: "BAF",
    tagline: "Lead Business",
    icon: TrendingUp,
    accentColor: "#43459E",
    accentBg: "rgba(67, 69, 158, 0.08)",
    dotColor: "#62C5D2",
    subjects: [
      { name: "Accountancy", icon: "📒", detail: "Financial Statements, Ratio Analysis & Cash Flow" },
      { name: "Business Studies", icon: "🏢", detail: "Management, Marketing & Entrepreneurship" },
      { name: "Economics", icon: "📈", detail: "Micro & Macro Economics, Indian Economy" },
      { name: "English", icon: "📚", detail: "Business Communication & Language Proficiency" },
      { name: "Optional", icon: "🖥️", detail: "Mathematics / IP / Physical Education / Psychology" },
    ],
    careers: [
      { title: "CA / CMA / CS", icon: Briefcase, desc: "Chartered Accountant, Cost Accountant & Secretary" },
      { title: "MBA & Management", icon: TrendingUp, desc: "IIM, Top B-Schools — Marketing, Finance & HR" },
      { title: "Banking & Finance", icon: BarChart2, desc: "Banking, Insurance & Financial Planning careers" },
      { title: "Law (LLB / BBA-LLB)", icon: BookOpen, desc: "Corporate law, Tax law & Legal consultancy" },
    ],
    exams: ["CA Foundation", "CUET", "DU B.Com", "BBA Entrances", "SET / IPMAT"],
    stat1: "3,000+ Colleges",
    stat2: "₹5–25 LPA",
    quote: "Success in business requires training, discipline and hard work.",
  },
];

const initialForm = {
  name: "", phone: "", email: "", percentage: "", stream: "", currentSchool: "", message: ""
};

/* ────────────────────────────────────────────────────────── */
/*  MAIN PAGE                                                 */
/* ────────────────────────────────────────────────────────── */
export default function StreamsPage() {
  const [detailStream, setDetailStream] = useState<string | null>(null);
  const [detailTab, setDetailTab] = useState<"subjects" | "careers">("subjects");
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const openDetail = (id: string) => {
    setDetailStream(id);
    setDetailTab("subjects");
  };
  const closeDetail = () => setDetailStream(null);

  const selectedStream = streams.find(s => s.id === detailStream);

  const getValidationError = () => {
    if (!form.percentage) return null;
    const pct = parseFloat(form.percentage.replace(/[^0-9.]/g, ''));
    if (isNaN(pct)) return "Please enter a valid percentage number.";
    if (pct < 36) return "Admission is not open for Class 10 percentages below 36%.";
    
    if (form.stream === "maths" && pct < 60) {
      return "Mathematics (PCM) requires a minimum of 60% in Class 10.";
    }
    if (form.stream === "bio" && pct < 55) {
      return "Biology (PCB) requires a minimum of 55% in Class 10.";
    }
    if (form.stream === "commerce" && pct < 45) {
      return "Commerce requires a minimum of 45% in Class 10.";
    }
    return null;
  };

  const validationError = getValidationError();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validationError) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormOpen(false); setForm(initialForm); }, 3000);
  };

  return (
    <main style={{ background: "#ffffff", overflowX: "hidden" }}>
      <Navbar onAdmissionClick={() => setFormOpen(true)} />

      {/* Page entrance animations wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* ══════════════════════════════════════════════════════════
            HERO — full-screen split
        ══════════════════════════════════════════════════════════ */}
      <section style={{
        paddingTop: "90px",
        background: "#ffffff",
        borderBottom: "1px solid #F0F0F0",
        overflow: "hidden",
        position: "relative",
        minHeight: "calc(100vh - 0px)",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Dot grid decor */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "3%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            opacity: 0.2,
            pointerEvents: "none",
          }}
        >
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              style={{ width: 8, height: 8, borderRadius: "50%", background: "#62C5D2" }}
            />
          ))}
        </div>

        {/* Floating Doodle Watermarks */}
        <FloatingDoodle icon={BookOpen} top="15%" left="8%" size={34} color="#43459E" delay={0} duration={6} />
        <FloatingDoodle icon={GraduationCap} top="75%" left="5%" size={38} color="#62C5D2" delay={1.5} duration={7} />
        <FloatingDoodle icon={Calculator} top="22%" left="42%" size={30} color="#43459E" delay={0.5} duration={5.5} />
        <FloatingDoodle icon={Sparkles} top="52%" left="2%" size={26} color="#62C5D2" delay={2} duration={5} />
        
        <FloatingDoodle icon={Globe} top="12%" left="86%" size={40} color="#43459E" delay={1} duration={6.5} />
        <FloatingDoodle icon={Compass} top="58%" left="92%" size={36} color="#62C5D2" delay={2.5} duration={8} />
        <FloatingDoodle icon={Palette} top="82%" left="84%" size={34} color="#43459E" delay={0.8} duration={6} />
        <FloatingDoodle icon={Smile} top="32%" left="78%" size={30} color="#62C5D2" delay={1.8} duration={7} />
        {/* Right image — absolute, fills right 50% full height with padding */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            position: "absolute",
            top: 0, right: 0,
            width: "50%",
            height: "100%",
            pointerEvents: "none",
            paddingRight: "clamp(24px, 4vw, 80px)",
            paddingTop: "40px",
            paddingBottom: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
          className="hero-right-img"
        >
          <div style={{ position: "relative", width: "100%", height: "100%", background: "#ffffff" }}>
            {/* Hand drawn stars and sparkles floating around image */}
            <HandDrawnStar size={26} top="8%" right="18%" color="#43459E" delay={0} />
            <HandDrawnStar size={34} top="28%" right="5%" color="#62C5D2" delay={1} />
            <HandDrawnSparkle size={24} top="48%" right="12%" color="#43459E" delay={1.8} />
            <HandDrawnSparkle size={30} top="20%" left="8%" color="#62C5D2" delay={0.6} />
            <HandDrawnStar size={28} bottom="15%" left="15%" color="#43459E" delay={2.2} />

            <Image
              src="https://t3.ftcdn.net/jpg/09/28/53/10/360_F_928531048_45ay4GSNYJuTLIHKtuR255O9ndjsHg5x.jpg"
              alt="Students choosing streams"
              fill
              unoptimized
              style={{
                objectFit: "contain",
                objectPosition: "right center",
                mixBlendMode: "multiply",
                filter: "contrast(1.08) brightness(1.04)",
              }}
            />
          </div>
        </motion.div>

        {/* Left side — text content, takes only left 50% */}
        <div style={{
          width: "50%",
          paddingLeft: "clamp(24px, 4vw, 80px)",
          paddingRight: "40px",
          paddingTop: 80,
          paddingBottom: 60,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
          position: "relative",
          zIndex: 1,
        }} className="hero-left">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">✦ Career Pathway · 2025–26</span>
            <h1 style={{
              fontFamily: "'Merriweather', Georgia, serif",
              fontSize: "clamp(2rem, 3.2vw, 3.2rem)",
              fontWeight: 900,
              color: "#111827",
              lineHeight: 1.2,
              marginTop: 16,
              marginBottom: 18,
              letterSpacing: "-0.5px",
            }}>
              Choose Your Stream.<br />
              <span style={{ color: "#43459E" }}>Shape Your Future.</span>
            </h1>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1rem",
              color: "#6B7280",
              lineHeight: 1.8,
              maxWidth: 440,
              marginBottom: 36,
            }}>
              Apollo Convent offers three streams in Career Pathway — Mathematics, Biology and Commerce.
              Explore each stream, understand subjects and career options, then register your preference.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() => setFormOpen(true)}
                className="btn-primary"
                style={{ color: "#fff" }}
              >
                Register Preference <ArrowRight size={16} />
              </button>
              <a href="#streams" className="btn-secondary" style={{ textDecoration: "none" }}>
                Explore Streams
              </a>
            </div>
          </motion.div>
        </div>

        <style>{`
          @media(max-width:768px){
            .hero-left { width: 100% !important; padding-right: 24px !important; }
            .hero-right-img { display: none !important; }
          }
        `}</style>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STREAM CARDS
      ══════════════════════════════════════════════════════════ */}
      <section id="streams" style={{ background: "#ffffff", padding: "88px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">✦ Explore Your Stream</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Which Stream Is <span>Right for You?</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "0.95rem", color: "#9CA3AF",
              marginTop: 10, lineHeight: 1.7,
            }}>
              Click any card to explore subjects, careers and entrance exams in detail.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="stream-grid">
            {streams.map((stream, i) => {
              const Icon = stream.icon;
              return (
                <motion.div
                  key={stream.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  style={{
                    background: "#ffffff", // Pure white
                    border: "2px solid #43459E", // Dark blue border
                    borderRadius: 24,
                    padding: "36px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(67, 69, 158, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)",
                    cursor: "default",
                    transition: "all 0.35s ease",
                  }}
                >
                  {/* Vertical dashed line connecting the nodes */}
                  <div style={{
                    position: "absolute",
                    top: "56px",
                    bottom: "106px",
                    left: "49px", // 28px card padding + 21px (half of 42px node width)
                    width: "2px",
                    borderLeft: "2px dashed rgba(67, 69, 158, 0.35)",
                    zIndex: 0,
                    pointerEvents: "none",
                  }} />

                  {/* Watermark number — premium serif */}
                  <div style={{
                    position: "absolute", bottom: -12, right: 16,
                    fontFamily: "'Merriweather', serif",
                    fontSize: "7rem", fontWeight: 900,
                    color: "rgba(67, 69, 158, 0.05)",
                    lineHeight: 1, userSelect: "none", pointerEvents: "none",
                    letterSpacing: "-4px",
                  }}>0{i + 1}</div>

                  {/* Roadmap Flow */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "28px", flexGrow: 1, zIndex: 1 }}>
                    
                    {/* STEP 1: Stream Header */}
                    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                      {/* Node Icon */}
                      <div style={{
                        width: 42, height: 42, borderRadius: "50%",
                        background: "#43459E",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 0 0 4px #ffffff, 0 4px 10px rgba(67, 69, 158, 0.2)",
                        zIndex: 2, flexShrink: 0,
                      }}>
                        <Icon size={20} color="#ffffff" strokeWidth={1.8} />
                      </div>
                      {/* Content */}
                      <div>
                        <div style={{
                          fontFamily: "'Merriweather', serif",
                          fontWeight: 900, fontSize: "1.25rem",
                          color: "#111827", lineHeight: 1.2,
                        }}>{stream.label}</div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.72rem", fontWeight: 800,
                          color: "#43459E", letterSpacing: "0.08em",
                          textTransform: "uppercase", marginTop: 3,
                        }}>{stream.short} · {stream.tagline}</div>
                      </div>
                    </div>

                    {/* STEP 2: Curriculum / Subjects */}
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      {/* Middle Node Circle */}
                      <div style={{
                        width: 42, height: 28,
                        display: "flex", justifyContent: "center", alignItems: "center",
                        zIndex: 2, flexShrink: 0,
                      }}>
                        <div style={{
                          width: 14, height: 14, borderRadius: "50%",
                          background: "#ffffff",
                          border: "3px solid #43459E",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                        }} />
                      </div>
                      {/* Content */}
                      <div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.7rem", fontWeight: 700,
                          color: "#9CA3AF", letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}>Step 1: Class XI & XII</div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800, fontSize: "0.88rem", color: "#111827", marginTop: 2,
                        }}>Core Curriculum</div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.78rem", color: "#4B5563", lineHeight: 1.5, marginTop: 4,
                        }}>
                          {stream.subjects.slice(0, 3).map(s => s.name).join(", ")} & Electives
                        </div>
                      </div>
                    </div>

                    {/* STEP 3: Career Peak / Exams */}
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      {/* Final Destination Node */}
                      <div style={{
                        width: 42, height: 28,
                        display: "flex", justifyContent: "center", alignItems: "center",
                        zIndex: 2, flexShrink: 0,
                      }}>
                        <div style={{
                          width: 14, height: 14, borderRadius: "50%",
                          background: "#43459E",
                          border: "3px solid #ffffff",
                          boxShadow: "0 0 0 3px rgba(67, 69, 158, 0.2)",
                        }} />
                      </div>
                      {/* Content */}
                      <div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.7rem", fontWeight: 700,
                          color: "#9CA3AF", letterSpacing: "0.05em",
                          textTransform: "uppercase",
                        }}>Step 2: Gateways & Career</div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800, fontSize: "0.88rem", color: "#111827", marginTop: 2,
                        }}>Future Opportunities</div>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.78rem", color: "#4B5563", lineHeight: 1.5, marginTop: 4,
                        }}>
                          Prepare for <strong>{stream.exams.slice(0, 2).join(", ")}</strong> targeting careers like <strong>{stream.careers[0].title}</strong>.
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Explore Button */}
                  <div style={{ marginTop: 24, zIndex: 1 }}>
                    <button
                      onClick={() => openDetail(stream.id)}
                      style={{
                        width: "100%", padding: "12px 16px",
                        borderRadius: 10,
                        background: "#43459E",
                        border: "none",
                        color: "#ffffff",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800, fontSize: "0.83rem",
                        cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                        transition: "all 0.25s ease",
                        letterSpacing: "0.02em",
                        boxShadow: "0 4px 12px rgba(67,69,158,0.2)",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "#62C5D2";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(67,69,158,0.3)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "#43459E";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(67,69,158,0.2)";
                      }}
                    >
                      View Pathway Details
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.stream-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:640px){.stream-grid{grid-template-columns:1fr !important;}}`}</style>
      </section>


      {/* ══════════════════════════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: "#ffffff", padding: "96px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-tag">✦ Quick Compare</span>
            <h2 className="section-title" style={{ marginTop: 10 }}>
              Stream <span>Comparison</span>
            </h2>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%", borderCollapse: "collapse",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }} className="compare-table">
              <thead>
                <tr style={{ background: "#43459E" }}>
                  <th style={{
                    padding: "16px 24px", textAlign: "left",
                    fontWeight: 700, fontSize: "0.78rem", color: "rgba(255,255,255,0.85)",
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    borderRadius: "12px 0 0 0",
                  }}>Parameter</th>
                  {streams.map((s, i) => (
                    <th key={s.id} style={{
                      padding: "16px 24px", textAlign: "center",
                      fontFamily: "'Merriweather',serif", fontWeight: 900,
                      fontSize: "0.92rem", color: "#ffffff",
                      borderRadius: i === streams.length - 1 ? "0 12px 0 0" : undefined,
                    }}>
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Core Focus", vals: ["Engineering & Tech", "Medical & Life Sciences", "Business & Finance"] },
                  { label: "Mathematics", vals: ["Advanced (PCM)", "Basic (PCB)", "Optional"] },
                  { label: "Lab Work", vals: ["Physics + Chemistry", "Bio + Chemistry", "Minimal"] },
                  { label: "Top Entrance", vals: ["JEE / BITSAT", "NEET / AIIMS", "CA / CUET / BBA"] },
                  { label: "Career Avg.", vals: ["₹6–30 LPA", "₹8–40 LPA", "₹5–25 LPA"] },
                  { label: "Best If You Love", vals: ["Maths & Logic", "Biology & Helping Others", "Numbers & Business"] },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{
                      padding: "15px 24px",
                      background: i % 2 === 0 ? "#FAFAFA" : "#ffffff",
                      fontWeight: 700, fontSize: "0.85rem", color: "#374151",
                      borderRight: "1px solid #F0F0F0",
                      borderBottom: "1px solid #F0F0F0",
                    }}>{row.label}</td>
                    {row.vals.map((val, j) => (
                      <td key={j} style={{
                        padding: "15px 24px", textAlign: "center",
                        background: i % 2 === 0 ? "#FAFAFA" : "#ffffff",
                        fontSize: "0.85rem", color: "#4B5563",
                        borderRight: j < 2 ? "1px solid #F0F0F0" : "none",
                        borderBottom: "1px solid #F0F0F0",
                      }}>{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA BAND — soft light
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: "#F0F4FF",
        padding: "88px 0",
        borderTop: "1px solid #E0E7FF",
        borderBottom: "1px solid #E0E7FF",
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 9999,
              background: "rgba(67,69,158,0.08)",
              border: "1px solid rgba(67,69,158,0.15)",
              color: "#43459E",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "0.74rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: 20,
            }}>
              Limited Seats · Session 2025–26
            </span>
            <h2 style={{
              fontFamily: "'Merriweather',serif", fontWeight: 900,
              fontSize: "clamp(1.7rem, 3vw, 2.5rem)", color: "#111827",
              lineHeight: 1.25, marginBottom: 14,
            }}>
              Ready to Register Your<br />
              <span style={{ color: "#43459E" }}>Stream Preference?</span>
            </h2>
            <p style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.97rem",
              color: "#6B7280", lineHeight: 1.8,
              maxWidth: 480, margin: "0 auto 36px",
            }}>
              Fill the form and our counsellors will guide you to the best stream for your goals and strengths.
            </p>
            <button
              onClick={() => setFormOpen(true)}
              className="btn-primary"
              style={{ color: "#fff" }}
            >
              <GraduationCap size={18} />
              Register Stream Preference
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ══════════════════════════════════════════════════════════
          DETAIL MODAL — stream detail popup
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {detailStream && selectedStream && (
          <motion.div
            key="detail-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDetail}
            style={{
              position: "fixed", inset: 0, zIndex: 1500,
              background: "rgba(17,24,39,0.45)",
              backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "24px",
            }}
          >
            <motion.div
              key="detail-panel"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                width: "min(800px, 96vw)",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
              }}
            >
              {/* Modal header */}
              <div style={{
                padding: "28px 32px",
                borderBottom: "1px solid #F0F0F0",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                position: "sticky", top: 0, background: "#ffffff",
                borderRadius: "24px 24px 0 0",
                zIndex: 10,
              }}>
                <div>
                  <div style={{
                    fontFamily: "'Merriweather',serif", fontWeight: 900,
                    fontSize: "1.25rem", color: "#111827",
                  }}>{selectedStream.label}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "0.78rem", color: "#9CA3AF", marginTop: 3,
                  }}>{selectedStream.short} · {selectedStream.tagline}</div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <button
                    onClick={() => { setForm(f => ({ ...f, stream: selectedStream.id })); closeDetail(); setFormOpen(true); }}
                    style={{
                      padding: "10px 22px", borderRadius: 9999,
                      background: "#43459E", color: "#ffffff",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700, fontSize: "0.82rem",
                      border: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 7,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#62C5D2";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "#43459E";
                    }}
                  >
                    <GraduationCap size={15} /> Register
                  </button>
                  <button
                    onClick={closeDetail}
                    style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "#F4F4F6", border: "none",
                      cursor: "pointer", color: "#6B7280",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div style={{
                display: "flex", gap: 0,
                borderBottom: "1px solid #F0F0F0",
                padding: "0 32px",
              }}>
                {(["subjects", "careers"] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setDetailTab(tab)}
                    style={{
                      padding: "14px 20px",
                      background: "transparent",
                      border: "none",
                      borderBottom: detailTab === tab ? "2px solid #111827" : "2px solid transparent",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700, fontSize: "0.88rem",
                      color: detailTab === tab ? "#111827" : "#9CA3AF",
                      cursor: "pointer",
                      marginBottom: -1,
                      transition: "color 0.2s",
                    }}
                  >
                    {tab === "subjects" ? "Subjects" : "Career Options"}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div style={{ padding: "32px" }}>
                <AnimatePresence mode="wait">

                  {/* SUBJECTS */}
                  {detailTab === "subjects" && (
                    <motion.div
                      key="subjects"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        {selectedStream.subjects.map((sub, i) => (
                          <motion.div
                            key={sub.name}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            style={{
                              display: "flex", alignItems: "flex-start", gap: 16,
                              padding: "18px 20px", borderRadius: 12,
                              border: "1px solid #F0F0F0",
                              background: "#FAFAFA",
                            }}
                          >
                            <span style={{ fontSize: "1.4rem", flexShrink: 0, lineHeight: 1 }}>{sub.icon}</span>
                            <div>
                              <div style={{
                                fontFamily: "'Plus Jakarta Sans',sans-serif",
                                fontWeight: 700, fontSize: "0.95rem", color: "#111827", marginBottom: 4,
                              }}>{sub.name}</div>
                              <div style={{
                                fontFamily: "'Plus Jakarta Sans',sans-serif",
                                fontSize: "0.83rem", color: "#6B7280", lineHeight: 1.6,
                              }}>{sub.detail}</div>
                            </div>
                            <CheckCircle size={16} color="#D1D5DB" style={{ flexShrink: 0, marginTop: 2, marginLeft: "auto" }} />
                          </motion.div>
                        ))}
                      </div>

                      {/* Entrance exams */}
                      <div style={{
                        marginTop: 24, padding: "20px 24px",
                        borderRadius: 12, border: "1px solid #F0F0F0",
                        background: "#ffffff",
                      }}>
                        <div style={{
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontWeight: 700, fontSize: "0.82rem", color: "#374151",
                          textTransform: "uppercase", letterSpacing: "0.07em",
                          marginBottom: 14,
                        }}>Key Entrance Exams</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                          {selectedStream.exams.map(exam => (
                            <span key={exam} style={{
                              padding: "5px 14px", borderRadius: 9999,
                              background: "#F4F4F6",
                              color: "#374151",
                              fontFamily: "'Plus Jakarta Sans',sans-serif",
                              fontWeight: 600, fontSize: "0.8rem",
                              border: "1px solid #E5E7EB",
                            }}>{exam}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* CAREERS */}
                  {detailTab === "careers" && (
                    <motion.div
                      key="careers"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="career-modal-grid">
                        {selectedStream.careers.map((career, i) => {
                          const CIcon = career.icon;
                          return (
                            <motion.div
                              key={career.title}
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.08 }}
                              style={{
                                padding: "24px 22px", borderRadius: 14,
                                border: "1px solid #F0F0F0",
                                background: "#FAFAFA",
                                display: "flex", flexDirection: "column", gap: 12,
                              }}
                            >
                              <div style={{
                                width: 44, height: 44, borderRadius: 12,
                                background: "#F4F4F6",
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}>
                                <CIcon size={20} color="#43459E" strokeWidth={1.8} />
                              </div>
                              <div style={{
                                fontFamily: "'Plus Jakarta Sans',sans-serif",
                                fontWeight: 700, fontSize: "0.95rem", color: "#111827",
                              }}>{career.title}</div>
                              <div style={{
                                fontFamily: "'Plus Jakarta Sans',sans-serif",
                                fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.65,
                              }}>{career.desc}</div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Quote */}
                      <div style={{
                        marginTop: 24, padding: "22px 28px",
                        borderRadius: 12,
                        border: "1px solid #F0F0F0",
                        background: "#FAFAFA",
                      }}>
                        <p style={{
                          fontFamily: "'Merriweather',Georgia,serif",
                          fontSize: "0.92rem", color: "#6B7280",
                          fontStyle: "italic", lineHeight: 1.75,
                          margin: 0,
                        }}>"{selectedStream.quote}"</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════════
          REGISTRATION FORM MODAL
      ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            key="form-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFormOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 2000,
              background: "rgba(17,24,39,0.45)",
              backdropFilter: "blur(6px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
            }}
          >
            <motion.div
              key="form-panel"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: 24,
                width: "min(560px, 96vw)",
                maxHeight: "92vh", overflowY: "auto",
                boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
              }}
            >
              {/* Form header */}
              <div style={{
                padding: "28px 32px 24px",
                borderBottom: "1px solid #F0F0F0",
                display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              }}>
                <div>
                  <span style={{
                    display: "inline-block", marginBottom: 8,
                    padding: "4px 12px", borderRadius: 9999,
                    background: "#F4F4F6",
                    color: "#9CA3AF",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "0.7rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>Career Pathway · 2025–26</span>
                  <div style={{
                    fontFamily: "'Merriweather',serif", fontWeight: 900,
                    fontSize: "1.2rem", color: "#111827",
                  }}>Stream Registration Form</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "0.82rem", color: "#9CA3AF", marginTop: 4,
                  }}>Our counsellors will connect with you within 24 hrs.</div>
                </div>
                <button
                  onClick={() => setFormOpen(false)}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "#F4F4F6", border: "none",
                    cursor: "pointer", color: "#6B7280",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: "60px 32px", textAlign: "center" }}
                >
                  <div style={{ fontSize: "2.8rem", marginBottom: 14 }}>🎉</div>
                  <div style={{
                    fontFamily: "'Merriweather',serif", fontWeight: 900,
                    fontSize: "1.25rem", color: "#111827", marginBottom: 8,
                  }}>Registration Received!</div>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    color: "#6B7280", fontSize: "0.88rem", lineHeight: 1.7,
                  }}>
                    Thank you! Our team will contact you within 24 hours to guide your stream selection.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ padding: "28px 32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }} className="form-2col">
                    {[
                      { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                      { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                      { key: "email", label: "Email Address", type: "email", placeholder: "you@gmail.com" },
                      { key: "percentage", label: "Class 10 %", type: "text", placeholder: "e.g. 87%" },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={{
                          display: "block",
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: "0.77rem", fontWeight: 700, color: "#374151", marginBottom: 6,
                        }}>{f.label}</label>
                        <input
                          type={f.type}
                          required
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                          style={{
                            width: "100%", padding: "10px 14px", borderRadius: 10,
                            border: "1.5px solid #E5E7EB",
                            fontFamily: "'Plus Jakarta Sans',sans-serif",
                            fontSize: "0.87rem", color: "#111827",
                            outline: "none", background: "#FAFAFA",
                            transition: "border 0.2s",
                            boxSizing: "border-box",
                          }}
                          onFocus={e => (e.target.style.borderColor = "#43459E")}
                          onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Stream selector */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={{
                      display: "block",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "0.77rem", fontWeight: 700, color: "#374151", marginBottom: 8,
                    }}>Preferred Stream</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                      {streams.map(s => {
                        const SIcon = s.icon;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => setForm(prev => ({ ...prev, stream: s.id }))}
                            style={{
                              padding: "12px 10px", borderRadius: 10, cursor: "pointer",
                              border: `1.5px solid ${form.stream === s.id ? "#111827" : "#E5E7EB"}`,
                              background: form.stream === s.id ? "#111827" : "#FAFAFA",
                              fontFamily: "'Plus Jakarta Sans',sans-serif",
                              fontWeight: 700, fontSize: "0.78rem",
                              color: form.stream === s.id ? "#ffffff" : "#6B7280",
                              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                              transition: "all 0.2s ease",
                            }}
                          >
                            <SIcon size={18} strokeWidth={1.8} />
                            {s.label}
                          </button>
                        );
                      })}
                    </div>
                    {/* Eligibility notice */}
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "0.75rem", color: "#6B7280",
                      marginTop: 8, lineHeight: 1.4,
                      background: "#F9FAFB", padding: "8px 12px", borderRadius: 8,
                      border: "1px solid #E5E7EB",
                    }}>
                      💡 <strong>Eligibility Rules:</strong> PCM requires 60%+, PCB requires 55%+, Commerce requires 45%+. Minimum 36% overall required.
                    </div>
                  </div>

                  {/* Current school */}
                  <div style={{ marginBottom: 14 }}>
                    <label style={{
                      display: "block",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "0.77rem", fontWeight: 700, color: "#374151", marginBottom: 6,
                    }}>Current School</label>
                    <input
                      type="text" placeholder="Name of your current school"
                      value={form.currentSchool}
                      onChange={e => setForm(prev => ({ ...prev, currentSchool: e.target.value }))}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 10,
                        border: "1.5px solid #E5E7EB",
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: "0.87rem", color: "#111827",
                        outline: "none", background: "#FAFAFA",
                        boxSizing: "border-box",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#43459E")}
                      onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <label style={{
                      display: "block",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "0.77rem", fontWeight: 700, color: "#374151", marginBottom: 6,
                    }}>Any Questions / Career Goals?</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your interests or career goals..."
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      style={{
                        width: "100%", padding: "10px 14px", borderRadius: 10,
                        border: "1.5px solid #E5E7EB",
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: "0.87rem", color: "#111827",
                        outline: "none", background: "#FAFAFA",
                        resize: "vertical", boxSizing: "border-box",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#43459E")}
                      onBlur={e => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  </div>

                  {validationError && (
                    <div style={{
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "#FEF2F2",
                      border: "1.5px solid #FCA5A5",
                      color: "#991B1B",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      marginBottom: 16,
                    }}>
                      ⚠️ {validationError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!!validationError}
                    style={{
                      width: "100%", padding: "14px 24px", borderRadius: 9999,
                      background: validationError ? "#9CA3AF" : "#111827",
                      color: "#ffffff",
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700, fontSize: "0.95rem",
                      border: "none", cursor: validationError ? "not-allowed" : "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                      opacity: validationError ? 0.7 : 1,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Send size={16} />
                    Submit Registration
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>

      <style>{`
        *::-webkit-scrollbar { display: none; }
        @media(max-width:640px){ .form-2col { grid-template-columns: 1fr !important; } .career-modal-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) {
          .compare-table th, .compare-table td {
            padding: 8px 10px !important;
            font-size: 0.75rem !important;
          }
          .compare-table th {
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </main>
  );
}
