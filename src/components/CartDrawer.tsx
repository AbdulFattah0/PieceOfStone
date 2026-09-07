import { X, Trash2, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onRemove: (productId: string) => void;
}

export function CartDrawer({ open, items, onClose, onRemove }: CartDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[80] bg-ink/60 backdrop-blur-sm transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 z-[90] w-full max-w-md bg-ivory transition-transform duration-700 ease-luxury flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-luxe px-6 py-5">
          <h2 className="font-display text-xl tracking-wide text-ink">Your Selection</h2>
          <button
            onClick={onClose}
            className="text-charcoal/60 transition-colors hover:text-ink"
            aria-label="Close cart"
          >
            <X size={22} strokeWidth={1.25} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag size={40} strokeWidth={0.75} className="text-taupe/40" />
              <p className="font-display text-lg text-charcoal/50">Your selection is empty</p>
              <p className="text-xs tracking-wide text-taupe/60 max-w-[240px]">
                Explore the collection and add a piece that speaks to you.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.product.id} className="flex gap-4">
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream">
                    <img
                      src={item.product.images[0]?.src}
                      alt={item.product.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg text-ink">{item.product.name}</h3>
                      <p className="text-[10px] tracking-wide uppercase text-taupe/70 mt-1">
                        {item.product.dimensions}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-wide text-charcoal/70">
                        {item.product.price}
                      </span>
                      <button
                        onClick={() => onRemove(item.product.id)}
                        className="text-taupe/50 transition-colors hover:text-error"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} strokeWidth={1.25} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-luxe px-6 py-6 space-y-4">
            <p className="text-xs leading-relaxed text-taupe/70">
              Each piece is handcrafted to order. Final pricing and delivery timeline will be confirmed via personal consultation.
            </p>
            <button className="w-full bg-ink py-4 text-[10px] tracking-ultra uppercase text-ivory transition-colors duration-500 hover:bg-gold hover:text-ink">
              Request Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
