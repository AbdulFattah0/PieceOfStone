import { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { galleryImages } from '@/data/gallery';

const categories = ['All', 'Collection', 'Details', 'Materials'];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const spanClass = (span?: string) => {
    if (span === 'tall') return 'row-span-2';
    if (span === 'wide') return 'col-span-2';
    return '';
  };

  const aspectClass = (span?: string) => {
    if (span === 'tall') return 'aspect-[3/4]';
    if (span === 'wide') return 'aspect-[2/1]';
    return 'aspect-square';
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <div className="page-enter bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-cream pt-32 pb-16 marble-bg">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
          <Reveal>
            <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Gallery</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink">
              Completed Works
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-charcoal/60 max-w-xl mx-auto">
              A selection of finished artworks, each one unique and unrepeatable.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-ivory/95 backdrop-blur-md border-b border-luxe py-4">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[10px] tracking-luxe uppercase transition-all duration-500 ease-luxury border ${
                activeCategory === cat
                  ? 'border-gold bg-gold text-ink'
                  : 'border-taupe/30 text-charcoal/60 hover:border-taupe hover:text-ink'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {filtered.map((img, i) => (
            <Reveal
              key={img.id}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={spanClass(img.span)}
            >
              <div
                className="img-zoom group cursor-pointer overflow-hidden bg-cream relative"
                onClick={() => openLightbox(i)}
              >
                <div className={aspectClass(img.span)}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-ink/0 transition-all duration-500 group-hover:bg-ink/20 flex items-end p-4">
                  <span className="text-[9px] tracking-luxe uppercase text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {img.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Add image placeholder */}
          <Reveal delay={4}>
            <div className="flex aspect-square flex-col items-center justify-center border border-dashed border-taupe/30 text-center text-taupe/40 transition-colors hover:border-gold hover:text-gold">
              <p className="text-[10px] tracking-ultra uppercase">Add New Image</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 text-ivory/60 transition-colors hover:text-ivory"
            aria-label="Close"
          >
            <X size={28} strokeWidth={1} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-10 text-ivory/50 transition-colors hover:text-ivory"
            aria-label="Previous"
          >
            <ChevronLeft size={36} strokeWidth={1} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-10 text-ivory/50 transition-colors hover:text-ivory"
            aria-label="Next"
          >
            <ChevronRight size={36} strokeWidth={1} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-h-[88vh] max-w-[90vw] object-contain"
          />
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`h-1.5 transition-all duration-500 ${
                  i === lightboxIndex ? 'w-8 bg-gold' : 'w-4 bg-ivory/30'
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
