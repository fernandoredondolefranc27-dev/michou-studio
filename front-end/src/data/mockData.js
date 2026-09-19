import makeup1 from '../assets/makeup-1.png';
import makeup2 from '../assets/makeup-2.png';
import makeup3 from '../assets/makeup-3.png';
import makeup4 from '../assets/makeup-4.png';
import makeup5 from '../assets/makeup-5.png';

import coiffure1 from '../assets/coiffure-1.png';
import coiffure2 from '../assets/coiffure-2.png';
import coiffure3 from '../assets/coiffure-3.png';
import coiffure4 from '../assets/coiffure-4.png';
import coiffure5 from '../assets/coiffure-5.png';

import tresse1 from '../assets/tresse-1.png';
import tresse2 from '../assets/tresse-2.png';
import tresse3 from '../assets/tresse-3.png';
import tresse4 from '../assets/tresse-4.png';
import tresse5 from '../assets/tresse-5.png';

import ongles1 from '../assets/ongles-1.png';
import ongles2 from '../assets/ongles-2.png';
import ongles3 from '../assets/ongles-3.png';
import ongles4 from '../assets/ongles-4.png';
import ongles5 from '../assets/ongles-5.png';

import barber1 from '../assets/barber-1.png';
import barber2 from '../assets/barber-2.png';
import barber3 from '../assets/barber-3.png';
import barber4 from '../assets/barber-4.png';
import barber5 from '../assets/barber-5.png';

export const STUDIO_INFO = {
  name: "MICHOU",
  tagline: "STUDIO DE BEAUTÉ",
  phone: "+509 36 35 3746",
  email: "fernandoredondolefranc27@gmail.com",
  address: "#2, Delmas 40b, Port-au-Prince",
  hours: "Du Lundi au Dimanche : 09h00 — 20h00 ",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  tiktok: "https://tiktok.com"
};

export const SERVICES = [
  {
    id: "maquillage",
    number: "01",
    title: "MAQUILLAGE",
    subtitle: "éclat & sophistication",
    duration: "60 - 150 min",
    description: "Une mise en beauté d’exception pensée autour de l’équilibre des teintes, de la lumière et de la précision des finitions. Un maquillage sophistiqué qui sublime les traits avec élégance, du teint jusqu’aux lèvres.",
    details: [
      "Préparation et perfection du teint",
      "Travail des paupières et des nuances",
      "Sculpture des lèvres et des contours",
      "Pose de faux cils (sur demande)"
    ],
    image: makeup1
  },
  {
    id: "coiffure",
    number: "02",
    title: "COIFFURE & POSE",
    subtitle: "Greffes, Tresse africaine, Lace & Coiffage",
    duration: "120 - 180 min",
    description: "Une coiffure composée de tresses fines et soigneusement structurées, réalisées en motifs géométriques sur le dessus de la tête, puis prolongées par de longues tresses ondulées pour une finition élégante et sophistiquée.",
    details: [
      "séparation et tracé précis des cheveux",
      "tressage des longueurs",
      "travail précis des contours",
      "conseils d'entretien pour préserver le résultat"
    ],
    image: coiffure1
  },
  {
    id: "tresse",
    number: "03",
    title: "COIFFURE ENFANT",
    subtitle: "TRESSE DELICATE & STYLE ENFANT",
    duration: "50 - 100 min",
    description: "Une coiffure pensée pour les petites filles, associant tresses soigneusement dessinées et longueurs délicatement travaillées. Un style élégant et confortable, réalisé avec soin pour mettre en valeur la beauté naturelle de l’enfant.",
    details: [
      "Démelage et préparation des cheveux",
      "réalisation de tresses selon le model choisi",
      "application de produits nourrissants et protecteurs",
      "control final pour une coiffure propre et harmonieuse"
    ],
    image: tresse3
  },
  {
    id: "manucure",
    number: "04",
    title: "ONGLES",
    subtitle: "ECLAT, LIGNE & NAIL ART (homme & femme)",
    duration: "120 - 180 min",
    description: "Une création ongulaire sophistiquée aux lignes élancées, associant un dégradé délicat de rose et de bleu à une finition translucide et lumineuse. Les détails graphiques et les touches de cristaux viennent parfaire cette composition élégante et contemporaine.",
    details: [
      "Construction et definition de la forme des ongles",
      "Application du degradé et des nuances",
      "Finition Translucide et Lumineuse",
      "Finition brillante et protection de la création"
    ],
    image: ongles2
  },
  {
    id: "barber",
    number: "05",
    title: "BARBER SHOP",
    subtitle: "Homme, Femme & Enfant",
    duration: "30 - 60 min",
    description: "Service d'excellence en coupe, contours, rasage traditionnel et stylisation de barbe.",
    details: [
      "Coupes dégradées précises (Homme & Enfant)",
      "Coupes courtes stylisées (Femme)",
      "Taille & Soin de barbe à la serviette chaude",
      "Contours à la lame & finitions"
    ],
    image: barber1
  }
];

