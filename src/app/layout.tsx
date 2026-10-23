import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { COMPANY_CONFIG } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rabat-enseignes.ma"),
  title: {
    default: "Rabat Enseignes | Enseignes, Signalétique & Aménagement",
    template: "%s | Rabat Enseignes",
  },
  description:
    "Découvrez Rabat Enseignes, spécialiste des enseignes commerciales et lumineuses, de la signalétique professionnelle, de la décoration et de l'aménagement sur mesure à Rabat et partout au Maroc.",
  keywords: [
    "enseigne lumineuse Rabat",
    "signalétique professionnelle Maroc",
    "habillage façade Alucobond",
    "lettres boîtiers 3D Maroc",
    "aménagement commercial Rabat",
    "fabricant enseigne Maroc",
    "totem publicitaire Maroc",
    "décoration commerciale Rabat",
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.legalName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://rabat-enseignes.ma",
    siteName: COMPANY_CONFIG.name,
    title: "Rabat Enseignes | L'Art de l'Enseigne & de l'Aménagement Commercial",
    description:
      "Conception, fabrication artisanale et installation d'enseignes lumineuses 3D, habillage de façade Alucobond et signalétique de prestige à Rabat et partout au Maroc.",
    images: [
      {
        url: "/images/hero/hero-storefront.jpg",
        width: 1200,
        height: 630,
        alt: "Rabat Enseignes - Réalisations d'enseignes commerciales haut de gamme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabat Enseignes | Enseignes & Aménagement Commercial",
    description:
      "Spécialiste marocain des enseignes lumineuses, habillage de façade Alucobond et signalétique architecturale.",
    images: ["/images/hero/hero-storefront.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0b0b0d] text-zinc-100 font-sans antialiased selection:bg-[#c59b27] selection:text-black">
        {children}
      </body>
    </html>
  );
}
