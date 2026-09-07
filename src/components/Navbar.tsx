import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useRouter } from '@/lib/router';
import { useScrolled } from '@/hooks/useScrolled';
import { useNavigateToSection } from '@/lib/navigate';

type NavItem =
  | { label: string; type: 'section'; sectionId: string }
  | { label: string; type: 'page'; to: string };

const navLinks: NavItem[] = [
  { label: 'Collection', type: 'section', sectionId: 'collection' },
  { label: 'Automotive', type: 'section', sectionId: 'automotive' },
  { label: 'Custom', type: 'section', sectionId: 'custom' },
  { label: 'Our Craft', type: 'section', sectionId: 'craft' },
  { label: 'About', type: 'section', sectionId: 'about' },
  { label: 'Gallery', type: 'page', to: '/gallery' },
  { label: 'Contact', type: 'section', sectionId: 'contact' },
];

export function Navbar({ cartCount, onCartClick }: { cartCount: number; onCartClick: () => void }) {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const { path } = useRouter();
  const navigateToSection = useNavigateToSection();

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (item: NavItem) => {
    setMenuOpen(false);
    if (item.type === 'section') {
      navigateToSection(item.sectionId);
    } else {
      window.location.hash = item.to;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-luxury ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_rgba(168,152,132,0.15)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" className="group flex flex-col leading-none">
            <span
              className={`font-display text-xl sm:text-2xl tracking-wider-2 transition-colors duration-500 ${
                scrolled ? 'text-ink' : 'text-ivory'
              }`}
            >
              PIECE OF STONE
            </span>
            <span
              className={`mt-0.5 text-[8px] sm:text-[9px] tracking-ultra uppercase transition-colors duration-500 ${
                scrolled ? 'text-taupe' : 'text-ivory/70'
              }`}
            >
              Art, Crafted in Stone
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`text-xs tracking-luxe uppercase transition-colors duration-300 hover:text-gold relative group ${
                  scrolled ? 'text-charcoal' : 'text-ivory/90'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-luxury group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className={`relative transition-colors duration-300 hover:text-gold ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} strokeWidth={1.25} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-medium text-ink">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-ivory'
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink transition-opacity duration-500 ease-luxury ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-display text-xl tracking-wider-2 text-ivory">PIECE OF STONE</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-ivory transition-colors hover:text-gold"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={1.25} />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 px-6 pt-16">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`font-display text-3xl tracking-wide text-ivory transition-all duration-500 hover:text-gold ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 80 + 200}ms` : '0ms' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-ultra uppercase text-ivory/40">Art, Crafted in Stone</span>
        </div>
      </div>
    </>
  );
}
