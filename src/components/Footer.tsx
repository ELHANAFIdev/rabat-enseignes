"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  MessageCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Logo from "./Logo";
import { COMPANY_CONFIG, buildWhatsAppLink } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-[#070709] border-t border-zinc-800/80 text-zinc-400 relative overflow-hidden">
      {/* Top subtle gold accent line */}
      <div className="h-1 w-full gold-gradient-bg opacity-70" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Presentation Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="footer" />

            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              {COMPANY_CONFIG.fullDescription}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Atelier</span>
              </a>

              <a
                href={`tel:${COMPANY_CONFIG.phoneCall}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#dfb743]" />
                <span>{COMPANY_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb743]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#accueil" className="hover:text-[#dfb743] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#dfb743] transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="#clients" className="hover:text-[#dfb743] transition-colors">
                  Clients & Références
                </Link>
              </li>
              <li>
                <Link href="#realisations" className="hover:text-[#dfb743] transition-colors">
                  Réalisations & Portfolio
                </Link>
              </li>
              <li>
                <Link href="#pourquoi-nous" className="hover:text-[#dfb743] transition-colors">
                  Pourquoi nous choisir
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="hover:text-[#dfb743] transition-colors">
                  À propos de l&apos;Atelier
                </Link>
              </li>
              <li>
                <Link href="#methode" className="hover:text-[#dfb743] transition-colors">
                  Notre méthode
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#dfb743] transition-colors">
                  Demande de devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb743]" />
              <span>Nos Prestations</span>
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="hover:text-[#dfb743] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2 text-xs text-zinc-500">
                Interventions à Rabat, Casablanca, Marrakech, Tanger et dans tout le Royaume du Maroc.
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#dfb743]" />
              <span>Coordonnées</span>
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#dfb743] flex-shrink-0 mt-0.5" />
              <span>{COMPANY_CONFIG.address}, {COMPANY_CONFIG.city}, {COMPANY_CONFIG.country}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#dfb743] flex-shrink-0" />
              <a href={`tel:${COMPANY_CONFIG.phoneCall}`} className="hover:text-white">
                {COMPANY_CONFIG.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-[#dfb743] flex-shrink-0" />
              <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white">
                {COMPANY_CONFIG.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-[#dfb743] flex-shrink-0 mt-0.5" />
              <span>
                {COMPANY_CONFIG.workingDays} : {COMPANY_CONFIG.workingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} <strong>{COMPANY_CONFIG.name}</strong> ({COMPANY_CONFIG.legalName}).
            Tous droits réservés. Réalisation professionnelle pour entreprises au Maroc.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#dfb743]" />
              <span>Qualité & Finitions Garanties</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-[#dfb743] transition-all flex items-center gap-1.5"
              aria-label="Retour en haut de page"
            >
              <span>Haut</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
