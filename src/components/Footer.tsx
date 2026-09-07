import { Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from '@/lib/router';
import { useNavigateToSection } from '@/lib/navigate';

export function Footer() {
  const navigateToSection = useNavigateToSection();

  const SectionLink = ({ sectionId, children }: { sectionId: string; children: React.ReactNode }) => (
    <button
      onClick={() => navigateToSection(sectionId)}
      className="text-sm text-ivory/60 transition-colors hover:text-ivory text-left"
    >
      {children}
    </button>
  );

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl tracking-wider-2">PIECE OF STONE</h3>
            <p className="mt-3 font-display text-lg italic text-ivory/60">Art, Crafted in Stone.</p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/40 max-w-xs">
              Handcrafted mosaic artwork created from carefully selected natural stone. Made to be remembered.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#" className="text-ivory/50 transition-colors hover:text-gold" aria-label="Instagram">
                <Instagram size={18} strokeWidth={1.25} />
              </a>
              <a href="#" className="text-ivory/50 transition-colors hover:text-gold" aria-label="Facebook">
                <Facebook size={18} strokeWidth={1.25} />
              </a>
              <a href="mailto:hello@pieceofstone.com" className="text-ivory/50 transition-colors hover:text-gold" aria-label="Email">
                <Mail size={18} strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-gold/80 mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><SectionLink sectionId="collection">Collection</SectionLink></li>
              <li><SectionLink sectionId="automotive">Automotive</SectionLink></li>
              <li><SectionLink sectionId="custom">Custom Artwork</SectionLink></li>
              <li><SectionLink sectionId="craft">Our Craft</SectionLink></li>
              <li><SectionLink sectionId="about">About</SectionLink></li>
              <li><Link to="/gallery" className="text-sm text-ivory/60 transition-colors hover:text-ivory">Gallery</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-gold/80 mb-6">Information</h4>
            <ul className="space-y-3">
              <li><SectionLink sectionId="contact">Contact</SectionLink></li>
              <li><a href="#" className="text-sm text-ivory/60 transition-colors hover:text-ivory">FAQ</a></li>
              <li><a href="#" className="text-sm text-ivory/60 transition-colors hover:text-ivory">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-ivory/60 transition-colors hover:text-ivory">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-ivory/60 transition-colors hover:text-ivory">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-ultra uppercase text-gold/80 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-ivory/60">
              <li><a href="mailto:hello@pieceofstone.com" className="transition-colors hover:text-ivory">hello@pieceofstone.com</a></li>
              <li>By appointment only</li>
              <li>White-glove delivery worldwide</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="text-xs text-ivory/30 tracking-wide">© {new Date().getFullYear()} Piece Of Stone. All rights reserved.</p>
          <p className="text-xs text-ivory/30 tracking-wide">Piece Of Stone is not affiliated with any automotive manufacturer.</p>
        </div>
      </div>
    </footer>
  );
}
