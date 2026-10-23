export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  icon: string;
  badges: string[];
  features: string[];
  specs: { label: string; value: string }[];
  quoteTopic: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "enseignes-lumineuses",
    slug: "enseignes-lumineuses",
    title: "Enseignes Lumineuses & Commerciales",
    subtitle: "Visibilité & Prestige 24h/24",
    shortDescription:
      "Lettres boîtiers 3D, néons LED haute intensité et caissons lumineux rétro-éclairés pour magnifier votre façade commerciale avec élégance.",
    longDescription:
      "Nous concevons des enseignes lumineuses haut de gamme adaptées aux exigences architecturales du Maroc. Chaque élément est façonné dans nos ateliers avec des matériaux nobles résistants aux intempéries et une technologie LED Samsung à basse consommation d'énergie.",
    image: "/images/services/service-enseignes.jpg",
    icon: "Sparkles",
    badges: ["Lettres 3D", "LED Basse Conso", "Garantie Extérieure"],
    features: [
      "Lettres boîtiers en inox poli miroir, brossé ou laqué au four",
      "Rétro-éclairage LED halo doux ou éclairage direct diffusant",
      "Néon Flex LED haute brillance pour une touche contemporaine",
      "Caissons ultra-minces et enseignes drapeaux double face",
      "Conformité avec les réglementations urbaines locales",
    ],
    specs: [
      { label: "Matériaux", value: "Inox 316, Plexiglas diffusant, Laiton" },
      { label: "Éclairage", value: "Modules LED Samsung 12V étanches IP68" },
      { label: "Alimentation", value: "Transformateurs MeanWell haute stabilité" },
      { label: "Installation", value: "Pose soignée avec fixations invisibles" },
    ],
    quoteTopic: "Enseigne Lumineuse & Commerciale",
  },
  {
    id: "signaletique-pro",
    slug: "signaletique-pro",
    title: "Signalétique Professionnelle",
    subtitle: "Orientation & Image de Marque",
    shortDescription:
      "Systèmes de guidage, plaques professionnelles de prestige en laiton et totems architecturaux pour sublimer vos espaces professionnels.",
    longDescription:
      "La signalétique reflète le sérieux de votre entreprise. Pour les sièges d'entreprises, cabinets médicaux, études notariales ou centres d'affaires, nous créons une signalétique claire, élégante et parfaitement intégrée au décor architectural.",
    image: "/images/services/service-signaletique.jpg",
    icon: "Compass",
    badges: ["Intérieur & Extérieur", "Plaques Prestige", "Totems Pylônes"],
    features: [
      "Plaques professionnelles gravées en laiton brossé et inox",
      "Totems monumentaux extérieurs et bornes d'accueil intérieures",
      "Signalétique directionnelle d'étage, portes et ascenseurs",
      "Vitrophanie dépolie décorative et film de confidentialité",
      "Pictogrammes découpés au laser et lettrage en relief",
    ],
    specs: [
      { label: "Finitions", value: "Laiton brossé, Acrylique coulé, Inox" },
      { label: "Gravure", value: "Laser haute précision & fraisage numérique" },
      { label: "Films", value: "Films dépolis 3M polymères haute tenue" },
      { label: "Fixation", value: "Entretoises décoratives en laiton ou inox" },
    ],
    quoteTopic: "Signalétique Professionnelle & Plaques",
  },
  {
    id: "habillage-facade",
    slug: "habillage-facade",
    title: "Décoration & Habillage de Façade",
    subtitle: "Métamorphose Architecturale",
    shortDescription:
      "Rénovation complète de devantures en panneaux composites Alucobond, découpes géométriques au laser et intégration d'éclairages linéaires.",
    longDescription:
      "Transformez radicalement l'allure de votre commerce ou immeuble de bureaux. Nos habillages en panneaux composites résistent aux UV et à la chaleur, offrant des lignes pures et un impact visuel moderne et pérenne.",
    image: "/images/services/service-habillage.jpg",
    icon: "Layers",
    badges: ["Alucobond 4mm", "Découpe Laser", "Isolation & Esthétique"],
    features: [
      "Habillage en panneaux composites aluminium (Alucobond / Alupanel)",
      "Claustras et moucharabiehs contemporains découpés au laser",
      "Profilés architecturaux et gorges lumineuses LED intégrées",
      "Résistance extrême aux rayons UV et à la corrosion marine",
      "Prise en charge intégrale : métré, structure métallique et bardage",
    ],
    specs: [
      { label: "Épaisseur", value: "Aluminium composite 4mm PVDF" },
      { label: "Structure", value: "Ossature tubulaire galvanisée anti-rouille" },
      { label: "Garantie", value: "Teintes durables 10 ans sans décoloration" },
      { label: "Sécurité", value: "Matériaux ignifugés et certifiés" },
    ],
    quoteTopic: "Habillage de Façade & Alucobond",
  },
  {
    id: "amenagement-sur-mesure",
    slug: "amenagement-sur-mesure",
    title: "Rénovation & Créations Sur Mesure",
    subtitle: "Espaces Commerciaux d'Exception",
    shortDescription:
      "Agencement de boutiques, comptoirs d'accueil personnalisés, mobilier professionnel et cloisons décoratives pour valoriser votre expérience client.",
    longDescription:
      "Un espace commercial bien conçu maximise vos ventes et séduit immédiatement vos visiteurs. Nous réalisons l'agencement clé en main de votre commerce : comptoirs d'accueil, présentoirs design, cloisons ajourées et habillages muraux artistiques.",
    image: "/images/services/service-amenagement.jpg",
    icon: "Wrench",
    badges: ["Agencement Global", "Mobilier Unique", "Clé en Main"],
    features: [
      "Comptoirs d'accueil sur-mesure mariant bois noble, marbre et laiton",
      "Claustras et séparateurs d'espaces personnalisés",
      "Étagères rétro-éclairées et présentoirs pour showrooms",
      "Logos muraux végétaux stabilisés et lettrages 3D d'intérieur",
      "Coordination des corps de métier et respect strict des délais",
    ],
    specs: [
      { label: "Boiseries", value: "MDF hydrofuge laqué, placage chêne & noyer" },
      { label: "Détails", value: "Inserts métalliques dorés et marbre veiné" },
      { label: "Éclairage", value: "Profilés LED encastrés avec variateur" },
      { label: "Délai", value: "Livraison et pose selon planning convenu" },
    ],
    quoteTopic: "Aménagement d'Espace & Mobilier Sur Mesure",
  },
];
