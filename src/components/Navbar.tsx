"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";
import { COMPANY_CONFIG, buildWhatsAppLink } from "@/data/company";

interface NavbarProps {
  onOpenQuoteModal: (topic?: string) => void;
}

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#clients", label: "Clients & Références" },
  { href: "#services", label: "Nos services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#pourquoi-nous", label: "Pourquoi nous" },
  { href: "#a-propos", label: "À propos" },
  { href: "#methode", label: "Notre méthode" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#0e0e12] border-b border-zinc-800/80 text-xs text-zinc-400 py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-[#dfb743]" />
              <span>{COMPANY_CONFIG.city}, Maroc — Interventions dans tout le Royaume</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>{COMPANY_CONFIG.workingDays} : {COMPANY_CONFIG.workingHours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONFIG.phoneCall}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfb743]" />
              <span>{COMPANY_CONFIG.phoneDisplay}</span>
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0b0d]/95 backdrop-blur-xl border-b border-zinc-800/90 shadow-2xl shadow-black/60 py-3"
            : "bg-[#0b0b0d]/80 backdrop-blur-md border-b border-zinc-900/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#dfb743] bg-zinc-900/90 shadow-sm border border-[#dfb743]/20"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/40 hover:border-emerald-600 transition-all duration-200"
              title="Discuter directement sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Demander un devis</span>
              <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-black gold-gradient-bg sm:hidden"
            >
              Devis
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#dfb743]/50"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#dfb743]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer container */}
          <div className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-[#0e0e12] border-l border-zinc-800 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-6 flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-zinc-900 text-[#dfb743] font-semibold border-l-4 border-[#dfb743]"
                          : "text-zinc-300 hover:bg-zinc-900/60 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions inside Drawer */}
            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Demander un devis gratuit</span>
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/40"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Écrire sur WhatsApp</span>
              </a>

              <div className="pt-2 text-center text-xs text-zinc-500">
                <span>{COMPANY_CONFIG.city}, Maroc</span>
                <span className="mx-2">•</span>
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
