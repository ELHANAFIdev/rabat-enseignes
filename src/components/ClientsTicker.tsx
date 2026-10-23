"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { CLIENTS_DATA } from "@/data/clients";

export default function ClientsTicker() {
  // Duplicate for smooth seamless loop
  const duplicatedClients = [...CLIENTS_DATA, ...CLIENTS_DATA];

  return (
    <div className="relative py-8 bg-[#0e0e12] border-y border-zinc-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#dfb743]/5 via-transparent to-[#dfb743]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#dfb743] animate-ping" />
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-300">
              Ils nous ont fait confiance
            </span>
            <span className="hidden sm:inline-block text-xs text-zinc-500">•</span>
            <span className="hidden sm:inline-block text-xs text-zinc-400">
              Grandes enseignes, institutions et commerces d&apos;exception
            </span>
          </div>

          <Link
            href="#clients"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#dfb743] hover:text-[#f3d97b] transition-colors"
          >
            <span>Voir toutes les références avec photos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Infinite scrolling ticker */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        {/* Gradient edge masks for soft fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0e0e12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0e0e12] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee gap-4 sm:gap-6">
          {duplicatedClients.map((client, index) => (
            <Link
              key={`${client.id}-${index}`}
              href="#clients"
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-[#dfb743]/50 transition-all duration-300 hover:scale-105 hover:bg-zinc-800/60 shadow-md backdrop-blur-sm flex-shrink-0"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#dfb743]/60 group-hover:bg-[#dfb743] transition-colors flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-white tracking-wide group-hover:text-[#dfb743] transition-colors">
                  {client.brand}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {client.categoryBadge}
                </span>
              </div>
              {client.realPhoto && (
                <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                  RÉEL
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
