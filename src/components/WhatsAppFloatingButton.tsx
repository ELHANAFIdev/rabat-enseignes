"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink } from "@/data/company";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="relative flex items-center gap-2 p-3 rounded-2xl bg-[#0f0f13] border border-emerald-500/40 shadow-2xl shadow-black/80 text-xs text-zinc-200 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
          <span className="font-medium">
            Besoin d&apos;un conseil ou devis express ? Discutez directement avec notre atelier.
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="p-1 text-zinc-500 hover:text-white rounded-lg transition-colors flex-shrink-0"
            aria-label="Fermer la bulle WhatsApp"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Rabat Enseignes sur WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-950/80 hover:bg-emerald-500 transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-emerald-500/20"
      >
        <MessageCircle className="w-7 h-7 transform group-hover:rotate-12 transition-transform" />

        {/* Ping animation ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none" />
      </a>
    </div>
  );
}
