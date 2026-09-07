import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';
import { Reveal } from './Reveal';
import { ImagePlaceholder } from './ImagePlaceholder';
import type { Product } from '@/data/products';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal delay={(index % 2) + 1 as 1 | 2 | 3 | 4}>
      <article className="group">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="img-zoom relative overflow-hidden bg-cream">
            <div className="aspect-[4/5]">
              <img
                src={product.images[0]?.src}
                alt={product.images[0]?.alt || product.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-ink/0 transition-all duration-700 ease-luxury group-hover:bg-ink/15" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-6 transition-transform duration-700 ease-luxury group-hover:translate-y-0">
              <span className="inline-flex items-center gap-2 bg-ivory/95 px-5 py-2.5 text-[10px] tracking-luxe uppercase text-ink">
                View Piece
                <ArrowRight size={14} strokeWidth={1.25} />
              </span>
            </div>
          </div>

          {/* Product info */}
          <div className="mt-6 space-y-2">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl text-ink transition-colors duration-300 group-hover:text-gold-dark">
                {product.name}
              </h3>
              <span className="text-xs tracking-wide text-taupe whitespace-nowrap">
                {product.price}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-charcoal/60 line-clamp-2">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-2 text-[10px] tracking-wide uppercase text-taupe/70">
              <span>{product.materials.slice(0, 2).join(' · ')}</span>
              <span className="text-taupe/30">|</span>
              <span>{product.dimensions}</span>
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
