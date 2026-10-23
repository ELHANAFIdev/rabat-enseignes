"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Layers,
  ChevronDown,
} from "lucide-react";
import { buildWhatsAppLink } from "@/data/company";

interface HeroSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0b0b0d]"
    >
      {/* Background Hero Image with Architectural Storefront */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-storefront.jpg"
          alt="Rabat Enseignes - Réalisation d'enseigne lumineuse et façade commerciale haut de gamme à Rabat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-45 sm:opacity-50"
        />

        {/* Sophisticated gradient overlays for contrast & legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/75 to-[#0b0b0d]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d] via-[#0b0b0d]/60 to-transparent" />
        
        {/* Subtle decorative gold radial glows */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#dfb743]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 flex flex-col items-start justify-center">
        {/* Top Moroccan Craftsmanship Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-[#dfb743]/40 shadow-lg shadow-black/50 backdrop-blur-md mb-6">
          <span className="flex h-2 w-2 rounded-full bg-[#dfb743] animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#f5eed3] uppercase">
            Atelier de Fabrication & Pose • Rabat & Partout au Maroc
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
          Donnez du{" "}
          <span className="gold-gradient-text inline-block">
            caractère
          </span>{" "}
          à votre enseigne.
        </h1>

        {/* Hero Supporting Copy */}
        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-300 max-w-3xl font-light leading-relaxed mb-10">
          Enseignes lumineuses, signalétique professionnelle et aménagement d&apos;espaces : 
          nous donnons vie à votre identité visuelle avec des réalisations sur mesure d&apos;exception.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="#realisations"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-black gold-gradient-bg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Découvrir nos réalisations</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </Link>

          <button
            onClick={() => onOpenQuoteModal()}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-[#dfb743]/50 transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <Sparkles className="w-5 h-5 text-[#dfb743]" />
            <span>Demander un devis gratuit</span>
          </button>
        </div>

        {/* Trust Value Badges Grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-zinc-800/80">
          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#dfb743]/10 border border-[#dfb743]/20 text-[#dfb743]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Sur-Mesure</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Étude 3D & conception personnalisée</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#dfb743]/10 border border-[#dfb743]/20 text-[#dfb743]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Devis sous 24h</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Réponse rapide & chiffrage transparent</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#dfb743]/10 border border-[#dfb743]/20 text-[#dfb743]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Finitions Prestige</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Inox 316, Alucobond & LED garantie</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-zinc-950/40 border border-zinc-800/50 backdrop-blur-sm">
            <div className="p-2.5 rounded-lg bg-[#dfb743]/10 border border-[#dfb743]/20 text-[#dfb743]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Installation & SAV</h4>
              <p className="text-xs text-zinc-400 mt-0.5">Pose sécurisée partout au Maroc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-zinc-500 animate-bounce">
        <span className="text-[11px] uppercase tracking-widest text-zinc-400 mb-1">Explorer</span>
        <ChevronDown className="w-4 h-4 text-[#dfb743]" />
      </div>
    </section>
  );
}
