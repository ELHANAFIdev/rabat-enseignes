"use client";

import Image from "next/image";
import Link from "next/link";
import { COMPANY_CONFIG } from "@/data/company";

interface LogoProps {
  className?: string;
  variant?: "header" | "footer" | "hero";
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  variant = "header",
  showTagline = true,
}: LogoProps) {
  return (
    <Link
      href="#accueil"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Rabat Enseignes - Retour à l'accueil"
    >
      {/* Official Company Logo Mark */}
      <div className="relative flex-shrink-0 overflow-hidden rounded-lg bg-white p-1 shadow-md shadow-black/40 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.jpg"
          alt="Rabat Enseignes Logo"
          width={variant === "footer" ? 54 : 46}
          height={variant === "footer" ? 54 : 46}
          className="h-auto w-auto object-contain"
          priority
        />
      </div>

      {/* Brand Wordmark & Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold tracking-tight text-white text-lg sm:text-xl font-heading uppercase leading-none">
            RABAT
          </span>
          <span className="font-light tracking-widest text-[#dfb743] text-lg sm:text-xl font-heading uppercase leading-none">
            ENSEIGNES
          </span>
        </div>

        {showTagline && (
          <span className="text-[10px] sm:text-[11px] tracking-wider text-zinc-400 font-medium uppercase mt-0.5">
            Enseignes • Publicité • Habillage
          </span>
        )}
      </div>
    </Link>
  );
}
