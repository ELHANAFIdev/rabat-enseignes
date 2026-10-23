"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  Send,
  CheckCircle2,
  Copy,
  AlertCircle,
} from "lucide-react";
import {
  COMPANY_CONFIG,
  buildWhatsAppLink,
  buildQuoteWhatsAppMessage,
} from "@/data/company";

interface ContactSectionProps {
  initialTopic?: string;
}

export default function ContactSection({ initialTopic }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Rabat",
    projectType: initialTopic || "Enseignes lumineuses et commerciales",
    budget: "Non spécifié",
    description: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypeOptions = [
    "Enseignes lumineuses et commerciales",
    "Signalétique professionnelle & plaques",
    "Décoration & habillage de façade Alucobond",
    "Rénovation & aménagement d'espaces",
    "Autre création sur-mesure",
  ];

  const cityOptions = [
    "Rabat",
    "Salé / Témara",
    "Casablanca",
    "Kénitra",
    "Tanger",
    "Marrakech",
    "Fès / Meknès",
    "Autre ville au Maroc",
  ];

  const budgetOptions = [
    "Non spécifié",
    "Moins de 10 000 MAD",
    "10 000 MAD – 25 000 MAD",
    "25 000 MAD – 50 000 MAD",
    "Plus de 50 000 MAD",
  ];

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Veuillez renseigner votre nom complet.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Veuillez renseigner un numéro de téléphone joignable.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      errors.phone = "Veuillez renseigner un numéro de téléphone valide.";
    }

    if (!formData.description.trim()) {
      errors.description = "Veuillez décrire brièvement votre besoin.";
    } else if (formData.description.trim().length < 10) {
      errors.description = "La description doit contenir au moins 10 caractères.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Generate formatted message
    const formattedMessage = buildQuoteWhatsAppMessage({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      city: formData.city,
      budget: formData.budget,
      description: formData.description,
    });

    // Open WhatsApp in a new tab
    const whatsappUrl = buildWhatsAppLink(formattedMessage);
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
  };

  const handleCopyMessage = () => {
    const formattedMessage = buildQuoteWhatsAppMessage({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      city: formData.city,
      budget: formData.budget,
      description: formData.description,
    });

    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0b0b0d] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#c59b27]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-[#dfb743] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devis & Contact Direct</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Concrétisons votre projet.{" "}
            <span className="gold-gradient-text">Demandez votre devis gratuit</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Remplissez ce formulaire pour être mis en relation immédiate avec notre responsable technique
            sur WhatsApp, ou contactez-nous directement par téléphone ou email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & WhatsApp Banner */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* WhatsApp Highlight Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-zinc-900 to-zinc-950 border border-emerald-800/50 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Canal WhatsApp Prioritaire</h3>
                    <p className="text-xs text-emerald-400 font-medium">Réponse rapide garantie</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  Vous avez déjà des photos de votre façade, un logo vectoriel ou un croquis ?
                  Envoyez-les nous directement via WhatsApp pour un chiffrage express.
                </p>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ouvrir une discussion WhatsApp</span>
                </a>
              </div>

              {/* Contact Info Cards */}
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#dfb743] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Téléphone
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      <a href={`tel:${COMPANY_CONFIG.phoneCall}`} className="hover:text-[#dfb743]">
                        {COMPANY_CONFIG.phoneDisplay}
                      </a>
                    </p>
                    <span className="text-xs text-zinc-400">Joignable du lundi au samedi</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-zinc-800/70">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#dfb743] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Adresse Email
                    </span>
                    <p className="text-base font-bold text-white mt-0.5">
                      <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-[#dfb743]">
                        {COMPANY_CONFIG.email}
                      </a>
                    </p>
                    <span className="text-xs text-zinc-400">Pour l&apos;envoi de cahiers des charges</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-zinc-800/70">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#dfb743] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Atelier & Bureau
                    </span>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {COMPANY_CONFIG.address}
                    </p>
                    <span className="text-xs text-zinc-400">
                      {COMPANY_CONFIG.city}, {COMPANY_CONFIG.country}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-zinc-800/70">
                  <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[#dfb743] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                      Horaires d&apos;ouverture
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {COMPANY_CONFIG.workingDays}
                    </p>
                    <span className="text-xs text-zinc-400">{COMPANY_CONFIG.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Note on genuine contact details */}
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 text-xs text-zinc-500 leading-relaxed">
              📌 <em>Note de configuration :</em> Le numéro WhatsApp et les coordonnées affichées sont
              centralisés dans le fichier <code>src/data/company.ts</code> et peuvent être mis à jour
              immédiatement avec les coordonnées officielles de votre entreprise.
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-2">Formulaire de Demande de Devis</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-8 font-light">
                Champs marqués d&apos;un astérisque (*) obligatoires. Votre message sera pré-rempli et prêt
                à être transmis en 1 clic.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-zinc-900 border border-emerald-600/40 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-xl font-bold text-white">Demande prête à l&apos;envoi !</h4>

                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Si votre application WhatsApp ne s&apos;est pas ouverte automatiquement, cliquez sur le
                    bouton ci-dessous ou copiez le texte récapitulatif.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={buildWhatsAppLink(
                        buildQuoteWhatsAppMessage({
                          fullName: formData.fullName,
                          phone: formData.phone,
                          email: formData.email,
                          projectType: formData.projectType,
                          city: formData.city,
                          budget: formData.budget,
                          description: formData.description,
                        })
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black gold-gradient-bg shadow-lg shadow-amber-500/20"
                    >
                      <MessageCircle className="w-4 h-4 text-black" />
                      <span>Ouvrir WhatsApp</span>
                    </a>

                    <button
                      onClick={handleCopyMessage}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-800 hover:bg-zinc-700 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copied ? "Texte copié !" : "Copier le message"}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline pt-4 block mx-auto"
                  >
                    Modifier les informations saisies
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Ex: Youssef El Alami"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.fullName
                            ? "border-red-500 focus:border-red-400"
                            : "border-zinc-800 focus:border-[#dfb743]"
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Numéro de téléphone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Ex: 06 61 00 00 00"
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.phone
                            ? "border-red-500 focus:border-red-400"
                            : "border-zinc-800 focus:border-[#dfb743]"
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row: Email and City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Email (Optionnel)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="contact@votre-entreprise.ma"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Ville du chantier
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743] transition-colors"
                      >
                        {cityOptions.map((c, i) => (
                          <option key={i} value={c} className="bg-zinc-900">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row: Project Type and Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Type de prestation *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({ ...formData, projectType: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743] transition-colors"
                      >
                        {projectTypeOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-zinc-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                        Budget estimatif
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743] transition-colors"
                      >
                        {budgetOptions.map((b, i) => (
                          <option key={i} value={b} className="bg-zinc-900">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Description of need */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                      Description du besoin & dimensions approximatives *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Ex: Je souhaite une enseigne lumineuse 3D rétro-éclairée pour mon nouveau restaurant à Rabat Agdal. Dimensions façade environ 6m x 1m. Ouverture prévue dans 3 semaines."
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-900 border text-white text-sm focus:outline-none transition-colors ${
                        formErrors.description
                          ? "border-red-500 focus:border-red-400"
                          : "border-zinc-800 focus:border-[#dfb743]"
                      }`}
                    />
                    {formErrors.description && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-black gold-gradient-bg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      <MessageCircle className="w-5 h-5 text-black" />
                      <span>Envoyer la demande via WhatsApp</span>
                      <Send className="w-4 h-4 text-black" />
                    </button>
                    <p className="text-center text-[11px] text-zinc-500 mt-2">
                      🔒 Vos données restent confidentielles et ne sont transmises qu&apos;à l&apos;équipe technique Rabat Enseignes.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
