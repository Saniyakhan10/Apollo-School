"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sunita Sharma",
    role: "Parent — Class 9",
    avatar: "https://img.magnific.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
    rating: 5,
    text: "Apollo Convent truly transformed my daughter. The teachers are exceptional — they go beyond books to nurture each child's unique talent. We couldn't be happier with our choice.",
    color: "#43459E",
  },
  {
    name: "Priya Patel",
    role: "Parent — Class 5",
    avatar: "https://media.istockphoto.com/id/1313502972/photo/portrait-of-beautiful-woman-having-fun.jpg?s=612x612&w=0&k=20&c=DHGWp3wIoSlpjK9xFdARpgpyo4t-hIzuqOSx5ZyRsHA=",
    rating: 5,
    text: "The annual sports day and cultural fest gave my shy child so much confidence. Apollo strikes a perfect balance between academics and activities. Beautiful campus too!",
    color: "#62C5D2",
  },
  {
    name: "Rajesh Kumar",
    role: "Parent — Class 12",
    avatar: "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
    rating: 5,
    text: "My son scored 94% in CBSE boards and cracked the college of his dreams. The faculty's dedication and the school's structured approach made all the difference.",
    color: "#43459E",
  },
  {
    name: "Arjun Singh",
    role: "Alumni — Batch 2022",
    avatar: "https://t3.ftcdn.net/jpg/03/67/70/92/360_F_367709239_wWNdUSrtEvG6psATqu1sO9AkKUXALpR8.jpg",
    rating: 5,
    text: "Apollo shaped who I am today. Now studying at IIT, I owe my analytical foundation entirely to my teachers here. The values instilled here guide me every single day.",
    color: "#62C5D2",
  },
  {
    name: "Meena Gupta",
    role: "Parent — Class 7",
    avatar: "https://t3.ftcdn.net/jpg/02/81/81/86/360_F_281818663_XXRCNuGktKeZsnknqWkKI0rR4JPWui3H.jpg",
    rating: 5,
    text: "The school bus is safe, punctual and well-managed. Staff is responsive and caring. The discipline here combined with warmth creates a wonderful learning environment.",
    color: "#43459E",
  },
  {
    name: "Vikram Nair",
    role: "Parent — Class 11",
    avatar: "https://thumbs.dreamstime.com/b/traditional-indian-man-23804674.jpg",
    rating: 5,
    text: "The Science faculty is outstanding. My son is preparing for NEET and the school's extra coaching and personalised attention has boosted his confidence tremendously.",
    color: "#62C5D2",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: "#FBBF24", fontSize: "0.95rem" }}>★</span>
      ))}
    </div>
  );
}

