"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, User, Phone, Mail, MapPin, GraduationCap,
  Calendar, School, Users, ChevronDown, CheckCircle, AlertCircle,
} from "lucide-react";

interface Props { isOpen: boolean; onClose: () => void; }

const grades = [
  "Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6",
  "Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12",
];

/* ─────────────────── Validation helpers ─────────────────── */
const validators: Record<string, (v: string) => string> = {
  studentName: (v) => v.trim().length < 3 ? "Please enter student's full name (min 3 chars)" : "",
  dob: (v) => {
    if (!v) return "Date of birth is required";
    const age = (Date.now() - new Date(v).getTime()) / (1000 * 60 * 60 * 24 * 365);
    if (age < 3 || age > 20) return "Age must be between 3 and 20 years";
    return "";
  },
  gender: (v) => v ? "" : "Please select gender",
  grade: (v) => v ? "" : "Please select a class",
  fatherName: (v) => v.trim().length < 3 ? "Please enter father's full name" : "",
  phone: (v) => /^[6-9]\d{9}$/.test(v.replace(/\s+/g, "")) ? "" : "Enter a valid 10-digit mobile number",
  email: (v) => v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Enter a valid email address" : "",
  address: (v) => v.trim().length < 10 ? "Please enter a complete address" : "",
};

/* ─────────────────── Input Field ─────────────────── */
function Field({
  label, icon: Icon, name, type = "text", placeholder, required = false,
  value, error, onChange,
}: {
  label: string; icon: React.ElementType; name: string; type?: string;
  placeholder?: string; required?: boolean;
  value: string; error: string; onChange: (n: string, v: string) => void;
}) {
  const hasError = !!error;
  const borderColor = hasError ? "#EF4444" : "#E5E7EB";
  const focusBorder = hasError ? "#EF4444" : "#43459E";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label style={{ fontFamily: "inherit", fontSize: "13px", fontWeight: 700, color: "#374151", display: "flex", gap: "3px" }}>
        {label}{required && <span style={{ color: "#EF4444" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: hasError ? "#EF4444" : "#9CA3AF", pointerEvents: "none", zIndex: 1 }}>
          <Icon size={15} />
        </div>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange(name, e.target.value)}
          style={{
            width: "100%",
            padding: "11px 14px 11px 38px",
            fontFamily: "inherit",
            fontSize: "14px",
            color: "#1F2937",
            background: hasError ? "#FEF2F2" : "#F9FAFB",
            border: `1.5px solid ${borderColor}`,
            borderRadius: "10px",
            outline: "none",
            boxSizing: "border-box",
            transition: "all 0.2s",
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = focusBorder;
            e.currentTarget.style.boxShadow = hasError ? "0 0 0 3px rgba(239,68,68,0.12)" : "0 0 0 3px rgba(67,69,158,0.1)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        {hasError && (
          <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#EF4444" }}>
            <AlertCircle size={15} />
          </div>
        )}
      </div>
      {hasError && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          style={{ margin: 0, fontSize: "12px", color: "#EF4444", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "4px" }}>
          {error}
        </motion.p>
      )}
    </div>
  );
}

/* ─────────────────── Select Field ─────────────────── */
function SelectField({
  label, icon: Icon, name, options, placeholder, required = false,
  value, error, onChange,
}: {
  label: string; icon: React.ElementType; name: string;
  options: string[]; placeholder?: string; required?: boolean;
  value: string; error: string; onChange: (n: string, v: string) => void;
}) {
  const hasError = !!error;
  const borderColor = hasError ? "#EF4444" : "#E5E7EB";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <label style={{ fontFamily: "inherit", fontSize: "13px", fontWeight: 700, color: "#374151", display: "flex", gap: "3px" }}>
        {label}{required && <span style={{ color: "#EF4444" }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: hasError ? "#EF4444" : "#9CA3AF", pointerEvents: "none", zIndex: 1 }}>
          <Icon size={15} />
        </div>
        <select
          value={value}
          required={required}
          onChange={(e) => onChange(name, e.target.value)}
          style={{
            width: "100%",
            padding: "11px 38px 11px 38px",
            fontFamily: "inherit",
            fontSize: "14px",
            color: value ? "#1F2937" : "#9CA3AF",
            background: hasError ? "#FEF2F2" : "#F9FAFB",
            border: `1.5px solid ${borderColor}`,
            borderRadius: "10px",
            outline: "none",
            appearance: "none",
            cursor: "pointer",
            boxSizing: "border-box",
            transition: "all 0.2s",
          }}
          onFocus={e => {
            e.currentTarget.style.borderColor = hasError ? "#EF4444" : "#43459E";
            e.currentTarget.style.boxShadow = hasError ? "0 0 0 3px rgba(239,68,68,0.12)" : "0 0 0 3px rgba(67,69,158,0.1)";
          }}
          onBlur={e => {
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <option value="">{placeholder}</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <div style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#9CA3AF", pointerEvents: "none" }}>
          <ChevronDown size={15} />
        </div>
      </div>
      {hasError && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
          style={{ margin: 0, fontSize: "12px", color: "#EF4444", fontFamily: "inherit" }}>
          {error}
        </motion.p>
      )}
    </div>
  );
}

