import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { ProductImage } from '@/data/products';

interface LightboxProps {
  images: ProductImage[];
  startIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  const prev = () => { setZoomed(false); setIndex((i) => (i - 1 + images.length) % images.length); };
  const next = () => { setZoomed(false); setIndex((i) => (i + 1) % images.length); };

  return (
    <div className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-ivory/60 transition-colors hover:text-ivory"
        aria-label="Close"
      >
        <X size={28} strokeWidth={1} />
      </button>

      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 z-10 text-ivory/50 transition-colors hover:text-ivory"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 sm:right-8 z-10 text-ivory/50 transition-colors hover:text-ivory"
        aria-label="Next image"
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>

      <div
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden cursor-zoom-in"
        onClick={() => setZoomed(!zoomed)}
      >
        <img
          src={images[index].src}
          alt={images[index].alt}
          className={`max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-700 ease-luxury ${
            zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
          }`}
        />
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIndex(i); setZoomed(false); }}
              className={`h-1.5 transition-all duration-500 ${
                i === index ? 'w-8 bg-gold' : 'w-4 bg-ivory/30 hover:bg-ivory/50'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[10px] tracking-luxe uppercase text-ivory/40 flex items-center gap-2">
          <ZoomIn size={12} strokeWidth={1} /> Click to zoom · {index + 1} / {images.length}
        </span>
      </div>
    </div>
  );
}
