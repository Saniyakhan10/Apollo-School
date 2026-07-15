"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, MapPin, X, Calendar } from "lucide-react";

const events = [
  {
    date: { day: "14", month: "Jul" },
    title: "Annual Sports Day 2025",
    time: "8:00 AM", venue: "Sports Ground",
    category: "Sports", emoji: "🏆",
    image: "/gallery/event-sports.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(67,69,158,0.92) 100%)",
    accentColor: "#43459E",
    shadow: "rgba(67,69,158,0.35)",
    textGradient: "linear-gradient(135deg, #EEF2F6 0%, #E0E7FF 100%)",
    description: "A grand celebration of athleticism, teamwork, and sportsmanship. Students from all houses will compete in track and field events, relay races, and beautiful drill displays. Parents are cordially invited to attend and cheer for our young champions.",
  },
  {
    date: { day: "15", month: "Aug" },
    title: "Independence Day 2025",
    time: "7:30 AM", venue: "Assembly Ground",
    category: "National", emoji: "🇮🇳",
    image: "/gallery/event-independence.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(98,197,210,0.92) 100%)",
    accentColor: "#62C5D2",
    shadow: "rgba(98,197,210,0.35)",
    flagColors: true,
    textGradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    description: "Honoring our nation's freedom with a flag hoisting ceremony, national anthem, and patriotic performances by the school choir. The event features a school-wide march past, cultural presentations, and motivational speeches commemorating our heroes.",
  },
  {
    date: { day: "22", month: "Aug" },
    title: "Raksha Bandhan Celebration",
    time: "10:00 AM", venue: "Auditorium",
    category: "Festive", emoji: "🤝",
    image: "/gallery/event-raksha.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(67,69,158,0.92) 100%)",
    accentColor: "#43459E",
    shadow: "rgba(67,69,158,0.35)",
    textGradient: "linear-gradient(135deg, #EEF2F6 0%, #E0E7FF 100%)",
    description: "A beautiful celebration highlighting the bond of protection and affection. Students will participate in interactive Rakhi-making workshops, greeting card design contests, and special assembly presentations reflecting on sibling love and family values.",
  },
  {
    date: { day: "05", month: "Sep" },
    title: "Teachers' Day 2025",
    time: "9:00 AM", venue: "Main Hall",
    category: "Cultural", emoji: "👩‍🏫",
    image: "/gallery/event-teachers.jpg",
    gradient: "linear-gradient(135deg, transparent 30%, rgba(98,197,210,0.92) 100%)",
    accentColor: "#62C5D2",
    shadow: "rgba(98,197,210,0.35)",
    textGradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    description: "A special day dedicated to showing our deep appreciation for our excellent educators. Organized by the Senior Student Council, the day includes greeting card presentations, a dedicated cultural show, and interactive fun games for all faculty members.",
  },
  {
    date: { day: "02", month: "Oct" },
    title: "Gandhi Jayanti",
    time: "8:00 AM", venue: "Assembly Ground",
    category: "National", emoji: "🕊️",
    image: "/gallery/event-gandhi.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(67,69,158,0.92) 100%)",
    accentColor: "#43459E",
    shadow: "rgba(67,69,158,0.35)",
    textGradient: "linear-gradient(135deg, #EEF2F6 0%, #E0E7FF 100%)",
    description: "Commemorating the birth anniversary of Mahatma Gandhi, the Father of the Nation. The campus will hold a peaceful assembly, prayer sessions, and a school-wide community service initiative promoting cleanliness and sustainable living.",
  },
  {
    date: { day: "20", month: "Oct" },
    title: "Annual Cultural Fest",
    time: "5:00 PM", venue: "Auditorium",
    category: "Cultural", emoji: "🎭",
    image: "/gallery/event-annual.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(98,197,210,0.92) 100%)",
    accentColor: "#62C5D2",
    shadow: "rgba(98,197,210,0.35)",
    textGradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
    description: "Our school's flagship cultural extravaganza, displaying the artistic, musical, and theatrical talents of Apollo Convent students. Highlights include classical and contemporary dances, theme-based plays, and live school band performances.",
  },
  {
    date: { day: "25", month: "Dec" },
    title: "Christmas Celebration",
    time: "10:00 AM", venue: "Main Ground",
    category: "Festive", emoji: "🎄",
    image: "/gallery/event-christmas.jpg",
    gradient: "linear-gradient(180deg, transparent 30%, rgba(67,69,158,0.92) 100%)",
    accentColor: "#43459E",
    shadow: "rgba(67,69,158,0.35)",
    textGradient: "linear-gradient(135deg, #EEF2F6 0%, #E0E7FF 100%)",
    description: "Spreading festive joy, peace, and warmth across the campus. The school choir will sing beautiful holiday carols, classes will present festive decorative displays, and we will hold a charity drive and visit from Santa Claus.",
  },
];

