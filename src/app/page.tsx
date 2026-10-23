"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsTicker from "@/components/ClientsTicker";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteTopic, setQuoteTopic] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (topic?: string) => {
    setQuoteTopic(topic || "Enseignes lumineuses et commerciales");
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#0b0b0d] text-zinc-100 flex flex-col selection:bg-[#c59b27] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Clients Infinite Trust Ticker */}
        <ClientsTicker />

        {/* Featured Clients & Partners Section */}
        <ClientsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4 Core Services */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Featured Projects & Portfolio with Modal */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About the Workshop & Craftsmanship */}
        <AboutSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4-Step Process */}
        <ProcessSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Contact & Quote Form with WhatsApp Generator */}
        <ContactSection initialTopic={quoteTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        initialTopic={quoteTopic}
        onClose={handleCloseQuoteModal}
      />
    </div>
  );
}
