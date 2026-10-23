"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MapPin,
  Calendar,
  ArrowUpRight,
  Filter,
  Eye,
  Info,
} from "lucide-react";
import {
  PROJECTS_DATA,
  CATEGORIES_FILTER,
  ProjectCategory,
  ProjectItem,
} from "@/data/projects";
import ProjectModal from "./ProjectModal";

interface ProjectsSectionProps {
  onOpenQuoteModal: (topic?: string) => void;
}

export default function ProjectsSection({ onOpenQuoteModal }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="realisations" className="py-24 sm:py-32 bg-[#0b0b0d] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio & Chantiers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Nos dernières <span className="gold-gradient-text">réalisations</span>.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
              Découvrez une sélection de devantures commerciales, enseignes lumineuses 3D et aménagements
              réalisés avec rigueur et raffinement pour nos clients professionnels.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 max-w-sm">
            <Info className="w-4 h-4 text-[#dfb743] flex-shrink-0" />
            <span>
              Sélection de références types démontrant notre champ d&apos;intervention technique et architectural.
            </span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 mr-2 flex-shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#dfb743]" />
            <span>Filtrer :</span>
          </div>

          {CATEGORIES_FILTER.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#dfb743] text-black shadow-lg shadow-amber-500/20 scale-105"
                    : "bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-[#dfb743]/50 overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col"
            >
              {/* Project Card Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/75 text-[#f5eed3] border border-[#dfb743]/30 backdrop-blur-md">
                    {project.categoryLabel}
                  </span>

                  <span className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md group-hover:bg-[#dfb743] group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
                  </span>
                </div>

                {/* Bottom image overlay meta */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#dfb743]" />
                    <span>{project.location}</span>
                  </span>

                  <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm text-zinc-300">
                    <Calendar className="w-3 h-3 text-[#dfb743]" />
                    <span>{project.year}</span>
                  </span>
                </div>
              </div>

              {/* Project Card Info Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f5eed3] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-950 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer CTA */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-[#dfb743] group-hover:text-amber-300">
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Voir les spécifications</span>
                  </span>
                  <span className="text-zinc-500 group-hover:text-[#dfb743] transition-colors">
                    Détails du projet →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-zinc-950 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left max-w-xl">
            <h4 className="text-xl font-bold text-white">
              Vous avez un projet d&apos;enseigne ou de façade en tête ?
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Transmettez-nous vos plans, photos de devanture ou logo pour recevoir une étude 3D et un chiffrage détaillé.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal()}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Demander une étude personnalisée</span>
          </button>
        </div>
      </div>

      {/* Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </section>
  );
}