export default function EventsSection() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 260 : -260, behavior: "smooth" });
  };

  return (
    <section ref={ref} id="events" style={{ background: "#ffffff", padding: "80px 0", overflow: "hidden" }}>
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <span className="section-tag">✦ What's Coming Up</span>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>
            Upcoming <span>Events</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Stay updated with our vibrant school calendar — celebrations and milestones ahead!
          </p>
        </motion.div>

        {/* Scrollable row with side arrows */}
        <div style={{ position: "relative" }}>
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="scroll-arrow-btn left-arrow"
            style={{
              position: "absolute", left: -20, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 44, height: 44, borderRadius: "50%",
              background: "#ffffff", border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#43459E";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
              (e.currentTarget as HTMLElement).style.color = "inherit";
            }}
          >
            ‹
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="scroll-arrow-btn right-arrow"
            style={{
              position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: 44, height: 44, borderRadius: "50%",
              background: "#ffffff", border: "1px solid #E5E7EB",
              boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s ease", fontSize: "1.2rem", fontWeight: 700,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#43459E";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#ffffff";
              (e.currentTarget as HTMLElement).style.color = "inherit";
            }}
          >
            ›
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              paddingBottom: "8px",
              scrollbarWidth: "none",
            }}
          >
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                onClick={() => setSelectedEvent(ev)}
                style={{
                  flexShrink: 0, width: "200px",
                  background: "#ffffff",
                  borderRadius: "16px", overflow: "hidden",
                  position: "relative", cursor: "pointer",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.04)",
                  transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 16px 32px rgba(67, 69, 158, 0.1)`,
                  borderColor: ev.accentColor,
                }}
              >
                {/* Image Container */}
                <div style={{ position: "relative", height: "115px", width: "100%", overflow: "hidden" }}>
                  <Image src={ev.image} alt={ev.title} fill style={{ objectFit: "cover" }} sizes="200px" quality={95} />
                  {/* Color Overlay */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: ev.flagColors 
                      ? "linear-gradient(135deg, rgba(255,107,0,0.25) 0%, rgba(19,136,8,0.25) 100%)"
                      : `linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))`,
                  }} />
                  
                  {/* Emoji */}
                  <span style={{
                    position: "absolute", bottom: 8, right: 8,
                    fontSize: "1.2rem",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                  }}>{ev.emoji}</span>

                  {/* Category tag */}
                  <span style={{
                    position: "absolute", top: 8, right: 8,
                    padding: "2px 8px",
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(4px)",
                    borderRadius: "9999px",
                    fontSize: "0.58rem", fontWeight: 800,
                    color: ev.accentColor,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    letterSpacing: "0.04em", textTransform: "uppercase",
                  }}>{ev.category}</span>
                </div>

                {/* Floating Date Badge */}
                <div style={{
                  position: "absolute",
                  top: "90px",
                  left: "14px",
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "4px 8px",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  border: "1px solid #E5E7EB",
                  zIndex: 2,
                }}>
                  <div style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "0.85rem", color: ev.accentColor, lineHeight: 1 }}>
                    {ev.date.day}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.55rem", color: "#6B7280", textTransform: "uppercase" }}>
                    {ev.date.month}
                  </div>
                </div>

                {/* Content Body with gradient background matching the card category theme */}
                <div style={{ 
                  padding: "30px 14px 14px 14px", 
                  display: "flex", 
                  flexDirection: "column", 
                  height: "135px", 
                  justifyContent: "space-between",
                  background: ev.textGradient || "#ffffff",
                  borderTop: "1px solid #E5E7EB",
                }}>
                  <h3 style={{
                    fontFamily: "'Merriweather',Georgia,serif",
                    fontWeight: 900, fontSize: "0.8rem",
                    color: "#1F2937", lineHeight: 1.4,
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>{ev.title}</h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Clock size={11} color="#6B7280" />
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.7rem", color: "#4B5563", fontWeight: 600 }}>{ev.time}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <MapPin size={11} color="#6B7280" />
                      <span style={{ 
                        fontFamily: "'Plus Jakarta Sans',sans-serif", 
                        fontSize: "0.7rem", 
                        color: "#4B5563", 
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}>{ev.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Popup Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
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
                width: "min(580px, 95vw)",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
                border: "1px solid #E5E7EB",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image Header */}
              <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden" }}>
                <Image src={selectedEvent.image} alt={selectedEvent.title} fill style={{ objectFit: "cover" }} sizes="580px" quality={95} />
                
                {/* Close Button inside image header */}
                <button
                  onClick={() => setSelectedEvent(null)}
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.5)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#ffffff",
                    transition: "all 0.2s ease",
                    zIndex: 10,
                    backdropFilter: "blur(4px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,0,0,0.5)";
                  }}
                >
                  <X size={16} />
                </button>

                {/* Dark overlay at bottom */}
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "80px",
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }} />

                {/* Emoji badge */}
                <span style={{
                  position: "absolute",
                  bottom: 16,
                  right: 20,
                  fontSize: "1.8rem",
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                }}>{selectedEvent.emoji}</span>
                
                {/* Category tag */}
                <span style={{
                  position: "absolute",
                  bottom: 16,
                  left: 20,
                  padding: "4px 12px",
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(4px)",
                  borderRadius: "9999px",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: selectedEvent.accentColor,
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}>{selectedEvent.category}</span>
              </div>

              {/* Popup Details Body */}
              <div style={{ padding: "28px 28px 32px" }}>
                {/* Date & Title */}
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "20px" }}>
                  {/* Date badge */}
                  <div style={{
                    background: "#F3F4F6",
                    borderRadius: "12px",
                    padding: "8px 14px",
                    textAlign: "center",
                    border: "1px solid #E5E7EB",
                    flexShrink: 0,
                    minWidth: "60px",
                  }}>
                    <div style={{ fontFamily: "'Merriweather',Georgia,serif", fontWeight: 900, fontSize: "1.15rem", color: selectedEvent.accentColor, lineHeight: 1.1 }}>
                      {selectedEvent.date.day}
                    </div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#6B7280", textTransform: "uppercase", marginTop: "2px" }}>
                      {selectedEvent.date.month}
                    </div>
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontFamily: "'Merriweather', Georgia, serif",
                      fontWeight: 900,
                      fontSize: "1.25rem",
                      color: "#1F2937",
                      lineHeight: 1.35,
                      margin: 0,
                    }}>{selectedEvent.title}</h3>
                  </div>
                </div>

                {/* Venue & Time Info Cards Row */}
                <div style={{ 
                  display: "flex", 
                  gap: "20px", 
                  padding: "14px 18px", 
                  background: "#F9FAFB", 
                  borderRadius: "14px", 
                  border: "1px solid #F0F0F0",
                  marginBottom: "20px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
                    <Clock size={16} color={selectedEvent.accentColor} />
                    <div>
                      <p style={{ margin: 0, fontSize: "0.68rem", color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase" }}>Time</p>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.83rem", color: "#1F2937", fontWeight: 700 }}>{selectedEvent.time}</span>
                    </div>
                  </div>
                  
                  <div style={{ width: "1px", background: "#E5E7EB" }} />

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1 }}>
                    <MapPin size={16} color={selectedEvent.accentColor} />
                    <div>
                      <p style={{ margin: 0, fontSize: "0.68rem", color: "#9CA3AF", fontWeight: 700, textTransform: "uppercase" }}>Venue</p>
                      <span style={{ 
                        fontFamily: "'Plus Jakarta Sans',sans-serif", 
                        fontSize: "0.83rem", 
                        color: "#1F2937", 
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      }}>{selectedEvent.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Description details */}
                <div>
                  <h4 style={{
                    fontFamily: "'Merriweather', Georgia, serif",
                    fontWeight: 900,
                    fontSize: "0.9rem",
                    color: "#1F2937",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}>
                    <Calendar size={14} color={selectedEvent.accentColor} /> Event Details
                  </h4>
                  <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#4B5563",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        div[style*="scrollbarWidth: none"]::-webkit-scrollbar { display: none; }
        @media (max-width: 1024px) {
          .scroll-arrow-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
