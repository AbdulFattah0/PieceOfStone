import { useState, useCallback } from 'react';
import { RouterProvider, useRouter } from '@/lib/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer, type CartItem } from '@/components/CartDrawer';
import { HomePage } from '@/pages/HomePage';
import { ProductPage } from '@/pages/ProductPage';
import { GalleryPage } from '@/pages/GalleryPage';
import { getProductBySlug, products } from '@/data/products';

function AppContent() {
  const { path } = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((productId: string) => {
    const product = getProductBySlug(productId) || products.find((p) => p.id === productId);
    if (!product) return;
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  // Routing
  let page;
  if (path === '/gallery') {
    page = <GalleryPage />;
  } else if (path.startsWith('/product/')) {
    const slug = path.replace('/product/', '');
    page = <ProductPage slug={slug} onAddToCart={addToCart} />;
  } else {
    page = <HomePage />;
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar cartCount={cartItems.length} onCartClick={() => setCartOpen(true)} />
      {page}
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
