"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2, Factory } from "lucide-react";
import { COMPANY_CONFIG } from "@/data/company";

interface AboutSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function AboutSection({ onOpenQuoteModal }: AboutSectionProps) {
  const highlights = [
    "Conception et fabrication en atelier spécialisé",
    "Découpe laser et usinage numérique haute précision",
    "Maîtrise des matériaux nobles : inox, alucobond, laiton, plexiglas",
    "Équipes d'installation qualifiées pour pose en hauteur",
    "Interventions à Rabat, Casablanca, Marrakech, Tanger et tout le Maroc",
  ];

  return (
    <section id="a-propos" className="py-24 sm:py-32 bg-[#0b0b0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Atelier & Fabrication */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[480px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <Image
                src="/images/about/atelier-fabrication.jpg"
                alt="Atelier de fabrication d'enseignes et façades Rabat Enseignes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Atelier Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/85 border border-zinc-800 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#dfb743]/15 text-[#dfb743]">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Fabrication Locale Intégrée</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Découpe numérique, pliage, soudure et assemblage
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#dfb743]/40 rounded-br-3xl pointer-events-none hidden sm:block" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>À Propos de l&apos;Atelier</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Façonner l&apos;identité visuelle des{" "}
              <span className="gold-gradient-text">entreprises marocaines</span>.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              <strong>{COMPANY_CONFIG.name}</strong> est une entreprise marocaine spécialisée dans
              la signalétique professionnelle, les enseignes lumineuses haut de gamme, la décoration
              commerciale et la rénovation des devantures d&apos;espaces professionnels.
            </p>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Nous accompagnons les commerces de détail, franchises, restaurants, hôtels, cabinets
              médicaux et sièges d&apos;entreprises dans la matérialisation de leur image. De l&apos;esquisse
              architecturale à l&apos;installation finale, chaque projet est réalisé avec une exigence
              constante de qualité, de durabilité et d&apos;esthétisme.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb743] flex-shrink-0 mt-1" />
                  <span className="text-sm text-zinc-300 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#realisations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
              >
                <span>Découvrir notre portfolio</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>

              <button
                onClick={() => onOpenQuoteModal("Échange sur un projet")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
              >
                <span>Contacter notre équipe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
