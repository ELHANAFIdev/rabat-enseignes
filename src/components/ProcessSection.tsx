"use client";

import {
  MessageSquare,
  FileCheck2,
  Hammer,
  Truck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ProcessSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function ProcessSection({ onOpenQuoteModal }: ProcessSectionProps) {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-6 h-6 text-[#dfb743]" />,
      title: "Échange sur votre projet",
      subtitle: "Écoute & Prise de cotes",
      description:
        "Nous analysons ensemble vos besoins, l'identité de votre marque, les contraintes de votre emplacement et votre calendrier d'ouverture.",
    },
    {
      number: "02",
      icon: <FileCheck2 className="w-6 h-6 text-[#dfb743]" />,
      title: "Étude et proposition",
      subtitle: "Visualisation 3D & Devis",
      description:
        "Notre bureau d'études élabore un modèle 3D réaliste incrusté sur votre façade, accompagné d'un chiffrage détaillé et transparent.",
    },
    {
      number: "03",
      icon: <Hammer className="w-6 h-6 text-[#dfb743]" />,
      title: "Fabrication et réalisation",
      subtitle: "Façonnage en atelier",
      description:
        "Découpe numérique, soudure de précision, assemblage des modules LED étanches et finitions soignées réalisées dans notre atelier.",
    },
    {
      number: "04",
      icon: <Truck className="w-6 h-6 text-[#dfb743]" />,
      title: "Livraison ou installation",
      subtitle: "Pose soignée sur site",
      description:
        "Nos équipes mobiles assurent la fixation rigoureuse, le raccordement électrique sécurisé et les tests de mise en lumière finale.",
    },
  ];

  return (
    <section id="methode" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Processus Clé en Main</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Notre méthode de <span className="gold-gradient-text">réalisation</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Un cheminement méthodique et transparent en 4 étapes pour concrétiser votre projet
            dans le respect des délais et des plus hauts standards de finition.
          </p>
        </div>

        {/* 4 Steps Timeline (Desktop Horizontal, Mobile Vertical) */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-20 left-12 right-12 h-0.5 bg-gradient-to-r from-zinc-800 via-[#dfb743]/50 to-zinc-800 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-zinc-950/80 border border-zinc-800/90 hover:border-[#dfb743]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-xl"
              >
                <div>
                  {/* Step badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:scale-110 group-hover:border-[#dfb743]/60 transition-all shadow-md">
                      {step.icon}
                    </div>

                    <span className="text-2xl font-black font-mono text-[#dfb743]/40 group-hover:text-[#dfb743] transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#f5eed3] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#dfb743] mb-3 uppercase tracking-wider">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-zinc-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-500 font-medium group-hover:text-zinc-300 transition-colors">
                  <span>Étape {step.number} sur 04</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dfb743] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner below process */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenQuoteModal("Nouveau projet à étudier")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-black gold-gradient-bg shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span>Lancer la première étape : Échanger sur votre projet</span>
          </button>
        </div>
      </div>
    </section>
  );
}