export const GALLERY_ITEMS = [
  // MAQUILLAGE (5 photos)
  { id: 1, title: "Éclat Doré & Line Graphique", category: "MAQUILLAGE", image: makeup1 },
  { id: 2, title: "Précision Cils & Ombre Bronze", category: "MAQUILLAGE", image: makeup2 },
  { id: 3, title: "Ombre & Lumière Charnelle", category: "MAQUILLAGE", image: makeup3 },
  { id: 4, title: "Douceur Nude & Lèvres Caramel", category: "MAQUILLAGE", image: makeup4 },
  { id: 5, title: "Radiance Pure & Sourire Glossy", category: "MAQUILLAGE", image: makeup5 },

  // COIFFURE (5 photos)
  { id: 6, title: "Tresses Fulani & Cascades Ondulées", category: "COIFFURE", image: coiffure1 },
  { id: 7, title: "Lissage Miroir & Lace HD Indétectable", category: "COIFFURE", image: coiffure2 },
  { id: 8, title: "Bob Sculptural & Carré Intemporel", category: "COIFFURE", image: coiffure3 },
  { id: 9, title: "Pixie Cut Audacieux & Nuque Structurée", category: "COIFFURE", image: coiffure4 },
  { id: 10, title: "Box Braids Précision & Traçage Géométrique", category: "COIFFURE", image: coiffure5 },

  // TRESSE AFRICAINE (5 photos)
  { id: 11, title: "Boho Braids & Cascades Ondulées", category: "TRESSE AFRICAINE", image: tresse1 },
  { id: 12, title: "Stitch Braids Haute Queue de Cheval", category: "TRESSE AFRICAINE", image: tresse2 },
  { id: 13, title: "Tresses Enfant & Perles Cristallines", category: "TRESSE AFRICAINE", image: tresse3 },
  { id: 14, title: "Trace Géométrique & Stitch Braids Épurées", category: "TRESSE AFRICAINE", image: tresse4 },
  { id: 15, title: "Cornrows Masculines & Motifs Sculptés", category: "TRESSE AFRICAINE", image: tresse5 },

  // ONGLES (5 photos)
  { id: 16, title: "French Noire Coquette & Nœuds Sculptés", category: "ONGLES", image: ongles1 },
  { id: 17, title: "Stiletto Aquatique & Effet Ombré Perlé", category: "ONGLES", image: ongles2 },
  { id: 18, title: "French Blanche V-Shape & Pédicure Assortie", category: "ONGLES", image: ongles3 },
  { id: 19, title: "MANUCURE ROSÉE & NAIL ART", category: "ONGLES", image: ongles4 },
  { id: 20, title: "Manucure Masculine Épurée & Éclair Minimaliste", category: "ONGLES", image: ongles5 },

  // BARBER SHOP (5 photos)
  { id: 21, title: "Afro Curls Volumineux & Contour Précis", category: "BARBER SHOP", image: barber1 },
  { id: 22, title: "Pixie Afro Féminin & Trait Rasoir Graphique", category: "BARBER SHOP", image: barber2 },
  { id: 23, title: "Fondu Progressif Enfant & Curls Structurés", category: "BARBER SHOP", image: barber3 },
  { id: 24, title: "Buzz Cut Épuré & Fondu 360° Parfait", category: "BARBER SHOP", image: barber4 },
  { id: 25, title: "Contours Laser & Barbe Sculptée Ultra-Définie", category: "BARBER SHOP", image: barber5 }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Une expérience confidentielle d'un raffinement rare. L'équipe MICHOU comprend immédiatement ce qui met en valeur sans jamais dénaturer.",
    author: "CLIENTE M.",
    role: "Pose de Lace & Maquillage"
  },
  {
    id: 2,
    quote: "Le studio MICHOU est devenu mon sanctuaire beauté. Les Knotless Braids sont impeccables et ne tirent absolument pas sur le cuir chevelu.",
    author: "CLIENTE V.",
    role: "Tresses Africaines"
  },
  {
    id: 3,
    quote: "Une attention aux détails portée à son paroxysme. Du service Barber pour mon fils aux ongles pour moi, tout est parfait.",
    author: "CLIENTE S.",
    role: "Prestations Ongles & Barber"
  }
];

export const TIME_SLOTS = ["09:00", "11:00", "13:30", "15:00", "16:30", "18:00"];