export type ProjectCategory =
  | "all"
  | "enseignes"
  | "signaletique"
  | "habillage"
  | "amenagement";

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "enseignes" | "signaletique" | "habillage" | "amenagement";
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  image: string;
  tags: string[];
  summary: string;
  description: string;
  features: string[];
  materials: string[];
  dimensions: string;
  executionDays: string;
  isDemoProject: boolean;
}

export const CATEGORIES_FILTER: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "Toutes les réalisations" },
  { key: "enseignes", label: "Enseignes Lumineuses" },
  { key: "signaletique", label: "Signalétique" },
  { key: "habillage", label: "Habillage & Façade" },
  { key: "amenagement", label: "Aménagement" },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "crusty-rabat",
    slug: "crusty-enseigne-angle-alucobond-rabat",
    title: "CRUSTY — Façade d'Angle & Double Enseigne Boîtier 3D",
    category: "enseignes",
    categoryLabel: "Enseignes Lumineuses",
    client: "CRUSTY Maroc",
    location: "Rabat",
    year: "2025",
    image: "/images/clients/crusty.png",
    tags: ["Enseigne d'Angle", "Boîtiers 3D Lumineux", "Alucobond Noir Mat"],
    summary:
      "Habillage intégral de la devanture d'angle en Alucobond noir mat, double lettrage boîtier 3D blanc et rouge rétro-éclairé avec U iconique.",
    description:
      "Conception technique et réalisation sur-mesure pour la nouvelle franchise CRUSTY : ossature d'angle en acier galvanisé, bardage Alucobond noir mat, lettrage boîtier 3D à chant relief blanc avec emblème rouge personnalisé rétro-éclairé et vitrophanie promotionnelle coordonnée.",
    features: [
      "Habillage d'angle en composite Alucobond noir mat 4mm",
      "Lettres boîtiers 3D en plexiglas diffusant haute translucidité",
      "Éclairage LED étanche IP67 haute luminosité blanc pur et rouge",
      "Vitrophanie textuelle géométrique grand format sur vitrage",
    ],
    materials: ["Alucobond 4mm noir mat", "PMMA coulé Altuglas", "LED Samsung 12V IP67"],
    dimensions: "Façade d'angle 14 m linéaire × 3,60 m de hauteur",
    executionDays: "12 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "hotel-le-m",
    slug: "hotel-le-m-rabat-facade-prestige",
    title: "HÔTEL LE M — Façade Laquée Noir & Enseigne Suspendue",
    category: "habillage",
    categoryLabel: "Habillage & Façade",
    client: "Hôtel Le M Rabat",
    location: "Rabat",
    year: "2025",
    image: "/images/clients/hotel-le-m.png",
    tags: ["Façade Laquée Noire", "Enseigne Suspendue", "Portail Verre & Inox"],
    summary:
      "Transformation de l'entrée de l'hôtel avec habillage architectural noir laqué, imposte cintrée en verre et enseigne lumineuse suspendue.",
    description:
      "Chantier de prestige pour l'entrée de l'Hôtel Le M : panneaux laqués noir grand format, verrière d'accueil avec arche cintrée, enseigne 3D rétro-éclairée suspendue et signalétique verticale rétro-éclairée.",
    features: [
      "Habillage composite noir intense haute brillance",
      "Enseigne supérieure rétro-éclairée suspendue sur tirants métalliques",
      "Plaque latérale lumineuse avec typographie cursive 'M' stylisée",
      "Porte monumentale en verre sécurit avec poignées tubulaires inox",
    ],
    materials: ["Panneaux composites laqués", "Inox 316 brossé", "LED 3000K Blanc Chaud"],
    dimensions: "Façade d'accueil 4,50 m de large × 6,20 m de hauteur",
    executionDays: "15 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "la-zone-rabat",
    slug: "la-zone-signaletique-murale-retro-eclairee",
    title: "LA ZONE — Totem Mural Rétro-éclairé Bicolore & Néon",
    category: "signaletique",
    categoryLabel: "Signalétique Professionnelle",
    client: "LA ZONE Loisirs & Sport",
    location: "Rabat",
    year: "2025",
    image: "/images/clients/la-zone.png",
    tags: ["Logo Néon Bicolore", "Lettrage 3D Noir & Or", "Signalétique Murale"],
    summary:
      "Fabrication du totem mural d'accueil avec logo circulaire signature en néon bicolore jaune/vert et lettrage en relief LA ZONE.",
    description:
      "Mise en scène visuelle du comptoir d'accueil pour le centre de loisirs LA ZONE : rosace logo découpée CNC avec halo lumineux néon vert acidulé et jaune solaire, lettrage 3D noir mat sur entretoises rétro-éclairé.",
    features: [
      "Logo circulaire thermoformé rétro-éclairé à double halo vert & or",
      "Lettrage 3D LA ZONE découpé au laser avec chant profond noir",
      "Éclairage LED indirect créant un halo continu sur mur texturé",
      "Intégration technique invisible des transformateurs",
    ],
    materials: ["Acrylique diffusant", "Aluminium thermo-laqué noir", "Néon flex LED 24V"],
    dimensions: "Ensemble mural 2,40 m × 1,80 m",
    executionDays: "6 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "zaer-park-souissi",
    slug: "17-zaer-park-souissi-enseigne-monumentale",
    title: "17 ZAER PARK — Enseigne Monumentale Dorée & Marbre",
    category: "enseignes",
    categoryLabel: "Enseignes Lumineuses",
    client: "17 Zaër Park Commercial",
    location: "Rabat, Souissi",
    year: "2025",
    image: "/images/clients/17-zaer-park.jpg",
    tags: ["Lettres Dorées 3D", "Éclairage Linéaire", "Prestige Souissi"],
    summary:
      "Conception et pose de l'enseigne monumentale en lettres dorées rétro-éclairées sur mur en marbre blanc et habillage Alucobond.",
    description:
      "Ouvrage architectural de prestige pour le centre d'affaires 17 ZAER PARK à Souissi : lettrage volumique en acier inoxydable finition or brossé, gorges lumineuses LED horizontales et intégration harmonieuse au complexe.",
    features: [
      "Lettres boîtiers inox 316 titane doré avec rétro-éclairage halo",
      "Fixations invisibles ancrées dans le parement en marbre",
      "Lignes lumineuses d'accentuation architecturale LED",
      "Finition résistante aux intempéries et rayonnement solaire",
    ],
    materials: ["Inox 316 or brossé", "LED Nichia 3500K", "Alucobond gris anthracite"],
    dimensions: "Longueur totale 6,20 m × 1,20 m",
    executionDays: "14 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "cegedim-rabat",
    slug: "cegedim-enseigne-volumique-cubes-3d",
    title: "CEGEDIM — Enseigne Volumique 3D & Cubes Lumineux",
    category: "enseignes",
    categoryLabel: "Enseignes Lumineuses",
    client: "Cegedim Maroc",
    location: "Rabat",
    year: "2025",
    image: "/images/clients/cegedim.png",
    tags: ["Logo Multinationale", "Cubes 3D Lumineux", "Structure Profilée"],
    summary:
      "Fabrication de l'enseigne officielle Cegedim avec cubes emblématiques thermoformés et rétro-éclairage LED blanc pur sur structure profilée.",
    description:
      "Réalisation de l'identité visuelle de façade pour le groupe technologique Cegedim : reproduction fidèle du logotype officiel avec cubes thermoformés bleus et gris, lettrage 3D découpé et fixation sur cadre suspendu.",
    features: [
      "Cubes de logo 3D thermoformés avec éclairage homogène sans points chauds",
      "Lettrage 'cegedim' découpé CNC avec chants laqués",
      "Cadre tubulaire thermolaqué blanc anti-corrosion",
      "Raccordement électrique sécurisé sous goulotte étanche",
    ],
    materials: ["PMMA diffusant coulé", "Profilés acier blanc laqué", "LED Osram IP67"],
    dimensions: "Longueur 4,80 m × Hauteur 0,95 m",
    executionDays: "8 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "reception-luxe",
    slug: "reception-clinique-esthetique-souissi",
    title: "Espace Beauté Souissi — Banque d'Accueil Cannelée & Logo Or",
    category: "amenagement",
    categoryLabel: "Aménagement & Rénovation",
    client: "Clinique & Espace Beauté Prestige",
    location: "Rabat, Souissi",
    year: "2025",
    image: "/images/clients/reception-luxe.png",
    tags: ["Banque Cannelée", "Logo Or Découpé Laser", "Aménagement Luxe"],
    summary:
      "Aménagement complet du hall d'accueil : comptoir arrondi à tasseaux verticaux cannelés, gorge lumineuse sous plinthe et logo monogramme or rétro-éclairé.",
    description:
      "Création sur-mesure d'un espace d'accueil d'exception : menuiserie courbe avec tasseaux cannelés laqués blanc satiné, éclairage LED chaud encastré sous comptoir et logo monogramme en laiton poli miroir rétro-éclairé sur claustra mural.",
    features: [
      "Banque de réception cintrée avec finition cannelée laquée",
      "Bandeau LED blanc chaud 2700K dissimulé sous rebord",
      "Monogramme signature découpé au laser en laiton poli miroir",
      "Sol marbre et ambiance lumineuse d'hôtel de luxe",
    ],
    materials: ["Bois MDF hydrofuge laqué", "Laiton poli miroir", "Profilés LED encastrés"],
    dimensions: "Banque 2,80 m de linéaire × 1,15 m de hauteur",
    executionDays: "10 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "champion-express",
    slug: "champion-express-supermarche-enseigne-vitrophanie",
    title: "CHAMPION EXPRESS — Caisson Bandeau & Vitrophanie Complète",
    category: "signaletique",
    categoryLabel: "Signalétique Professionnelle",
    client: "Champion Express",
    location: "Rabat",
    year: "2025",
    image: "/images/clients/champion-express.png",
    tags: ["Vitrophanie Intégrale", "Caisson Bandeau Lumineux", "Supermarché"],
    summary:
      "Enseigne bandeau grand format et habillage vitrophanie thématique coloré (Alimentaire, Boissons, Frais, etc.) pour vitrine de supermarché.",
    description:
      "Habillage commercial intégral pour la supérette Champion Express : enseigne bandeau à rétro-éclairage uniforme, vitrophanie imprimée et découpée microperforée sur baies vitrées et signalétique d'accès.",
    features: [
      "Enseigne supérieure bandeau à face diffusante PMMA",
      "Film adhésif vitrophanie teinté dans la masse et imprimé HD",
      "Pictogrammes thématiques signalétiques pour chaque rayon",
      "Visibilité nocturne et respect de la luminosité intérieure",
    ],
    materials: ["Aluminium 2mm laqué", "Film polymère adhésif longue durée", "LED modules 12V"],
    dimensions: "Bandeau 6,50 m × 1,00 m & vitrine 16 m²",
    executionDays: "9 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "dolphin-marine-event",
    slug: "dolphin-marine-group-stand-evenementiel",
    title: "DOLPHIN MARINE — Stand Événementiel & Enseigne Ancre 3D",
    category: "amenagement",
    categoryLabel: "Aménagement & Rénovation",
    client: "Dolphin Marine Group",
    location: "Maroc",
    year: "2025",
    image: "/images/clients/dolphin-marine.png",
    tags: ["Stand Événementiel", "Enseigne Circulaire 3D", "Agencement Salon"],
    summary:
      "Aménagement complet de stand professionnel avec fronton lumineux, enseigne ancre 3D rétro-éclairée et structure architecturale bois et bleu.",
    description:
      "Conception et montage de stand sur-mesure pour salon professionnel : fronton suspendu avec enseigne volumique DOLPHIN MARINE GROUP, logo ancre rétro-éclairé, cloisons ajourées et comptoirs d'accueil intégrés.",
    features: [
      "Fronton suspendu avec enseigne circulaire thermoformée rétro-éclairée",
      "Lettrage 3D lumineux en relief bleu marine et blanc",
      "Mobilier et cloisons aux couleurs institutionnelles de l'entreprise",
      "Montage et démontage rapide pour événementiel",
    ],
    materials: ["Structure aluminium modulaire", "Plexiglas diffusant", "Bois mélaminé"],
    dimensions: "Stand 36 m² (6 m × 6 m)",
    executionDays: "7 jours ouvrés",
    isDemoProject: false,
  },
  {
    id: "atelier-lumiere",
    slug: "atelier-lumiere-casablanca",
    title: "Atelier Lumière — Façade & Lettrage 3D Doré",
    category: "enseignes",
    categoryLabel: "Enseignes Lumineuses",
    client: "Atelier Lumière Maroc",
    location: "Casablanca, Quartier Gautier",
    year: "2025",
    image: "/images/projects/project-concept-store.jpg",
    tags: ["Lettres 3D", "Rétro-éclairage chaud", "Marbre & Inox"],
    summary:
      "Conception et fabrication d'une enseigne de prestige à lettres découpées 3D rétro-éclairées en laiton brossé sur façade en marbre noir.",
    description:
      "Projet architectural complet comprenant le lettrage volumique en acier inoxydable laitonné, l'éclairage halo LED haute densité 3000K, et l'intégration discrète des alimentations électriques.",
    features: [
      "Lettres boîtiers en inox poli miroir et face laiton",
      "Éclairage LED halo indirect 3000K anti-éblouissement",
      "Structure de fixation invisible adaptée au parement en pierre",
      "Pose de nuit pour préserver l'accès piétonnier",
    ],
    materials: ["Inox 316 doré", "LED Samsung 12V IP67", "Acrylique diffusant"],
    dimensions: "Longueur 5,80 m × Hauteur 0,90 m",
    executionDays: "12 jours ouvrés",
    isDemoProject: true,
  },
  {
    id: "agdal-roasters",
    slug: "agdal-roasters-specialty-coffee",
    title: "Agdal Roasters — Enseigne Boîtier & Cadre Acier",
    category: "enseignes",
    categoryLabel: "Enseignes Lumineuses",
    client: "Agdal Roasters Café",
    location: "Rabat, Agdal",
    year: "2025",
    image: "/images/projects/project-cafe-agdal.jpg",
    tags: ["Enseigne Lumineuse", "Néon LED", "Style Industriel Chic"],
    summary:
      "Enseigne lumineuse haut de gamme pour coffee shop de spécialité, lettres en relief dorées et bandeau supérieur rétro-éclairé.",
    description:
      "Fabrication d'une enseigne principale sur bandeau noir mat avec lettres boîtiers lumineuses à chant doré, caisson de sous-titre micro-perforé et éclairage d'ambiance nocturne puissant.",
    features: [
      "Bandeau en Alucobond noir mat thermo-laqué",
      "Lettres 3D thermoformées avec chants en laiton brossé",
      "Interrupteur crépusculaire automatique programmable",
      "Haute visibilité à l'angle de deux artères commerçantes",
    ],
    materials: ["Alucobond 4mm", "Plexiglas coulé", "LED 4000K Blanc Chaud"],
    dimensions: "Enseigne principale 7,20 m × 1,10 m",
    executionDays: "10 jours ouvrés",
    isDemoProject: true,
  },
  {
    id: "cabinet-medical-notaire",
    slug: "cabinet-medical-notaire-hay-riad",
    title: "Pôle Médical & Juridique — Plaques de Prestige & Vitrophanie",
    category: "signaletique",
    categoryLabel: "Signalétique Professionnelle",
    client: "Clinique Médicale & Étude Notariale",
    location: "Rabat, Hay Riad",
    year: "2025",
    image: "/images/projects/project-cabinet-medical.jpg",
    tags: ["Plaques Laiton", "Vitrophanie Dépolie", "Prestige"],
    summary:
      "Ensemble signalétique complet : plaques murales en laiton brossé massif gravé et film vitrophanie dépoli géométrique pour la confidentialité.",
    description:
      "Réalisation sur mesure pour un cabinet de prestige : gravure chimique et remplissage émail noir des textes réglementaires, entretoises invisibles et vitrophanie décorative aux motifs géométriques inspirés du patrimoine marocain.",
    features: [
      "Plaques en laiton massif 3mm brossé et verni polyuréthane",
      "Film adhésif dépoli aspect sablé haute durabilité 3M",
      "Motifs géométriques contemporains découpés au plotter",
      "Totem d'entrée secondaire pour le guidage des patients",
    ],
    materials: ["Laiton massif 3mm", "Film dépoli 3M", "Entretoises inox"],
    dimensions: "Plaques 60 × 80 cm & vitrophanie 14 m²",
    executionDays: "7 jours ouvrés",
    isDemoProject: true,
  },
  {
    id: "elara-boutique",
    slug: "elara-boutique-rabat",
    title: "Elara Boutique — Habillage Façade & Moucharabieh Laser",
    category: "habillage",
    categoryLabel: "Habillage & Façade",
    client: "Elara Mode Rabat",
    location: "Rabat, Centre-Ville",
    year: "2025",
    image: "/images/services/service-habillage.jpg",
    tags: ["Alucobond Gris Anthracite", "Découpe Laser", "Lignes LED"],
    summary:
      "Rénovation complète d'une façade commerciale sur deux niveaux avec panneaux composites Alucobond et claustras géométriques rétro-éclairés.",
    description:
      "Transformation spectaculaire d'une devanture vétuste : pose d'une sous-structure métallique rigide, découpe laser CNC de motifs contemporains et intégration de gorges lumineuses LED verticales soulignant les volumes du bâtiment.",
    features: [
      "Façade intégrale en Alucobond gris anthracite mat 4mm",
      "Panneaux moucharabieh découpés au laser avec rétro-éclairage",
      "Lignes lumineuses LED verticales encastrées IP67",
      "Enseigne principale intégrée en lettres dorées lumineuses",
    ],
    materials: ["Alucobond PVDF 4mm", "Ossature acier galvanisé", "Profilés LED"],
    dimensions: "Façade 8,50 m de hauteur × 12 m de linéaire",
    executionDays: "18 jours ouvrés",
    isDemoProject: true,
  },
  {
    id: "totem-cfc",
    slug: "totem-monumental-casablanca-finance-city",
    title: "Totem Monumental — Signalétique Pylône Multipostes",
    category: "signaletique",
    categoryLabel: "Signalétique Professionnelle",
    client: "Parc d'Affaires Casablanca Finance City",
    location: "Casablanca, CFC",
    year: "2025",
    image: "/images/projects/project-totem-cfc.jpg",
    tags: ["Totem Lumineux", "Signalétique Pylône", "Zone d'Affaires"],
    summary:
      "Étude technique, renfort structurel et fabrication d'un totem monumental lumineux de 6 mètres avec logos d'entreprises interchangeables.",
    description:
      "Ouvrage d'ingénierie publicitaire : fondations en béton armé, ossature interne en IPE, habillage aluminium thermolaqué, bandeaux lumineux latéraux et caissons modulaires facilitant la mise à jour des logos des résidents.",
    features: [
      "Hauteur monumentale de 6 mètres avec calcul de résistance au vent",
      "Plaques modulaires en PMMA diffusant facilement interchangeables",
      "Rétro-éclairage LED uniforme sans ombres portées",
      "Maintenance aisée via trappe technique sécurisée",
    ],
    materials: ["Acier galvanisé", "Aluminium 2mm laqué", "LED Philips 24V"],
    dimensions: "Hauteur 6,00 m × Largeur 1,60 m × Épaisseur 0,40 m",
    executionDays: "21 jours ouvrés",
    isDemoProject: true,
  },
  {
    id: "oliveraie-lounge",
    slug: "oliveraie-lounge-rabat-souissi",
    title: "L'Oliveraie Lounge — Bardage Bois Noble & Lettrage Néon",
    category: "amenagement",
    categoryLabel: "Aménagement & Rénovation",
    client: "L'Oliveraie Restaurant & Lounge",
    location: "Rabat, Souissi",
    year: "2025",
    image: "/images/projects/project-restaurant-lounge.jpg",
    tags: ["Bardage Bois Noble", "Lettrage Lumineux", "Aménagement Extérieur"],
    summary:
      "Aménagement de l'entrée et de la façade avec claustras en teck massif vertical, enseigne lumineuse chaleureuse et éclairage d'ambiance.",
    description:
      "Création d'une expérience d'accueil exclusive pour un restaurant gastronomique à Rabat : pose de claire-voie en bois traité extérieur, lettrage 3D rétro-éclairé chaud et intégration d'éclairage architectural rasant.",
    features: [
      "Habillage mural en tasseaux de bois dur imputrescible",
      "Enseigne lumineuse suspendue à lettres laiton rétro-éclairées",
      "Éclairage rasant et intégration paysagère des jardinières",
      "Portes vitrées avec encadrement doré assorti",
    ],
    materials: ["Bois teck massif", "Inox teinté or", "LED 2700K Extra Chaud"],
    dimensions: "Linéaire façade 11 m × 4,20 m",
    executionDays: "15 jours ouvrés",
    isDemoProject: true,
  },
];
