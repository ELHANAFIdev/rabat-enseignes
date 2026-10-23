"use client";

import {
  SlidersHorizontal,
  Award,
  Users2,
  CheckCircle,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-[#dfb743]" />,
      title: "Solutions Personnalisées",
      description:
        "Chaque commerce possède son identité propre. Nous concevons chaque enseigne, totem et habillage sur mesure, en harmonie parfaite avec votre charte graphique et les contraintes techniques de votre façade.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#dfb743]" />,
      title: "Finitions Professionnelles",
      description:
        "Nous sélectionnons des matériaux durables et résistants aux intempéries : inox brossé de qualité supérieure, panneaux composites Alucobond 4mm, plexiglas coulé et modules LED Samsung à haute efficacité énergétique.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#dfb743]" />,
      title: "Accompagnement du Projet",
      description:
        "De la prise de cotes sur place jusqu'à la mise en lumière finale, vous bénéficiez d'un interlocuteur dédié qui coordonne l'étude 3D, le choix des matériaux, la fabrication en atelier et l'installation.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#dfb743]" />,
      title: "Attention aux Détails",
      description:
        "La perfection réside dans les finitions invisibles : fixations encastrées discrètes, soudures polies avec soin, étanchéité IP67 garantie et câblage électrique totalement dissimulé.",
    },
  ];

  const commitments = [
    {
      icon: <Cpu className="w-5 h-5 text-[#dfb743]" />,
      label: "Usinage CNC & Laser",
      detail: "Découpe numérique haute précision au millimètre",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#dfb743]" />,
      label: "Protection Extérieure",
      detail: "Traitement anti-UV et anti-corrosion marine",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#dfb743]" />,
      label: "Intégration Architecturale",
      detail: "Respect rigoureux de l'esthétique du bâtiment",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#dfb743]" />,
      label: "Sécurité & Conformité",
      detail: "Pose solide conforme aux exigences de sécurité",
    },
  ];

  return (
    <section id="pourquoi-nous" className="py-24 sm:py-32 bg-[#0e0e12] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excellence & Rigueur</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pourquoi choisir <span className="gold-gradient-text">Rabat Enseignes</span> ?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Notre philosophie repose sur l&apos;alliance entre un savoir-faire artisanal exigeant et
            les technologies modernes de fabrication pour créer des ouvrages pérennes et distinctifs.
          </p>
        </div>

        {/* 4 Main Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-zinc-950/70 border border-zinc-800/90 hover:border-[#dfb743]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg relative group"
            >
              <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 inline-block mb-6 group-hover:scale-110 group-hover:border-[#dfb743]/50 transition-all">
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f5eed3] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Commitments Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-md">
          {commitments.map((item, i) => (
            <div key={i} className="flex items-start gap-3.5 p-2">
              <div className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 flex-shrink-0 text-[#dfb743]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{item.label}</h4>
                <p className="text-xs text-zinc-400 mt-0.5 leading-snug">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
