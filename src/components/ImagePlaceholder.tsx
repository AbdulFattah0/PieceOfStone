import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  label?: string;
}

/**
 * Image area for product/gallery images.
 * If `src` is provided, renders the image with a subtle zoom-on-hover effect.
 * If `src` is omitted, renders an elegant upload placeholder area.
 * To add your own image: pass a URL via `src`, or replace the src in the data file.
 */
export function ImagePlaceholder({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  label = 'Your artwork here',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`img-zoom relative overflow-hidden bg-cream ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex ${aspectRatio} flex-col items-center justify-center overflow-hidden border border-luxe bg-gradient-to-br from-cream to-sand/30 ${className}`}
    >
      <div className="marble-bg absolute inset-0" />
      <div className="relative flex flex-col items-center gap-3 text-taupe/60">
        <ImageIcon size={32} strokeWidth={0.75} />
        <span className="text-[10px] tracking-ultra uppercase">{label}</span>
      </div>
    </div>
  );
}
