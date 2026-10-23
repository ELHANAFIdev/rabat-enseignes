export interface ClientItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  categoryBadge: string;
  location: string;
  image: string;
  realPhoto?: boolean;
  services: string[];
  description: string;
  highlight: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: "17-zaer-park",
    name: "17 ZAER PARK",
    brand: "17 ZAER PARK",
    category: "Pôle Commercial & Espaces d'Affaires Prestige",
    categoryBadge: "Centre Commercial Prestige",
    location: "Rabat, Souissi (Route des Zaërs)",
    image: "/images/clients/17-zaer-park.jpg",
    services: [
      "Enseignes monumentales 3D dorées rétro-éclairées",
      "Habillage façade en Alucobond noir mat",
      "Éclairage architectural linéaire LED encastré",
    ],
    description:
      "Conception et fabrication de l'enseigne monumentale en lettres découpées dorées rétro-éclairées sur parement en marbre, accompagnée de l'habillage contemporain en Alucobond.",
    highlight: "Enseigne monumentale & Façade Souissi",
  },
  {
    id: "cdg",
    name: "CDG (Caisse de Dépôt et de Gestion)",
    brand: "CDG",
    category: "Institution Publique & Pôle Financier",
    categoryBadge: "Institutionnel & Finance",
    location: "Rabat, Hay Riad",
    image: "/images/clients/cdg.jpg",
    services: [
      "Signalétique institutionnelle de prestige",
      "Lettrage inox brossé 3D rétro-éclairé",
      "Totems d'accueil & guidage des visiteurs",
    ],
    description:
      "Réalisation du lettrage volumique de grande dimension en acier inoxydable haute finition et de la signalétique directionnelle architecturale pour le siège de la CDG.",
    highlight: "Signalétique Siège Institutionnel",
  },
  {
    id: "masen",
    name: "MASEN (Moroccan Agency for Sustainable Energy)",
    brand: "MASEN",
    category: "Énergie Renouvelable & Développement Durable",
    categoryBadge: "Énergie & Technologie",
    location: "Rabat",
    image: "/images/clients/masen.jpg",
    services: [
      "Totem lumineux monolithique d'entrée",
      "Enseigne de façade en relief avec rétro-éclairage",
      "Marquage architectural éco-efficace",
    ],
    description:
      "Fabrication du totem d'entrée monolithique à rétro-éclairage LED basse consommation et des enseignes volumétriques pour le siège marocain des énergies durables.",
    highlight: "Totem Monolithique & Enseignes Siège",
  },
  {
    id: "crusty",
    name: "CRUSTY",
    brand: "CRUSTY",
    category: "Restauration Rapide & Franchise Food",
    categoryBadge: "Restauration Rapide Gourmet",
    location: "Rabat",
    image: "/images/clients/crusty.png",
    realPhoto: true,
    services: [
      "Double enseigne d'angle 3D blanches et rouges",
      "Lettre boîtier 'U' rouge iconique rétro-éclairée",
      "Habillage façade Alucobond noir mat et vitrophanie",
    ],
    description:
      "Habillage intégral de la devanture d'angle en Alucobond noir mat, enseignes volumétriques blanches et rouges lumineuses CRUSTY, et vitrophanie d'impact.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "panda",
    name: "PANDA",
    brand: "PANDA",
    category: "Restauration Asiatique & Concept Lounge",
    categoryBadge: "Food & Concept Store",
    location: "Rabat",
    image: "/images/clients/panda.jpg",
    services: [
      "Emblème Panda géométrique en néon LED",
      "Lettres 3D rétro-éclairées ton or chaud",
      "Façade Alucobond et éclairage d'ambiance",
    ],
    description:
      "Création complète de la signature visuelle de façade : logo géométrique en néon LED sur mesure et lettrage volumique chaleureux sur structure métallique surbaissée.",
    highlight: "Enseigne Néon LED & Lettrage 3D",
  },
  {
    id: "royal-kids",
    name: "ROYAL KIDS",
    brand: "ROYAL KIDS",
    category: "Parc de Jeux Couvert & Loisirs Enfantins",
    categoryBadge: "Parc Récréatif & Loisirs",
    location: "Rabat / Maroc",
    image: "/images/clients/royal-kids.jpg",
    services: [
      "Grande enseigne lumineuse multicolore",
      "Couronne royale 3D lumineuse",
      "Signalétique intérieure sécurisée et guidage",
    ],
    description:
      "Fabrication de la devanture spectaculaire avec lettrage boîtier grand format à diffusion frontale vive et couronne dorée lumineuse haute intensité.",
    highlight: "Enseigne Multicolore & Couronne 3D",
  },
  {
    id: "fondation-hiba",
    name: "FONDATION HIBA",
    brand: "FONDATION HIBA",
    category: "Fondation Culturelle & Pôle Artistique",
    categoryBadge: "Culture & Événementiel",
    location: "Rabat, Avenue Mohammed V (Cinéma Renaissance)",
    image: "/images/clients/fondation-hiba.jpg",
    services: [
      "Rosace marocaine géométrique rétro-éclairée",
      "Plaques et lettrage en laiton brossé",
      "Signalétique architecturale discrète",
    ],
    description:
      "Conception et mise en lumière de la signature visuelle associant tradition architecturale et technologies lumineuses contemporaines pour les espaces de la Fondation.",
    highlight: "Rosace Lumineuse & Laiton de Prestige",
  },
  {
    id: "la-zone",
    name: "LA ZONE",
    brand: "LA ZONE",
    category: "Espace Divertissement, Sport & Loisirs",
    categoryBadge: "Sport & Divertissement",
    location: "Rabat",
    image: "/images/clients/la-zone.png",
    realPhoto: true,
    services: [
      "Logo mural rétro-éclairé vert & jaune néon",
      "Enseigne volumétrique 3D LA ZONE noire et or",
      "Mise en lumière décorative d'accueil",
    ],
    description:
      "Fabrication du totem mural d'accueil avec logo circulaire signature en néon bicolore jaune/vert et lettrage en relief noir mat rétro-éclairé.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "dxi",
    name: "DXI",
    brand: "DXI",
    category: "Entreprise Technologique & Ingénierie",
    categoryBadge: "Tech & Corporate",
    location: "Rabat",
    image: "/images/clients/dxi.jpg",
    services: [
      "Lettrage 3D monumental rétro-éclairé bicolore",
      "Finitions inox brossé et halo cyan/or",
      "Habillage hall d'accueil et signalétique",
    ],
    description:
      "Enseigne corporate de prestige en acier inoxydable haute densité avec double halo lumineux LED bleu turquoise et or pour le siège de l'entreprise.",
    highlight: "Enseigne Halo Bicolore & Inox Brossé",
  },
  {
    id: "hotel-le-m",
    name: "HÔTEL LE M",
    brand: "HÔTEL LE M",
    category: "Hôtellerie de Charme & Tourisme",
    categoryBadge: "Hôtel & Hébergement Prestige",
    location: "Rabat",
    image: "/images/clients/hotel-le-m.png",
    realPhoto: true,
    services: [
      "Enseigne suspendue rétro-éclairée HÔTEL LE M",
      "Portail vitré avec arche et habillage noir laqué",
      "Appliques lumineuses et logo signature en relief",
    ],
    description:
      "Réalisation complète de l'entrée principale de l'hôtel : habillage de façade noir laqué haute brillance, lettrage 3D rétro-éclairé et marquage architectural haut de gamme.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "cegedim",
    name: "CEGEDIM",
    brand: "CEGEDIM",
    category: "Technologies Médicales & Solutions Logiciels",
    categoryBadge: "Multinationale & Santé",
    location: "Rabat",
    image: "/images/clients/cegedim.png",
    realPhoto: true,
    services: [
      "Logo volumique 3D Cegedim en relief",
      "Cubes rétro-éclairés bleu et gris",
      "Structure portante thermolaquée blanche",
    ],
    description:
      "Fabrication de l'enseigne volumique officielle Cegedim avec cubes emblématiques thermoformés et rétro-éclairage LED blanc pur sur structure profilée.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "dolphin-marine",
    name: "DOLPHIN MARINE GROUP",
    brand: "DOLPHIN MARINE",
    category: "Industrie Maritime & Équipements de Sécurité",
    categoryBadge: "Maritime & Stand Événementiel",
    location: "Maroc",
    image: "/images/clients/dolphin-marine.png",
    realPhoto: true,
    services: [
      "Stand d'exposition événementiel haut de gamme",
      "Enseigne circulaire rétro-éclairée avec ancre marine",
      "Lettrage 3D lumineux et habillage stand bois & bleu",
    ],
    description:
      "Aménagement complet du stand d'exposition avec totem supérieur rétro-éclairé, logo marin en relief haute brillance et signalétique technique thématique.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "reception-luxe",
    name: "ESPACE BEAUTÉ & CLINIQUE DE PRESTIGE",
    brand: "BEAUTY & CLINIC",
    category: "Aménagement Intérieur & Signalétique Design",
    categoryBadge: "Agencement & Décoration de Luxe",
    location: "Rabat, Souissi",
    image: "/images/clients/reception-luxe.png",
    realPhoto: true,
    services: [
      "Comptoir d'accueil sur-mesure à tasseaux cannelés",
      "Gorge lumineuse LED chaude sous plan de travail",
      "Monogramme doré découpé au laser rétro-éclairé",
    ],
    description:
      "Agencement haut de gamme du hall d'accueil : banque de réception arrondie à cannelures verticales, rétro-éclairage d'ambiance et logo monogramme en laiton poli miroir.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
  {
    id: "champion-express",
    name: "CHAMPION EXPRESS",
    brand: "CHAMPION EXPRESS",
    category: "Commerce & Distribution Alimentaire",
    categoryBadge: "Distribution & Commerce",
    location: "Rabat",
    image: "/images/clients/champion-express.png",
    realPhoto: true,
    services: [
      "Bandeau caisson lumineux grand format",
      "Vitrophanie intégrale microperforée thématique",
      "Signalétique horaire et services",
    ],
    description:
      "Bandeau lumineux blanc et rouge Champion Express avec vitrophanie commerciale complète multi-couleurs habillant l'ensemble des baies vitrées.",
    highlight: "Réalisation atelier Rabat Enseignes",
  },
];
