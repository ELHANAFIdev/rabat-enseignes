"use client";

import { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  MessageCircle,
  Send,
  AlertCircle,
  CheckCircle2,
  Copy,
} from "lucide-react";
import {
  COMPANY_CONFIG,
  buildWhatsAppLink,
  buildQuoteWhatsAppMessage,
} from "@/data/company";

interface QuoteModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export default function QuoteModal({
  isOpen,
  initialTopic = "Enseignes lumineuses et commerciales",
  onClose,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "Rabat",
    projectType: initialTopic,
    budget: "Non spécifié",
    description: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, projectType: initialTopic }));
    }
  }, [initialTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    "Autre ville",
  ];

  const validate = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Nom complet requis.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Numéro de téléphone requis.";
    }

    if (!formData.description.trim()) {
      errors.description = "Veuillez décrire brièvement votre besoin.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const formattedMessage = buildQuoteWhatsAppMessage({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      projectType: formData.projectType,
      city: formData.city,
      budget: formData.budget,
      description: formData.description,
    });

    const whatsappUrl = buildWhatsAppLink(formattedMessage);
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0f0f13] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-[#14141a]">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-[#dfb743]/15 text-[#dfb743]">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">Demande de Devis Express</h3>
              <p className="text-xs text-zinc-400">Rabat Enseignes • Réponse sous 24h</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7 overflow-y-auto max-h-[80vh]">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Demande préparée !</h4>
              <p className="text-sm text-zinc-300">
                Votre message a été transmis à WhatsApp. Si la fenêtre ne s&apos;est pas ouverte :
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
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
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-black gold-gradient-bg"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Ouvrir WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                  Nom complet *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="Ex: Youssef Bennani"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743]"
                />
                {formErrors.fullName && (
                  <p className="mt-1 text-xs text-red-400">{formErrors.fullName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="06 00 00 00 00"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743]"
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-400">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                    Ville
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743]"
                  >
                    {cityOptions.map((c, i) => (
                      <option key={i} value={c} className="bg-zinc-900">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                  Type de projet
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743]"
                >
                  {projectTypeOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-zinc-900">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                  Description du besoin & dimensions *
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Dimensions, type d'enseigne, délais souhaités..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#dfb743]"
                />
                {formErrors.description && (
                  <p className="mt-1 text-xs text-red-400">{formErrors.description}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black gold-gradient-bg shadow-lg shadow-amber-500/20 hover:scale-[1.01]"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Envoyer la demande sur WhatsApp</span>
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
