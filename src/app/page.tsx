"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";

export default function HomePage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main style={{ position: "relative", minHeight: "100vh", background: "#ffffff", overflow: "hidden" }}>
      <Navbar onAdmissionClick={() => setFormOpen(true)} />
      <HeroSection onAdmissionClick={() => setFormOpen(true)} />
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