// Extend testimonials list to enable infinite loop
const total = testimonials.length;
const extendedTestimonials = [
  testimonials[total - 2],
  testimonials[total - 1],
  ...testimonials,
  testimonials[0],
  testimonials[1],
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const [centerIndex, setCenterIndex] = useState(2); // index 2 is original 0
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const handlePrev = () => {
    setCenterIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCenterIndex((prev) => prev + 1);
  };

  // Continuous Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Loop reset logic
  useEffect(() => {
    // Reached clone at the end
    if (centerIndex === total + 2) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCenterIndex(2);
      }, 600);
      return () => clearTimeout(timer);
    }
    // Reached clone at the start
    if (centerIndex === 1) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setCenterIndex(total + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [centerIndex]);

  // Re-enable transition
  useEffect(() => {
    if (!transitionEnabled) {
      // Small delay to allow state to settle before turning transitions back on
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);

  // Get current active indicator index
  const getActiveIndicator = () => {
    const originalIndex = (centerIndex - 2 + total) % total;
    return originalIndex < 0 ? originalIndex + total : originalIndex;
  };

  const activeIndicator = getActiveIndicator();

  return (
    <section
      ref={ref}
      id="testimonials"
      style={{
        background: "#F9FAFB",
        padding: "96px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative large quotation mark in background */}
      <div style={{
        position: "absolute",
        top: 40,
        left: "5%",
        fontSize: "12rem",
        fontFamily: "serif",
        color: "#E5E7EB",
        opacity: 0.4,
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
      }}>
        “
      </div>

      <div className="container" style={{ position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-tag">✦ What Parents Say</span>
          <h2 className="section-title" style={{ marginBottom: "14px" }}>
            Our <span>Testimonials</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Words from our school family — parents and alumni who've lived the Apollo experience.
          </p>
        </div>

        {/* Carousel Outer Wrapper */}
        <div style={{
          position: "relative",
          width: "100%",
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Left Arrow - extending outside boundaries */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "-16px",
              zIndex: 10,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="testi-nav-btn"
          >
            <ChevronLeft size={24} color="#43459E" />
          </button>

          {/* Right Arrow - extending outside boundaries */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "-16px",
              zIndex: 10,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#ffffff",
              border: "1px solid #E5E7EB",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            className="testi-nav-btn"
          >
            <ChevronRight size={24} color="#43459E" />
          </button>

          {/* Testimonial Cards Row Viewport */}
          <div style={{
            width: "100%",
            overflow: "hidden",
            padding: "20px 0",
          }}>
            <div
              className="testimonials-track"
              style={{
                display: "flex",
                gap: "24px",
                transform: `var(--track-transform)`,
                transition: transitionEnabled ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
              }}
            >
              {extendedTestimonials.map((item, idx) => {
                const isCenter = idx === centerIndex;
                return (
                  <div key={idx} className="testimonial-card-wrapper">
                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "28px",
                        padding: "40px 34px",
                        border: isCenter ? "2px solid #43459E" : "1.5px solid #E5E7EB",
                        boxShadow: isCenter
                          ? `0 24px 50px rgba(67, 69, 158, 0.12), 0 0 0 4px rgba(67, 69, 158, 0.04)`
                          : "0 8px 24px rgba(0,0,0,0.04)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        position: "relative",
                        minHeight: "330px",
                        opacity: isCenter ? 1 : 0.55,
                        scale: isCenter ? 1.03 : 0.92,
                        filter: isCenter ? "none" : "blur(0.6px)",
                        transition: "all 0.4s ease",
                      }}
                      className={`testimonial-card ${isCenter ? "active-card" : ""}`}
                    >
                      {/* Glowing background hint for center card */}
                      {isCenter && (
                        <div style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "28px",
                          background: `radial-gradient(circle at top right, ${item.color}0a, transparent 70%)`,
                          pointerEvents: "none",
                        }} />
                      )}

                      {/* Top rating and quote decoration */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <StarRating count={item.rating} />
                        <Quote size={32} style={{ opacity: isCenter ? 0.2 : 0.08, color: item.color }} />
                      </div>

                      {/* Testimony quote */}
                      <p style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: isCenter ? "0.95rem" : "0.86rem",
                        color: "#374151",
                        lineHeight: 1.8,
                        fontStyle: "italic",
                        flex: 1,
                      }}>
                        "{item.text}"
                      </p>

                      {/* User Profile */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        borderTop: "1px solid #F3F4F6",
                        paddingTop: "16px",
                      }}>
                        <div style={{
                          position: "relative",
                          width: isCenter ? 52 : 44,
                          height: isCenter ? 52 : 44,
                          borderRadius: "50%",
                          overflow: "hidden",
                          flexShrink: 0,
                          border: `2px solid ${isCenter ? item.color : "#E5E7EB"}`,
                          transition: "all 0.3s ease",
                        }}>
                          <Image src={item.avatar} alt={item.name} fill style={{ objectFit: "cover" }} sizes="52px" quality={95} />
                        </div>
                        <div>
                          <h4 style={{
                            fontFamily: "'Merriweather', Georgia, serif",
                            fontWeight: 900,
                            fontSize: isCenter ? "0.95rem" : "0.85rem",
                            color: "#1F2937",
                            marginBottom: "2px",
                          }}>{item.name}</h4>
                          <p style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "0.75rem",
                            color: "#6B7280",
                            fontWeight: 500,
                          }}>{item.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "40px",
        }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCenterIndex(idx + 2)}
              style={{
                width: activeIndicator === idx ? "28px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                background: activeIndicator === idx ? "#43459E" : "#D1D5DB",
                border: "none",
                cursor: "pointer",
                transition: "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .testi-nav-btn:hover {
          background: #43459E !important;
          border-color: #43459E !important;
          box-shadow: 0 10px 25px rgba(67, 69, 158, 0.25) !important;
        }
        .testi-nav-btn:hover svg {
          color: #ffffff !important;
        }
        
        @media (min-width: 901px) {
          .testimonials-track {
            --track-transform: translateX(calc(-${(centerIndex - 1) * 33.333}%));
          }
          .testimonial-card-wrapper {
            width: calc(33.333% - 16px);
            flex-shrink: 0;
          }
        }
        
        @media (max-width: 900px) {
          .testimonials-track {
            --track-transform: translateX(calc(-${centerIndex} * (100% + 24px)));
          }
          .testimonial-card-wrapper {
            width: 100%;
            flex-shrink: 0;
          }
        }
        @media (max-width: 768px) {
          .testi-nav-btn { display: none !important; }
        }
      `}</style>
    </section>
  );
}