/* ─────────────────── Main Modal ─────────────────── */
/* ─────────────────── Confetti Canvas Celebration ─────────────────── */
function ConfettiCanvas() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const colors = [
      "#62C5D2", // Cyan Accent
      "#43459E", // Royal Blue
      "#F8E71C", // Yellow Accent
      "#FF2A54", // Vivid Pink
      "#10B981", // Emerald Green
      "#F59E0B", // Amber Orange
      "#8B5CF6", // Purple
    ];

    interface ConfettiPiece {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
      shape: "circle" | "square" | "triangle";
    }

    const pieces: ConfettiPiece[] = [];
    const pieceCount = 220;

    // Initialize bursting particles from bottom corners and top center
    for (let i = 0; i < pieceCount; i++) {
      const isLeft = i < pieceCount * 0.4;
      const isRight = !isLeft && i < pieceCount * 0.8;
      
      let x = width / 2;
      let y = -20;
      let vx = (Math.random() - 0.5) * 8;
      let vy = Math.random() * 8 + 4;

      if (isLeft) {
        x = -10;
        y = height * 0.85;
        vx = Math.random() * 18 + 10;
        vy = -(Math.random() * 20 + 15);
      } else if (isRight) {
        x = width + 10;
        y = height * 0.85;
        vx = -(Math.random() * 18 + 10);
        vy = -(Math.random() * 20 + 15);
      }

      pieces.push({
        x,
        y,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx,
        vy,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as any,
      });
    }

    const gravity = 0.35;
    const drag = 0.98;

    const drawPiece = (p: ConfettiPiece) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      if (p.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(0, -p.size / 2);
        ctx.lineTo(p.size / 2, p.size / 2);
        ctx.lineTo(-p.size / 2, p.size / 2);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      }
      ctx.restore();
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);
      let active = 0;

      pieces.forEach((p) => {
        // Physics update
        p.vy += gravity;
        p.vx *= drag;
        p.vy *= drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        if (p.vy > 2) {
          p.opacity -= 0.004; // fade out slowly when falling down
        }

        if (p.opacity > 0 && p.y < height + 20 && p.x > -50 && p.x < width + 50) {
          active++;
          drawPiece(p);
        }
      });

      ctx.globalAlpha = 1.0;

      if (active > 0) {
        animationFrameId = requestAnimationFrame(update);
      }
    };

    update();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}

/* ─────────────────── Main Modal ─────────────────── */
const initialValues = {
  studentName: "", dob: "", gender: "", grade: "",
  fatherName: "", motherName: "", phone: "", email: "", address: "",
  prevSchool: "", lastClass: "",
};

