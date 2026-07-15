"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StrengthsSection from "@/components/StrengthsSection";
import AboutHomeSection from "@/components/AboutHomeSection";
import CurriculumsSection from "@/components/CurriculumsSection";
import CampusSection from "@/components/CampusSection";
import MemoriesSection from "@/components/MemoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FacultySection from "@/components/FacultySection";
import EventsSection from "@/components/EventsSection";
import NoticeBoardSection from "@/components/NoticeBoardSection";
import AdmissionBannerSection from "@/components/AdmissionBannerSection";
import ContactHomeSection from "@/components/ContactHomeSection";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { motion } from "framer-motion";

export default function HomePage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main style={{ position: "relative" }}>
      <Navbar onAdmissionClick={() => setFormOpen(true)} />

      {/* Hero — full viewport, no scroll snap */}
      <HeroSection onAdmissionClick={() => setFormOpen(true)} />

      {/* Home Sections — continuous scroll with page entrance transition */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
      >
        <StrengthsSection />
        <AboutHomeSection />
        <CurriculumsSection />
        <CampusSection />
        <MemoriesSection />
        <TestimonialsSection />
        <FacultySection />
        <EventsSection />
        <NoticeBoardSection />
        <AdmissionBannerSection onAdmissionClick={() => setFormOpen(true)} />
        <ContactHomeSection />
      </motion.div>
      <Footer />

      {/* Registration Modal */}
      <RegistrationForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
