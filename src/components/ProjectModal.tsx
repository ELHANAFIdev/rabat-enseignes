"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Calendar,
  Layers,
  Clock,
  Sparkles,
  MessageCircle,
  CheckCircle2,
  Maximize2,
  Building,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { buildWhatsAppLink } from "@/data/company";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuoteModal: (topic?: string) => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenQuoteModal,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = `Bonjour Rabat Enseignes, je suis intéressé par une réalisation similaire au projet "${project.title}" (${project.location}). Pouvez-vous me donner une estimation tarifaire ?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0f0f13] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 bg-[#14141a]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#dfb743]/15 text-[#dfb743] border border-[#dfb743]/30">
              {project.categoryLabel}
            </span>
            {project.isDemoProject && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-zinc-800 text-zinc-400">
                Démonstration visuelle
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fermer la vue détaillée"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Main Visual Presentation */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-zinc-800 group shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-[#dfb743]" />
                <span>{project.location}</span>
              </span>

              <span className="flex items-center gap-1.5 text-xs font-medium text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                <Calendar className="w-3.5 h-3.5 text-[#dfb743]" />
                <span>Réalisé en {project.year}</span>
              </span>
            </div>
          </div>

          {/* Project Title & Client info */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Features */}
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#dfb743] mb-3">
              Points Clés de la Réalisation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb743] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                <Layers className="w-3.5 h-3.5 text-[#dfb743]" />
                <span>Matériaux</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {project.materials.join(", ")}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#dfb743]" />
                <span>Dimensions</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {project.dimensions}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-zinc-400 text-xs mb-1">
                <Clock className="w-3.5 h-3.5 text-[#dfb743]" />
                <span>Délai de fabrication</span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                {project.executionDays}
              </p>
            </div>
          </div>

          {/* Demonstration Notice */}
          {project.isDemoProject && (
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-300/90 leading-relaxed">
              💡 <strong>Note pour le client :</strong> Cette fiche projet constitue un modèle de
              présentation réaliste. Elle sera remplacée par vos photos et détails authentiques dès
              transmission de vos chantiers.
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-zinc-800 bg-[#14141a] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(`Projet similaire : ${project.title}`);
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-transform"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Devis pour un projet similaire</span>
          </button>

          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuter de ce projet sur WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