export default function RegistrationForm({ isOpen, onClose }: Props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [isOpen]);
  useEffect(() => { if (!isOpen) setTimeout(() => { setSubmitted(false); setValues(initialValues); setErrors({}); setTouched({}); setSubmitAttempted(false); }, 400); }, [isOpen]);

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setTouched(prev => ({ ...prev, [name]: true }));
    if (validators[name]) {
      setErrors(prev => ({ ...prev, [name]: validators[name](value) }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(validators).forEach(field => {
      const err = validators[field](values[field as keyof typeof values] ?? "");
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    // Mark all required fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(validators).forEach(k => { allTouched[k] = true; });
    setTouched(allTouched);
    if (validate()) setSubmitted(true);
  };

  const showErr = (field: string) => (touched[field] || submitAttempted) ? (errors[field] ?? "") : "";

  const fieldProps = (name: string) => ({
    value: values[name as keyof typeof values],
    error: showErr(name),
    onChange: handleChange,
  });

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "fixed", inset: 0, zIndex: 900, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "fixed", inset: 0, zIndex: 901, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", pointerEvents: "none" }}
          >
            <div
              className="registration-modal-content"
              style={{
                width: "100%", maxWidth: "680px", maxHeight: "92vh",
                background: "#fff", borderRadius: "24px",
                boxShadow: "0 40px 80px rgba(0,0,0,0.18)",
                overflow: "hidden", pointerEvents: "all",
                display: "flex", flexDirection: "column",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {/* Header */}
              <div style={{ padding: "24px 28px 20px", background: "linear-gradient(135deg, #43459E 0%, #62C5D2 100%)", position: "relative", flexShrink: 0 }}>
                <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "10px", width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
                  <X size={17} />
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: 46, height: 46, borderRadius: "12px", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <School size={22} color="#fff" />
                  </div>
                  <div>
                    <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.3rem", fontWeight: 900, color: "#fff", margin: 0 }}>
                      Admission Registration
                    </h2>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", margin: "3px 0 0" }}>
                      Apollo Convent Higher Secondary School, Balaghat
                    </p>
                  </div>
                </div>
              </div>

              {/* Scrollable Body */}
              <div style={{ overflowY: "auto", flex: 1 }}>
                {submitted ? (
                  <>
                    <ConfettiCanvas />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 28px", gap: "14px", textAlign: "center" }}
                    >
                      <div style={{ color: "#22C55E" }}><CheckCircle size={68} strokeWidth={1.5} /></div>
                      <h3 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.4rem", fontWeight: 900, color: "#1F2937", margin: 0 }}>
                        Application Submitted!
                      </h3>
                      <p style={{ fontSize: "15px", color: "#6B7280", maxWidth: "360px", lineHeight: 1.7, margin: 0 }}>
                        Thank you for applying to Apollo Convent. We will contact you within 2–3 working days.
                      </p>
                      <button onClick={onClose} style={{ marginTop: "8px", padding: "12px 32px", background: "#43459E", color: "#fff", fontFamily: "inherit", fontWeight: 700, fontSize: "15px", borderRadius: "9999px", border: "none", cursor: "pointer", boxShadow: "0 8px 20px rgba(67,69,158,0.25)" }}>
                        Done
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <form onSubmit={handleSubmit} noValidate style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>

                    {/* Validation summary banner */}
                    <AnimatePresence>
                      {submitAttempted && errorCount > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                          style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#FEF2F2", borderRadius: "10px", border: "1px solid #FECACA" }}
                        >
                          <AlertCircle size={18} color="#EF4444" style={{ flexShrink: 0 }} />
                          <p style={{ margin: 0, fontSize: "13px", color: "#B91C1C", fontWeight: 600 }}>
                            Please fix {errorCount} error{errorCount > 1 ? "s" : ""} before submitting.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Student Info */}
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 800, color: "#43459E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>👨‍🎓 Student Information</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-grid">
                        <Field label="Student Full Name" icon={User} name="studentName" placeholder="Enter full name" required {...fieldProps("studentName")} />
                        <Field label="Date of Birth" icon={Calendar} name="dob" type="date" required {...fieldProps("dob")} />
                        <SelectField label="Gender" icon={Users} name="gender" options={["Male", "Female", "Other"]} placeholder="Select gender" required {...fieldProps("gender")} />
                        <SelectField label="Applying for Class" icon={GraduationCap} name="grade" options={grades} placeholder="Select grade" required {...fieldProps("grade")} />
                      </div>
                    </div>

                    <div style={{ height: 1, background: "#F3F4F6" }} />

                    {/* Parent Info */}
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 800, color: "#43459E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>👨‍👩‍👦 Parent / Guardian Information</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-grid">
                        <Field label="Father's Name" icon={User} name="fatherName" placeholder="Father's full name" required {...fieldProps("fatherName")} />
                        <Field label="Mother's Name" icon={User} name="motherName" placeholder="Mother's full name" {...fieldProps("motherName")} />
                        <Field label="Mobile Number" icon={Phone} name="phone" type="tel" placeholder="10-digit mobile no." required {...fieldProps("phone")} />
                        <Field label="Email Address" icon={Mail} name="email" type="email" placeholder="your@email.com" {...fieldProps("email")} />
                      </div>
                      <div style={{ marginTop: "12px" }}>
                        <Field label="Home Address" icon={MapPin} name="address" placeholder="Full address with city and pincode" required {...fieldProps("address")} />
                      </div>
                    </div>

                    <div style={{ height: 1, background: "#F3F4F6" }} />

                    {/* Academic */}
                    <div>
                      <p style={{ fontSize: "11px", fontWeight: 800, color: "#43459E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>📚 Previous Academic Details</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="form-grid">
                        <Field label="Previous School Name" icon={School} name="prevSchool" placeholder="School name (if any)" {...fieldProps("prevSchool")} />
                        <Field label="Last Class Passed" icon={GraduationCap} name="lastClass" placeholder="e.g. Grade 5" {...fieldProps("lastClass")} />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      style={{
                        width: "100%", padding: "15px",
                        background: "#43459E",
                        color: "#fff", fontFamily: "inherit", fontSize: "1rem",
                        fontWeight: 800, borderRadius: "12px", border: "none",
                        cursor: "pointer",
                        boxShadow: "0 8px 24px rgba(67,69,158,0.3)",
                        letterSpacing: "0.02em", transition: "all 0.2s ease",
                        marginTop: "4px",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "#62C5D2";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 12px 28px rgba(67,69,158,0.4)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "#43459E";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(67,69,158,0.3)";
                      }}
                    >
                      Submit Application →
                    </button>
                    <p style={{ textAlign: "center", fontSize: "12px", color: "#9CA3AF", margin: "0" }}>
                      Fields marked with <span style={{ color: "#EF4444" }}>*</span> are required
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
      <style>{`
        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
