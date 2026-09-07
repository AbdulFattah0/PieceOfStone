export type ProductCategory = 'Porsche' | 'Ferrari' | 'Lamborghini' | 'Corvette' | 'Mustang' | 'Custom' | 'Other';

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  materials: string[];
  dimensions: string;
  weight: string;
  price: string;
  availability: string;
  shipping: string;
  category: ProductCategory;
  images: ProductImage[];
  isAutomotive: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'carrara-eclipse',
    name: 'Carrara Eclipse',
    shortDescription: 'A study in light and shadow, rendered in pure white Carrara marble.',
    description: 'A meditation on contrast — the pure white of Italian Carrara marble meets deep charcoal onyx in a composition that shifts with the light. Each tessera is hand-cut and placed to create a rhythmic flow that draws the eye inward, toward a center that seems to glow from within.',
    materials: ['Italian Carrara Marble', 'Black Onyx', 'Travertine'],
    dimensions: '120 × 80 cm',
    weight: 'Approx. 18 kg',
    price: 'Inquire',
    availability: 'Made to order — 8–10 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Other',
    images: [
      { src: 'https://images.pexels.com/photos/37765016/pexels-photo-37765016.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Carrara Eclipse mosaic artwork' },
      { src: 'https://images.pexels.com/photos/3847496/pexels-photo-3847496.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Carrara Eclipse detail view' },
      { src: 'https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Carrara marble close-up texture' },
    ],
    isAutomotive: false,
    featured: true,
  },
  {
    id: '2',
    slug: 'onyx-veil',
    name: 'Onyx Veil',
    shortDescription: 'Translucent onyx layered against warm travertine in a luminous composition.',
    description: 'Onyx Veil explores the natural luminosity of premium onyx, selected for its honeyed warmth and translucent depth. When lit from behind or beside, the stone reveals hidden landscapes — veins of gold, rivers of amber — that make each piece utterly unrepeatable.',
    materials: ['Honey Onyx', 'Travertine', 'Carrara Marble'],
    dimensions: '100 × 100 cm',
    weight: 'Approx. 15 kg',
    price: 'Inquire',
    availability: 'Made to order — 10–12 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Other',
    images: [
      { src: 'https://images.pexels.com/photos/28288786/pexels-photo-28288786.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Onyx Veil mosaic artwork' },
      { src: 'https://images.pexels.com/photos/28288788/pexels-photo-28288788.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Onyx stone detail' },
      { src: 'https://images.pexels.com/photos/9990273/pexels-photo-9990273.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble texture detail' },
    ],
    isAutomotive: false,
    featured: true,
  },
  {
    id: '3',
    slug: 'stone-symphony',
    name: 'Stone Symphony',
    shortDescription: 'A composition of seven natural stones, harmonized into a single gesture.',
    description: 'Seven distinct stones — from the cool grey of Carrara to the warm blush of rose travertine — are brought together in a composition that feels both architectural and organic. The result is a piece that reads differently from every distance: a landscape up close, a gesture from afar.',
    materials: ['Carrara Marble', 'Rose Travertine', 'Onyx', 'Black Marble', 'Travertine', 'Limestone', 'Sandstone'],
    dimensions: '150 × 100 cm',
    weight: 'Approx. 22 kg',
    price: 'Inquire',
    availability: 'Made to order — 10–14 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Other',
    images: [
      { src: 'https://images.pexels.com/photos/11126105/pexels-photo-11126105.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Stone Symphony mosaic artwork' },
      { src: 'https://images.pexels.com/photos/21370788/pexels-photo-21370788.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Mosaic detail view' },
      { src: 'https://images.pexels.com/photos/3847500/pexels-photo-3847500.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble texture close-up' },
    ],
    isAutomotive: false,
    featured: true,
  },
  {
    id: '4',
    slug: 'midnight-carrara',
    name: 'Midnight Carrara',
    shortDescription: 'The drama of black marble cut through with veins of pure white.',
    description: 'Midnight Carrara inverts the traditional mosaic palette, placing deep black marble at the center and letting white Carrara veins radiate outward like light through darkness. A piece designed for spaces that command attention — the garage, the gallery, the boardroom.',
    materials: ['Black Marble', 'Italian Carrara Marble', 'Onyx'],
    dimensions: '120 × 80 cm',
    weight: 'Approx. 19 kg',
    price: 'Inquire',
    availability: 'Made to order — 8–10 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Other',
    images: [
      { src: 'https://images.pexels.com/photos/35647471/pexels-photo-35647471.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Midnight Carrara mosaic artwork' },
      { src: 'https://images.pexels.com/photos/31470816/pexels-photo-31470816.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Black and white marble detail' },
      { src: 'https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble vein detail' },
    ],
    isAutomotive: false,
    featured: true,
  },
  // Automotive Collection
  {
    id: '5',
    slug: 'prancing-horse-stone',
    name: 'The Prancing Horse in Stone',
    shortDescription: 'An iconic silhouette reborn in Carrara marble and onyx.',
    description: 'A tribute to one of motorsport\'s most enduring symbols, rendered entirely in natural stone. The flowing curves of the bodywork are built from thousands of individually cut tesserae, with onyx used to capture the depth of paint and Carrara marble for the highlight of chrome and light.',
    materials: ['Italian Carrara Marble', 'Black Onyx', 'Red Travertine', 'Travertine'],
    dimensions: '160 × 70 cm',
    weight: 'Approx. 25 kg',
    price: 'Inquire',
    availability: 'Made to order — 12–16 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Ferrari',
    images: [
      { src: 'https://images.pexels.com/photos/30570357/pexels-photo-30570357.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Ferrari inspired mosaic artwork' },
      { src: 'https://images.pexels.com/photos/36690567/pexels-photo-36690567.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Ferrari side profile reference' },
      { src: 'https://images.pexels.com/photos/6634143/pexels-photo-6634143.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble detail' },
    ],
    isAutomotive: true,
  },
  {
    id: '6',
    slug: 'stuttgart-silhouette',
    name: 'Stuttgart Silhouette',
    shortDescription: 'The pure line of a German icon, carved from cool grey stone.',
    description: 'The unmistakable profile of Stuttgart\'s finest, rendered in cool greys and silvers that echo the original\'s restrained palette. Every curve of the fender, every line of the greenhouse is traced in hand-placed stone — a piece that rewards close inspection as much as it commands the room.',
    materials: ['Carrara Marble', 'Silver Travertine', 'Grey Limestone', 'Onyx'],
    dimensions: '180 × 60 cm',
    weight: 'Approx. 28 kg',
    price: 'Inquire',
    availability: 'Made to order — 12–16 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Porsche',
    images: [
      { src: 'https://images.pexels.com/photos/38234790/pexels-photo-38234790.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Porsche inspired mosaic artwork' },
      { src: 'https://images.pexels.com/photos/9545545/pexels-photo-9545545.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Classic car reference' },
      { src: 'https://images.pexels.com/photos/3847490/pexels-photo-3847490.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble detail' },
    ],
    isAutomotive: true,
  },
  {
    id: '7',
    slug: 'raging-bull-stone',
    name: 'The Raging Bull in Stone',
    shortDescription: 'Dramatic, angular, and fierce — captured in warm and dark stone.',
    description: 'The angular drama of Sant\'Agata\'s finest, built from contrasting warm and dark stones that mirror the original\'s aggressive stance. Onyx provides the deep shadows; warm travertine catches the light where the bodywork would. A piece designed for the collector who understands that form is everything.',
    materials: ['Black Onyx', 'Honey Onyx', 'Travertine', 'Carrara Marble'],
    dimensions: '170 × 65 cm',
    weight: 'Approx. 26 kg',
    price: 'Inquire',
    availability: 'Made to order — 12–16 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Lamborghini',
    images: [
      { src: 'https://images.pexels.com/photos/9545545/pexels-photo-9545545.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Lamborghini inspired mosaic artwork' },
      { src: 'https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Lamborghini side profile reference' },
      { src: 'https://images.pexels.com/photos/28288786/pexels-photo-28288786.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Onyx detail' },
    ],
    isAutomotive: true,
  },
  {
    id: '8',
    slug: 'american-icon-stone',
    name: 'American Icon in Stone',
    shortDescription: 'The spirit of American muscle, rebuilt in natural stone.',
    description: 'A celebration of American automotive design, its bold lines and confident stance captured in warm earth tones and deep charcoal. The piece uses travertine and sandstone to evoke the warmth of a sunset on an open road, with black marble for the shadows that give the car its presence.',
    materials: ['Travertine', 'Sandstone', 'Black Marble', 'Carrara Marble'],
    dimensions: '160 × 65 cm',
    weight: 'Approx. 24 kg',
    price: 'Inquire',
    availability: 'Made to order — 12–16 weeks',
    shipping: 'White-glove delivery worldwide. Custom crating included.',
    category: 'Mustang',
    images: [
      { src: 'https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'American muscle car inspired mosaic' },
      { src: 'https://images.pexels.com/photos/261985/pexels-photo-261985.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Luxury car studio reference' },
      { src: 'https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Marble detail' },
    ],
    isAutomotive: true,
  },
];

export const automotiveCategories: ProductCategory[] = [
  'Porsche', 'Ferrari', 'Lamborghini', 'Corvette', 'Mustang', 'Custom', 'Other',
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getAutomotiveProducts(): Product[] {
  return products.filter((p) => p.isAutomotive);
}
