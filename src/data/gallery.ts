export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  span?: 'tall' | 'wide' | 'normal';
}

export const galleryImages: GalleryImage[] = [
  { id: 'g1', src: 'https://images.pexels.com/photos/37765016/pexels-photo-37765016.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Mosaic artwork display', category: 'Collection', span: 'tall' },
  { id: 'g2', src: 'https://images.pexels.com/photos/11126105/pexels-photo-11126105.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Geometric mosaic detail', category: 'Details', span: 'wide' },
  { id: 'g3', src: 'https://images.pexels.com/photos/28288786/pexels-photo-28288786.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Onyx stone artwork', category: 'Materials', span: 'normal' },
  { id: 'g4', src: 'https://images.pexels.com/photos/35647471/pexels-photo-35647471.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Black and white marble', category: 'Collection', span: 'normal' },
  { id: 'g5', src: 'https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Carrara marble texture', category: 'Materials', span: 'tall' },
  { id: 'g6', src: 'https://images.pexels.com/photos/21370788/pexels-photo-21370788.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Historical mosaic pattern', category: 'Details', span: 'wide' },
  { id: 'g7', src: 'https://images.pexels.com/photos/3847496/pexels-photo-3847496.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'White marble surface', category: 'Materials', span: 'normal' },
  { id: 'g8', src: 'https://images.pexels.com/photos/36099886/pexels-photo-36099886.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Abstract mosaic pattern', category: 'Collection', span: 'normal' },
  { id: 'g9', src: 'https://images.pexels.com/photos/2279337/pexels-photo-2279337.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Decorative stone tiles', category: 'Details', span: 'wide' },
  { id: 'g10', src: 'https://images.pexels.com/photos/9990273/pexels-photo-9990273.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Patterned marble texture', category: 'Materials', span: 'normal' },
  { id: 'g11', src: 'https://images.pexels.com/photos/6788312/pexels-photo-6788312.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Geometric mosaic tile', category: 'Details', span: 'tall' },
  { id: 'g12', src: 'https://images.pexels.com/photos/3847500/pexels-photo-3847500.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Marble texture background', category: 'Materials', span: 'normal' },
];
