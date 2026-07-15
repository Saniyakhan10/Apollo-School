"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { GraduationCap, Star, X, Award, Briefcase, Mail } from "lucide-react";

const faculty = [
  {
    name: "Dr. Anita Sharma",
    role: "Principal",
    subject: "School Leadership",
    exp: "28 yrs",
    image: "https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY=",
    gradient: "linear-gradient(135deg, #43459E 0%, #62C5D2 100%)",
    bio: "Dr. Anita Sharma is a visionary educational leader with nearly three decades of administrative experience. She holds a Ph.D. in Education from Delhi University and has dedicated her career to fostering academic innovation and character development.",
    achievements: [
      "Recipient of the National National Best Principal Award 2023",
      "Introduced modern STEM-based learning curriculum in secondary classes",
      "Keynote speaker at national conferences on pedagogical reform"
    ],
    email: "principal@apolloconvent.edu"
  },
  {
    name: "Mr. Ramesh Gupta",
    role: "Senior Teacher",
    subject: "Mathematics",
    exp: "18 yrs",
    image: "https://media.istockphoto.com/id/1330084987/photo/portrait-of-indian-male-teacher-outside-of-library.jpg?s=612x612&w=0&k=20&c=cJ0eA-p6g28IRaBrKPO2fHl6e-htx8eF8tmyVcDiMNk=",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)",
    bio: "Mr. Ramesh Gupta is a passionate Mathematics educator known for demystifying complex mathematical concepts. He has mentored hundreds of students to score a perfect 100 in CBSE board examinations.",
    achievements: [
      "Developed CBSE board preparatory question banks used city-wide",
      "Mentored students who qualified for national Mathematics Olympiads",
      "Spearheads the school's online math portal for self-paced practice"
    ],
    email: "ramesh.gupta@apolloconvent.edu"
  },
  {
    name: "Mrs. Kavitha Nair",
    role: "Science Head",
    subject: "Physics & Chemistry",
    exp: "15 yrs",
    image: "https://www.shutterstock.com/image-photo/photo-indian-woman-teacher-working-260nw-2578731411.jpg",
    gradient: "linear-gradient(135deg, #62C5D2 0%, #43459E 100%)",
    bio: "Mrs. Kavitha Nair believes in hands-on science learning. She oversees the state-of-the-art physics, chemistry, and biology labs at Apollo, ensuring practical lessons parallel theoretical modules.",
    achievements: [
      "Guided the school science team to 1st place in the State Science Fair 2024",
      "Set up the campus eco-club and waste management recycling unit",
      "Organized annual laboratory workshops for middle school students"
    ],
    email: "kavitha.nair@apolloconvent.edu"
  },
  {
    name: "Ms. Pooja Mehta",
    role: "Language Teacher",
    subject: "English & Hindi",
    exp: "12 yrs",
    image: "https://t3.ftcdn.net/jpg/08/34/74/68/360_F_834746847_SsnjLKFJhWxwjzt4kYbc2oBKsVZaur3Q.jpg",
    gradient: "linear-gradient(135deg, #1E1B4B 0%, #43459E 100%)",
    bio: "Ms. Pooja Mehta promotes literary appreciation and linguistic fluency. She coordinates creative writing seminars, debate modules, and theater workshops that boost communication skills.",
    achievements: [
      "Founded the school literary club and the bi-annual student magazine",
      "Coached school team to win the National Inter-School Debate competition",
      "Spearheaded student theater productions of class literature"
    ],
    email: "pooja.mehta@apolloconvent.edu"
  },
  {
    name: "Mr. Suresh Patel",
    role: "Commerce Head",
    subject: "Economics & Accounts",
    exp: "20 yrs",
    image: "https://img.magnific.com/premium-photo/full-body-portrait-photo-happy-indian-school-male-teacher-standing-proudly-plain-background-ar_928503-3952.jpg?semt=ais_hybrid&w=740&q=80",
    gradient: "linear-gradient(135deg, #2563EB 0%, #62C5D2 100%)",
    bio: "Mr. Suresh Patel provides commerce students with foundational business insights. He runs mock stock markets, business planning simulations, and guest-lectures on modern entrepreneurship.",
    achievements: [
      "Mentored students entering top-tier Commerce universities across India",
      "Initiated the annual Business Entrepreneurship Challenge for seniors",
      "Coordinated internships and industrial visits to local enterprises"
    ],
    email: "suresh.patel@apolloconvent.edu"
  },
  {
    name: "Mr. Deepak Joshi",
    role: "Arts Teacher",
    subject: "Visual Arts & Craft",
    exp: "10 yrs",
    image: "https://media.istockphoto.com/id/2160439329/photo/happy-multiethnic-male-teacher-smiling-at-primary-school.jpg?s=612x612&w=0&k=20&c=0-Lem0EucN1GIoZduYU0rPXUZuGuquTgz_nPXuR-210=",
    gradient: "linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)",
    bio: "Mr. Deepak Joshi believes art is a primary form of self-expression. He teaches painting, sculpture, and graphic design, encouraging students to explore diverse creative mediums.",
    achievements: [
      "Curated the annual Apollo School Art Exhibition showcasing 300+ artworks",
      "Facilitated mural paintings on campus walls, designed by students",
      "Conducted community pottery and handicrafts workshops"
    ],
    email: "deepak.joshi@apolloconvent.edu"
  },
];

