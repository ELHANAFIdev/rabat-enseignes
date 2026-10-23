"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Compass,
  Layers,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/services";
import { buildWhatsAppLink } from "@/data/company";

interface ServicesSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#dfb743]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#dfb743]" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-[#dfb743]" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-[#dfb743]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#dfb743]" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-[#dfb743]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nos Domaines d&apos;Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Des solutions complètes pour sublimer votre{" "}
            <span className="gold-gradient-text">image de marque</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            De l&apos;étude technique à la pose sur site, nous maîtrisons l&apos;intégralité de la chaîne
            de fabrication pour garantir des réalisations pérennes et d&apos;une précision irréprochable.
          </p>
        </div>

        {/* 4 Services Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES_DATA.map((service, index) => {
            const isSelected = selectedService.id === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-zinc-900/90 border-2 border-[#dfb743] shadow-xl shadow-amber-500/10 -translate-y-1.5"
                    : "bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/40"
                }`}
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-[#dfb743]/40 transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-600 group-hover:text-[#dfb743] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f5eed3] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#dfb743] mb-3">
                    {service.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 font-light line-clamp-3 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#dfb743] transition-colors">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Detailed Service Showcase Banner */}
        <div className="rounded-3xl bg-zinc-950/80 border border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800/80 group">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Badges overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {selectedService.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 text-[#f5eed3] border border-[#dfb743]/40 backdrop-blur-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Description & Specs Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-lg bg-[#dfb743]/10 text-[#dfb743]">
                    {getServiceIcon(selectedService.icon)}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#dfb743]">
                    Spécifications Techniques
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {selectedService.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                  {selectedService.longDescription}
                </p>

                {/* Features checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#dfb743] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-zinc-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical specs pill grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 mb-8">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-200 mt-0.5">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal(selectedService.quoteTopic)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform text-sm"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Devis gratuit pour ce service</span>
                </button>

                <a
                  href={buildWhatsAppLink(
                    `Bonjour Rabat Enseignes, je souhaite échanger à propos du service : ${selectedService.title}. Pouvez-vous me conseiller ?`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Poser une question sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
