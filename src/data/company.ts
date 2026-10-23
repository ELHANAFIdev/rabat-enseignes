export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  whatsappNumber: string; // international format without + or spaces, e.g. '212600000000'
  whatsappDisplay: string;
  phoneCall: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  country: string;
  workingHours: string;
  workingDays: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  defaultWhatsAppGreeting: string;
}

export const COMPANY_CONFIG: CompanyConfig = {
  name: "Rabat Enseignes",
  legalName: "Rabat Enseignes SARL",
  tagline: "Enseignes, Signalétique & Aménagement Commercial",
  shortDescription:
    "Spécialiste marocain des enseignes lumineuses, de la signalétique professionnelle et de l'aménagement sur mesure pour commerces et entreprises.",
  fullDescription:
    "Basée à Rabat, Rabat Enseignes conçoit, fabrique et installe des enseignes lumineuses haut de gamme, des systèmes de signalétique architecturale, des habillages de façade en Alucobond et des aménagements commerciaux sur mesure partout au Maroc.",
  whatsappNumber: "212772387672", // Numéro WhatsApp officiel Rabat Enseignes
  whatsappDisplay: "+212 7 72 38 76 72",
  phoneCall: "+212772387672",
  phoneDisplay: "+212 7 72 38 76 72",
  email: "contact@rabat-enseignes.ma",
  address: "Avenue Mohammed VI, Souissi / Agdal",
  city: "Rabat",
  country: "Maroc",
  workingHours: "08h30 – 19h00",
  workingDays: "Lundi au Samedi",
  instagramUrl: "https://instagram.com/rabatenseignes",
  facebookUrl: "https://facebook.com/rabatenseignes",
  linkedinUrl: "https://linkedin.com/company/rabat-enseignes",
  defaultWhatsAppGreeting:
    "Bonjour Rabat Enseignes, je souhaite obtenir un devis et des informations pour mon projet d'enseigne/aménagement.",
};

/**
 * Builds a direct, clean WhatsApp click-to-chat URL with pre-filled French text.
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COMPANY_CONFIG.defaultWhatsAppGreeting;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

/**
 * Builds a formatted quote request message for WhatsApp.
 */
export function buildQuoteWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  email?: string;
  projectType: string;
  city?: string;
  budget?: string;
  description: string;
}): string {
  return [
    `✨ *NOUVELLE DEMANDE DE DEVIS — RABAT ENSEIGNES* ✨`,
    ``,
    `👤 *Client :* ${data.fullName}`,
    `📞 *Téléphone :* ${data.phone}`,
    data.email ? `✉️ *Email :* ${data.email}` : null,
    data.city ? `📍 *Ville du projet :* ${data.city}` : null,
    `🏷️ *Type de prestation :* ${data.projectType}`,
    data.budget ? `💰 *Budget indicatif :* ${data.budget}` : null,
    ``,
    `📝 *Description du besoin :*`,
    `${data.description}`,
    ``,
    `---`,
    `_Message généré depuis le site web rabat-enseignes.ma_`,
  ]
    .filter(Boolean)
    .join("\n");
}
