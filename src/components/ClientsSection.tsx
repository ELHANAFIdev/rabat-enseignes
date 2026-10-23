"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  X,
  Camera,
  Building2,
  Layers,
  ArrowRight,
  Filter,
} from "lucide-react";
import { CLIENTS_DATA, ClientItem } from "@/data/clients";
import { COMPANY_CONFIG, buildWhatsAppLink } from "@/data/company";

interface ClientsSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function ClientsSection({ onOpenQuoteModal }: ClientsSectionProps) {
  const [selectedClient, setSelectedClient] = useState<ClientItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: "Toutes les références" },
    { key: "real", label: "📸 Photos Réelles d'Atelier" },
    { key: "institution", label: "Institutions & Sièges" },
    { key: "food", label: "Restauration & Franchises" },
    { key: "prestige", label: "Commerces & Hôtels" },
    { key: "loisirs", label: "Loisirs & Divertissement" },
  ];

  const filteredClients = CLIENTS_DATA.filter((client) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "real") return client.realPhoto === true;
    if (activeFilter === "food") return client.id === "crusty" || client.id === "panda";
    if (activeFilter === "institution")
      return client.id === "cdg" || client.id === "masen" || client.id === "fondation-hiba" || client.id === "cegedim";
    if (activeFilter === "prestige")
      return client.id === "17-zaer-park" || client.id === "dxi" || client.id === "hotel-le-m" || client.id === "reception-luxe" || client.id === "champion-express";
    if (activeFilter === "loisirs")
      return client.id === "royal-kids" || client.id === "la-zone" || client.id === "dolphin-marine";
    return true;
  });

  const handleWhatsAppInquiry = (clientName: string) => {
    const text = `Bonjour Rabat Enseignes, j'ai vu votre réalisation pour *${clientName}* sur votre site et je souhaite obtenir un devis pour un projet similaire.`;
    window.open(buildWhatsAppLink(text), "_blank");
  };

  return (
    <section id="clients" className="py-24 sm:py-32 bg-[#09090b] relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#dfb743]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#c59b27]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Références de Prestige</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ils nous ont fait <span className="gold-gradient-text">confiance</span>.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              De prestigieuses institutions marocaines, franchises nationales et centres d&apos;affaires nous confient la conception, la fabrication et l&apos;installation de leurs enseignes et habillages de façade.
            </p>
          </div>

          {/* Quick WhatsApp Action Callout */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 backdrop-blur-md">
            <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-zinc-400 block font-medium">WhatsApp direct atelier :</span>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{COMPANY_CONFIG.whatsappDisplay}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#dfb743]" />
            <span>Secteur :</span>
          </div>

          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#dfb743] text-black shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clients Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="group cursor-pointer rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#dfb743]/60 overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={client.image}
                  alt={`Réalisation Rabat Enseignes pour ${client.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

                {/* Badges on top of image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700/80 text-[11px] font-bold text-[#f5eed3] uppercase tracking-wider">
                    {client.categoryBadge}
                  </span>

                  {client.realPhoto ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-[11px] font-bold text-emerald-300 shadow-lg backdrop-blur-md">
                      <Camera className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Photo Chantier Réel</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-700/60 text-[10px] font-semibold text-zinc-300 backdrop-blur-md">
                      <Building2 className="w-3 h-3 text-[#dfb743]" />
                      <span>Référence</span>
                    </span>
                  )}
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-[#dfb743]" />
                  <span>{client.location}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-zinc-950/60">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-[#dfb743] transition-colors">
                      {client.name}
                    </h3>
                    <span className="text-xs text-zinc-500 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>

                  <p className="text-xs font-medium text-[#dfb743]/90 mb-3">
                    {client.category}
                  </p>

                  <p className="text-sm text-zinc-300 line-clamp-2 font-light leading-relaxed mb-4">
                    {client.description}
                  </p>

                  {/* Realization scope tags */}
                  <div className="space-y-1.5 mb-4">
                    {client.services.slice(0, 2).map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#dfb743] flex-shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    Détails du chantier & devis
                  </span>
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-[#dfb743] group-hover:bg-[#dfb743] group-hover:text-black transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Banner for WhatsApp Call */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#141419] to-zinc-950 border border-[#dfb743]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#dfb743]/15 border border-[#dfb743]/30 text-xs font-bold text-[#dfb743] uppercase tracking-wider mb-2">
                Votre Enseigne Entre de Bonnes Mains
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Vous avez un projet pour votre commerce ou entreprise ?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-zinc-300 max-w-2xl font-light">
                Rejoignez PANDA, CRUSTY, MASEN, CDG et nos nombreux clients à Rabat et partout au Maroc. Bénéficiez d&apos;une étude technique 3D et d&apos;un devis sous 24h.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ({COMPANY_CONFIG.whatsappDisplay})</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal("Projet Enseigne & Façade")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-black gold-gradient-bg shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform"
              >
                <span>Demander un devis atelier</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Client Detail Modal */}
      {selectedClient && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedClient(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0f0f13] border border-zinc-800 shadow-2xl flex flex-col no-scrollbar"
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedClient(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black text-zinc-400 hover:text-white border border-zinc-700 transition-colors"
              aria-label="Fermer la vue détaillée"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-72 sm:h-96 w-full bg-zinc-950">
              <Image
                src={selectedClient.image}
                alt={selectedClient.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-black/40" />

              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-700 text-xs font-bold text-[#f5eed3]">
                  {selectedClient.categoryBadge}
                </span>

                {selectedClient.realPhoto && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-500/50 text-xs font-bold text-emerald-300 backdrop-blur-md">
                    <Camera className="w-4 h-4 text-emerald-400" />
                    <span>Photo Réelle de Chantier</span>
                  </span>
                )}
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#dfb743]" />
                  <span>{selectedClient.location}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedClient.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfb743] mb-2">
                  Description de la réalisation
                </h4>
                <p className="text-base text-zinc-300 font-light leading-relaxed">
                  {selectedClient.description}
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                  Prestations réalisées par Rabat Enseignes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedClient.services.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#dfb743] flex-shrink-0" />
                      <span className="text-sm text-zinc-200">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-zinc-400">
                  Besoin d&apos;un projet similaire pour votre établissement ?
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleWhatsAppInquiry(selectedClient.name)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/60 transition-transform active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Discuter sur WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      const topic = `Projet similaire à ${selectedClient.name}`;
                      setSelectedClient(null);
                      onOpenQuoteModal(topic);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black gold-gradient-bg transition-transform active:scale-95"
                  >
                    <span>Demander un devis atelier</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
