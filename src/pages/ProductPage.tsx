import { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, Minus, Check, ZoomIn, Truck, Package } from 'lucide-react';
import { Link, useRouter } from '@/lib/router';
import { Reveal } from '@/components/Reveal';
import { Lightbox } from '@/components/Lightbox';
import { getProductBySlug, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export function ProductPage({ slug, onAddToCart }: { slug: string; onAddToCart: (productId: string) => void }) {
  const product = getProductBySlug(slug);
  const { navigate } = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [inquired, setInquired] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ivory">
        <p className="font-display text-3xl text-ink">Piece not found</p>
        <Link to="/" className="text-[10px] tracking-ultra uppercase text-gold-dark hover:text-gold">Return home</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id && p.isAutomotive === product.isAutomotive).slice(0, 4);

  const handleAddToCart = () => {
    onAddToCart(product.id);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="page-enter bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-28 pb-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-[10px] tracking-luxe uppercase text-taupe transition-colors hover:text-gold-dark"
        >
          <ArrowLeft size={14} strokeWidth={1.25} />
          Back to Collection
        </button>
      </div>

      {/* Main product layout */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pb-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div
              className="img-zoom relative overflow-hidden bg-cream cursor-pointer group"
              onClick={() => setLightboxOpen(true)}
            >
              <div className="aspect-[4/5]">
                <img
                  src={product.images[activeImage]?.src}
                  alt={product.images[activeImage]?.alt || product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-ink/60 px-3 py-1.5 text-[9px] tracking-luxe uppercase text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <ZoomIn size={12} strokeWidth={1.25} />
                Click to zoom
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden border transition-all duration-300 ${
                    activeImage === i ? 'border-gold' : 'border-transparent hover:border-taupe/40'
                  }`}
                >
                  <div className="aspect-square">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                  </div>
                </button>
              ))}
              {/* Extra upload slot */}
              <div className="flex aspect-square items-center justify-center border border-dashed border-taupe/30 text-taupe/40 text-[9px] tracking-wide text-center px-2">
                Add Image
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-8">
            <Reveal>
              {product.isAutomotive && (
                <p className="mb-3 text-[10px] tracking-ultra uppercase text-gold">{product.category}</p>
              )}
              <h1 className="font-display text-4xl lg:text-5xl font-light text-ink leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-charcoal/60 max-w-lg">
                {product.shortDescription}
              </p>

              {/* Price & availability */}
              <div className="mt-8 flex items-baseline gap-6 border-y border-luxe py-6">
                <div>
                  <p className="text-[10px] tracking-luxe uppercase text-taupe mb-1">Price</p>
                  <p className="font-display text-2xl text-ink">{product.price}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-luxe uppercase text-taupe mb-1">Availability</p>
                  <p className="text-sm text-charcoal/70">{product.availability}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <p className="text-[10px] tracking-luxe uppercase text-taupe mb-1">Dimensions</p>
                    <p className="text-sm text-charcoal/80">{product.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-luxe uppercase text-taupe mb-1">Weight</p>
                    <p className="text-sm text-charcoal/80">{product.weight}</p>
                  </div>
                </div>

                <div>
                  <p className="text-[10px] tracking-luxe uppercase text-taupe mb-2">Materials</p>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((mat) => (
                      <span key={mat} className="border border-luxe px-3 py-1 text-[10px] tracking-wide uppercase text-charcoal/70">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Truck size={18} strokeWidth={1.25} className="text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-luxe uppercase text-taupe mb-1">Shipping</p>
                    <p className="text-sm text-charcoal/70">{product.shipping}</p>
                  </div>
                </div>
              </div>

              {/* Full description */}
              <div className="mt-10 border-t border-luxe pt-8">
                <p className="text-sm leading-relaxed text-charcoal/70">{product.description}</p>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-ink py-4 text-[10px] tracking-ultra uppercase text-ivory transition-all duration-500 ease-luxury hover:bg-gold hover:text-ink"
                >
                  {addedToCart ? (
                    <>
                      <Check size={14} strokeWidth={1.5} />
                      Added to Selection
                    </>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                <button
                  onClick={() => setInquired(true)}
                  className="flex-1 inline-flex items-center justify-center gap-3 border border-ink py-4 text-[10px] tracking-ultra uppercase text-ink transition-all duration-500 ease-luxury hover:bg-ink hover:text-ivory"
                >
                  {inquired ? 'Inquiry Sent' : 'Inquire About This Piece'}
                </button>
              </div>

              {inquired && (
                <p className="mt-4 text-sm text-gold-dark flex items-center gap-2 animate-fade-in">
                  <Check size={16} strokeWidth={1.5} />
                  Thank you. We will be in touch personally about this piece.
                </p>
              )}
            </Reveal>
          </div>
        </div>

        {/* Crafted Piece by Piece section */}
        <div className="mt-24 border-t border-luxe pt-20">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Handcrafted</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-ink">
              Crafted Piece by Piece
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-charcoal/60">
              This artwork is assembled from individual pieces of natural stone, each one selected, cut, and placed by hand.
              Slight variations in color, texture, and veining are part of the handmade character of the artwork —
              a reminder that no two pieces will ever be exactly alike.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {product.images.slice(0, 3).map((img, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="img-zoom overflow-hidden bg-cream">
                  <div className="aspect-[4/3]">
                    <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-luxe pt-20">
            <Reveal className="mb-12 text-center">
              <p className="mb-3 text-[10px] tracking-ultra uppercase text-gold">Continue Exploring</p>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-ink">More Pieces</h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={product.images}
          startIndex={activeImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