export default function FacultySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedTeacher, setSelectedTeacher] = useState<typeof faculty[0] | null>(null);

  return (
    <section ref={ref} id="faculty" style={{ background: "#F9FAFB", padding: "80px 0", overflow: "hidden" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span className="section-tag">✦ Meet the Team</span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>Our <span>Faculty</span></h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Dedicated educators who bring passion, expertise and warmth to the classroom every single day.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }} className="faculty-grid">
          {faculty.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelectedTeacher(f)}
              className="light-card faculty-card-hover"
              style={{
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "12px",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {/* Avatar without colorful gradient ring */}
              <div style={{
                position: "relative",
                width: 92,
                height: 92,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #ffffff",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                background: "#E5E7EB",
              }}>
                <Image src={f.image} alt={f.name} fill style={{ objectFit: "cover" }} sizes="92px" quality={95} />
              </div>

              {/* Subject badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                padding: "4px 12px",
                background: "rgba(67,69,158,0.07)",
                borderRadius: "9999px",
              }}>
                <GraduationCap size={11} color="#43459E" />
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#43459E" }}>{f.subject}</span>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "0.95rem", color: "#1F2937", marginBottom: "3px" }}>{f.name}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.8rem", color: "#6B7280", fontWeight: 600 }}>{f.role}</p>
              </div>

              {/* Experience */}
              <div style={{
                display: "flex", alignItems: "center", gap: "5px",
                padding: "5px 12px",
                background: "#F9FAFB", borderRadius: "10px",
                border: "1px solid #E5E7EB",
              }}>
                <Star size={12} color="#F8E71C" fill="#F8E71C" />
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#374151" }}>{f.exp} Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Teacher Detail Popup Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              backdropFilter: "blur(4px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#ffffff",
                borderRadius: "28px",
                width: "min(640px, 95vw)",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
                border: "1px solid #E5E7EB",
                position: "relative",
              }}
            >
              {/* Top Banner accent color */}
              <div style={{ height: "10px", background: selectedTeacher.gradient }} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedTeacher(null)}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#F3F4F6",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#4B5563",
                  transition: "all 0.2s ease",
                  zIndex: 10,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#E5E7EB";
                  e.currentTarget.style.color = "#1F2937";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F3F4F6";
                  e.currentTarget.style.color = "#4B5563";
                }}
              >
                <X size={16} />
              </button>

              <div style={{ padding: "36px 36px 40px" }}>
                {/* Profile Header */}
                <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBottom: "28px" }} className="faculty-popup-header">
                  <div style={{
                    position: "relative",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid #ffffff",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                    flexShrink: 0,
                    background: "#E5E7EB"
                  }}>
                    <Image src={selectedTeacher.image} alt={selectedTeacher.name} fill style={{ objectFit: "cover" }} sizes="110px" quality={95} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Merriweather', Georgia, serif",
                      fontWeight: 900,
                      fontSize: "1.35rem",
                      color: "#1F2937",
                      marginBottom: "6px"
                    }}>{selectedTeacher.name}</h3>
                    <p style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "#43459E",
                      fontWeight: 700,
                      marginBottom: "8px"
                    }}>{selectedTeacher.role} — {selectedTeacher.subject}</p>

                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#374151",
                        background: "#F3F4F6",
                        padding: "4px 10px",
                        borderRadius: "8px"
                      }}>
                        <Star size={11} color="#F8E71C" fill="#F8E71C" /> {selectedTeacher.exp} Exp
                      </span>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#374151",
                        background: "#F3F4F6",
                        padding: "4px 10px",
                        borderRadius: "8px"
                      }}>
                        <Mail size={11} color="#6B7280" /> {selectedTeacher.email}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div style={{ marginBottom: "28px" }}>
                  <h4 style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    color: "#1F2937",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <Briefcase size={16} color="#43459E" /> Biography
                  </h4>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.88rem",
                    color: "#4B5563",
                    lineHeight: 1.8,
                    background: "#F9FAFB",
                    padding: "16px 20px",
                    borderRadius: "14px",
                    border: "1px solid #F0F0F0",
                  }}>{selectedTeacher.bio}</p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    color: "#1F2937",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}>
                    <Award size={16} color="#43459E" /> Key Milestones & Contributions
                  </h4>
                  <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: 0,
                    margin: 0,
                    listStyle: "none"
                  }}>
                    {selectedTeacher.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "0.85rem",
                          color: "#4B5563",
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                        }}
                      >
                        <span style={{
                          color: "#059669",
                          fontWeight: "bold",
                          fontSize: "0.95rem",
                          lineHeight: 1
                        }}>✓</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) { .faculty-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px) { 
          .faculty-grid { grid-template-columns: 1fr 1fr !important; gap: 14px !important; } 
          .faculty-popup-header { flex-direction: column; text-align: center; }
        }
        @media (max-width: 500px) {
          .faculty-grid { grid-template-columns: 1fr !important; }
        }
        .faculty-card-hover:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 32px rgba(67, 69, 158, 0.1) !important;
          border-color: rgba(67, 69, 158, 0.25) !important;
        }
      `}</style>
    </section>
  );
}
