"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ===== Particle Canvas ===== */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const dots: {
      x: number; y: number; vx: number; vy: number;
      r: number; opacity: number; color: string;
    }[] = [];

    const palette = [
      "98,197,210",
      "67,69,158",
      "248,231,28",
      "255,255,255",
    ];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function init() {
      dots.length = 0;
      const count = Math.min(Math.floor(window.innerWidth / 22), 60);
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.2 + 0.4,
          opacity: Math.random() * 0.35 + 0.08,
          color: palette[Math.floor(Math.random() * palette.length)],
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas!.width;
        if (d.x > canvas!.width) d.x = 0;
        if (d.y < 0) d.y = canvas!.height;
        if (d.y > canvas!.height) d.y = 0;

        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${d.color},${d.opacity})`;
        ctx!.fill();
      }

      // subtle connection lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx!.beginPath();
            ctx!.moveTo(dots[i].x, dots[i].y);
            ctx!.lineTo(dots[j].x, dots[j].y);
            ctx!.strokeStyle = `rgba(98,197,210,${0.03 * (1 - dist / 100)})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    init();
    draw();

    const handleResize = () => { resize(); init(); };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />;
}

/* ===== Main Background ===== */
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 70% at 50% 0%, rgba(67,69,158,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 70% 50% at 80% 20%, rgba(98,197,210,0.07) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 15% 75%, rgba(248,231,28,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Aurora blob 1 — top right */}
      <motion.div
        className="absolute animate-blob"
        style={{
          width: "55vw",
          height: "55vw",
          maxWidth: "700px",
          maxHeight: "700px",
          top: "-15%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(98,197,210,0.12) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.08, 0.96, 1], x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora blob 2 — center left */}
      <motion.div
        className="absolute animate-blob"
        style={{
          width: "45vw",
          height: "45vw",
          maxWidth: "550px",
          maxHeight: "550px",
          top: "25%",
          left: "-8%",
          background: "radial-gradient(circle, rgba(67,69,158,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
          animationDelay: "-5s",
        }}
        animate={{ scale: [1, 0.94, 1.06, 1], x: [0, -12, 18, 0], y: [0, 15, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Aurora blob 3 — bottom */}
      <motion.div
        className="absolute animate-blob"
        style={{
          width: "35vw",
          height: "35vw",
          maxWidth: "400px",
          maxHeight: "400px",
          bottom: "5%",
          right: "20%",
          background: "radial-gradient(circle, rgba(248,231,28,0.04) 0%, transparent 65%)",
          filter: "blur(50px)",
          animationDelay: "-10s",
        }}
        animate={{ scale: [1, 1.1, 0.92, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <Particles />

      {/* Subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(98,197,210,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(98,197,210,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,0,0,0.3) 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,0,0,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Soft light rays */}
      <motion.div
        className="absolute"
        style={{
          top: 0, left: "25%", width: "1px", height: "100%",
          background: "linear-gradient(to bottom, transparent, rgba(98,197,210,0.04) 40%, transparent 80%)",
          transform: "rotate(12deg)", transformOrigin: "top center",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          top: 0, right: "35%", width: "1px", height: "80%",
          background: "linear-gradient(to bottom, transparent, rgba(67,69,158,0.04) 50%, transparent 90%)",
          transform: "rotate(-8deg)", transformOrigin: "top center",
        }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 65% 65% at 50% 50%, transparent 0%, rgba(6,7,26,0.5) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
