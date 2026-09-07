import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from '@/lib/router';
import { useNavigateToSection } from '@/lib/navigate';
import { Reveal } from '@/components/Reveal';
import { ProductCard } from '@/components/ProductCard';
import { products, getFeaturedProducts, getAutomotiveProducts, automotiveCategories, type ProductCategory } from '@/data/products';
import { supabase } from '@/lib/supabase';

// ─── Hero ──────────────────────────────────────────────────────────────
function Hero() {
  const navigateToSection = useNavigateToSection();
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/37765016/pexels-photo-37765016.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Mosaic artwork hero"
          className="h-full w-full object-cover opacity-70 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
          <p className="mb-6 text-[10px] tracking-ultra uppercase text-ivory/50">
            Handcrafted Mosaic Art
          </p>
        </div>

        <h1 className="animate-fade-up font-display text-5xl sm:text-7xl lg:text-8xl font-light text-ivory leading-[1.05]" style={{ animationDelay: '400ms' }}>
          PIECE OF STONE
        </h1>

        <p className="animate-fade-up mt-8 font-display text-2xl sm:text-3xl lg:text-4xl italic text-gold-light tracking-wide" style={{ animationDelay: '700ms' }}>
          Art, Crafted in Stone.
        </p>

        <p className="animate-fade-up mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-ivory/60" style={{ animationDelay: '900ms' }}>
          Handcrafted mosaic artwork created from carefully selected natural stone.
        </p>

        <div className="animate-fade-up mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6" style={{ animationDelay: '1100ms' }}>
          <button
            onClick={() => navigateToSection('collection')}
            className="inline-flex items-center justify-center gap-3 border border-ivory/30 px-8 py-4 text-[10px] tracking-ultra uppercase text-ivory transition-all duration-500 ease-luxury hover:bg-ivory hover:text-ink"
          >
            Explore the Collection
            <ArrowRight size={14} strokeWidth={1.25} />
          </button>
          <button
            onClick={() => navigateToSection('custom')}
            className="inline-flex items-center justify-center gap-3 bg-gold/90 px-8 py-4 text-[10px] tracking-ultra uppercase text-ink transition-all duration-500 ease-luxury hover:bg-gold-light"
          >
            Create Your Own
            <ArrowRight size={14} strokeWidth={1.25} />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1500ms' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-ultra uppercase text-ivory/40">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-ivory/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}

// ─── Collection ────────────────────────────────────────────────────────
function Collection() {
  const featured = getFeaturedProducts();

  return (
    <section id="collection" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">The Collection</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink">
            A selection of handcrafted pieces,
            <br />
            <span className="italic text-gold-dark">created stone by stone.</span>
          </h2>
        </Reveal>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* View all link */}
        <Reveal className="mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-[10px] tracking-ultra uppercase text-ink transition-colors hover:text-gold-dark group"
          >
            View Full Gallery
            <ArrowRight size={14} strokeWidth={1.25} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Automotive Collection ─────────────────────────────────────────────
function Automotive() {
  const automotive = getAutomotiveProducts();
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');

  const filtered = activeCategory === 'All'
    ? automotive
    : automotive.filter((p) => p.category === activeCategory);

  return (
    <section id="automotive" className="relative bg-ink py-24 lg:py-32 overflow-hidden">
      {/* Marble texture overlay */}
      <div className="marble-bg absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section header */}
        <Reveal className="mb-16 max-w-3xl">
          <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">The Automotive Collection</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-tight">
            For those who see automobiles
            <br />
            <span className="italic text-gold-light">as more than machines.</span>
          </h2>
          <p className="mt-8 text-sm sm:text-base leading-relaxed text-ivory/50 max-w-2xl">
            Each vehicle is recreated in mosaic using carefully selected pieces of natural stone —
            the curves of the bodywork, the play of light across polished surfaces, the spirit of an icon.
            Not a photograph. Not a print. Stone, placed piece by piece.
          </p>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={1} className="mb-12 flex flex-wrap gap-3">
          {(['All', ...automotiveCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[10px] tracking-luxe uppercase transition-all duration-500 ease-luxury border ${
                activeCategory === cat
                  ? 'border-gold bg-gold text-ink'
                  : 'border-ivory/20 text-ivory/50 hover:border-ivory/40 hover:text-ivory/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {/* Cinematic horizontal cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {filtered.map((product, i) => (
            <Reveal key={product.id} delay={(i % 2) + 1 as 1 | 2 | 3 | 4}>
              <Link to={`/product/${product.slug}`} className="group block">
                <div className="img-zoom relative overflow-hidden bg-stone-900">
                  <div className="aspect-[16/9]">
                    <img
                      src={product.images[0]?.src}
                      alt={product.images[0]?.alt || product.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <p className="text-[9px] tracking-ultra uppercase text-gold-light mb-2">{product.category}</p>
                    <h3 className="font-display text-2xl lg:text-3xl text-ivory transition-colors duration-300 group-hover:text-gold-light">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-ivory/50 line-clamp-2 max-w-md">{product.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-luxe uppercase text-ivory/70 group-hover:text-gold-light transition-colors">
                      View Piece
                      <ArrowUpRight size={14} strokeWidth={1.25} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Disclaimer */}
        <Reveal className="mt-12">
          <p className="text-[10px] tracking-wide text-ivory/30 max-w-2xl">
            Piece Of Stone creates original mosaic artwork inspired by automotive design. We are not officially affiliated with, endorsed by, or connected to any automotive manufacturer. All brand names and model names are referenced for descriptive purposes only.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Custom Artwork ────────────────────────────────────────────────────
function CustomArtwork() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', whatToCreate: '', dimensions: '', materials: '', budget: '', details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await supabase.from('inquiries').insert({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        inquiry_type: 'custom',
        message: formState.details,
        custom_details: {
          what_to_create: formState.whatToCreate,
          preferred_dimensions: formState.dimensions,
          preferred_materials: formState.materials,
          budget: formState.budget,
        },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const inputClass = "w-full border-b border-taupe/30 bg-transparent py-3 text-sm text-ink placeholder-taupe/40 focus:border-gold focus:outline-none transition-colors duration-300";

  return (
    <section id="custom" className="bg-cream py-24 lg:py-32 marble-bg">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          {/* Left: text */}
          <Reveal>
            <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Custom Artwork</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-tight">
              Your Vision.
              <br />
              <span className="italic text-gold-dark">Our Stone.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-charcoal/60 max-w-lg">
              Turn something meaningful to you into a handcrafted work of art.
              We create custom mosaic pieces from natural stone, built to your specifications and inspired by what moves you.
            </p>

            <div className="mt-12 space-y-4">
              {[
                'Your car or a special vehicle',
                'A logo or brand identity',
                'A building or architectural landmark',
                'A portrait or meaningful image',
                'A completely custom concept',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-charcoal/70">
                  <Check size={16} strokeWidth={1.5} className="text-gold flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={2}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-6 rounded-sm border border-luxe bg-ivory px-8 py-16 text-center">
                <Check size={40} strokeWidth={1} className="text-gold" />
                <h3 className="font-display text-2xl text-ink">Thank you.</h3>
                <p className="text-sm text-charcoal/60 max-w-xs">
                  Your request has been received. We will be in touch personally to discuss your vision.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-sm border border-luxe bg-ivory/50 p-8 lg:p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Name</label>
                    <input
                      type="text" required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Email</label>
                    <input
                      type="email" required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className={inputClass}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">What would you like created?</label>
                  <input
                    type="text" required
                    value={formState.whatToCreate}
                    onChange={(e) => setFormState({ ...formState, whatToCreate: e.target.value })}
                    className={inputClass}
                    placeholder="e.g. A 1969 Porsche 911 in Carrara marble"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Preferred dimensions</label>
                    <input
                      type="text"
                      value={formState.dimensions}
                      onChange={(e) => setFormState({ ...formState, dimensions: e.target.value })}
                      className={inputClass}
                      placeholder="e.g. 120 × 80 cm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Preferred materials</label>
                    <input
                      type="text"
                      value={formState.materials}
                      onChange={(e) => setFormState({ ...formState, materials: e.target.value })}
                      className={inputClass}
                      placeholder="e.g. Carrara, Onyx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Budget</label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Select a range</option>
                    <option value="under-5000">Under $5,000</option>
                    <option value="5000-10000">$5,000 – $10,000</option>
                    <option value="10000-25000">$10,000 – $25,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Upload an image or reference</label>
                  <div className="flex items-center justify-center border border-dashed border-taupe/30 py-8 px-4 text-center transition-colors hover:border-gold">
                    <span className="text-xs text-taupe/50">Drag a file here or click to browse</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Additional details</label>
                  <textarea
                    rows={3}
                    value={formState.details}
                    onChange={(e) => setFormState({ ...formState, details: e.target.value })}
                    className={inputClass + " resize-none"}
                    placeholder="Tell us anything else about your vision..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-ink py-4 text-[10px] tracking-ultra uppercase text-ivory transition-all duration-500 ease-luxury hover:bg-gold hover:text-ink disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Request a Custom Piece'}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Our Craft ─────────────────────────────────────────────────────────
function OurCraft() {
  const stages = [
    { num: '01', title: 'SELECT', desc: 'Carefully selected natural stones are chosen for their color, texture, and character.', img: 'https://images.pexels.com/photos/3847496/pexels-photo-3847496.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { num: '02', title: 'CUT', desc: 'Stone is carefully cut into individual pieces, each one a fraction of the whole.', img: 'https://images.pexels.com/photos/6713852/pexels-photo-6713852.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { num: '03', title: 'SHAPE', desc: 'Each piece is prepared to contribute to the larger composition.', img: 'https://images.pexels.com/photos/33753659/pexels-photo-33753659.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { num: '04', title: 'PLACE', desc: 'Thousands of individual pieces come together to create the final artwork.', img: 'https://images.pexels.com/photos/2279337/pexels-photo-2279337.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  ];

  return (
    <section id="craft" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-20 text-center">
          <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Our Craft</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink">
            The Art of the Details
          </h2>
        </Reveal>

        {/* Process steps */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stages.map((stage, i) => (
            <Reveal key={stage.title} delay={(i % 4) + 1 as 1 | 2 | 3 | 4}>
              <div className="group">
                <div className="img-zoom relative mb-6 overflow-hidden bg-cream">
                  <div className="aspect-[3/4]">
                    <img
                      src={stage.img}
                      alt={stage.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 font-display text-3xl text-ivory/90">
                    {stage.num}
                  </div>
                </div>
                <h3 className="font-display text-2xl tracking-wider-2 text-ink mb-3">{stage.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/60">{stage.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process tagline */}
        <Reveal className="mt-20 text-center">
          <p className="font-display text-3xl sm:text-4xl italic text-gold-dark">
            Select. Cut. Shape. Place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Materials ─────────────────────────────────────────────────────────
function Materials() {
  const stones = [
    { name: 'Carrara Marble', desc: 'Prized for its pure white background and soft grey veining. Sourced from the quarries of Tuscany.', img: 'https://images.pexels.com/photos/3847496/pexels-photo-3847496.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { name: 'Onyx', desc: 'A translucent stone with a warm, luminous depth. Each piece glows when lit, revealing hidden landscapes.', img: 'https://images.pexels.com/photos/28288786/pexels-photo-28288786.jpeg?auto=compress&cs=tinysrgb&w=1200' },
    { name: 'Travertine', desc: 'Warm, earthy, and textured. A stone that brings natural tone and subtle character to every composition.', img: 'https://images.pexels.com/photos/9990273/pexels-photo-9990273.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  ];

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-16 text-center max-w-2xl mx-auto">
          <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Materials</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-tight">
            Natural Stone.
            <br />
            <span className="italic text-gold-dark">Naturally Unique.</span>
          </h2>
          <p className="mt-8 text-sm leading-relaxed text-charcoal/60">
            Natural stone contains unique variations in color, veining, and texture. No two pieces are exactly alike —
            and no two artworks will ever be the same.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stones.map((stone, i) => (
            <Reveal key={stone.name} delay={(i % 3) + 1 as 1 | 2 | 3 | 4}>
              <div className="group">
                <div className="img-zoom relative overflow-hidden bg-sand/30 mb-6">
                  <div className="aspect-square">
                    <img
                      src={stone.img}
                      alt={stone.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">{stone.name}</h3>
                <p className="text-sm leading-relaxed text-charcoal/60">{stone.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ─────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="bg-ink py-24 lg:py-32 overflow-hidden relative">
      <div className="marble-bg absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Image */}
          <Reveal>
            <div className="img-zoom relative overflow-hidden bg-stone-900">
              <div className="aspect-[4/5]">
                <img
                  src="https://images.pexels.com/photos/6714320/pexels-photo-6714320.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Stone craftsmanship"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={2}>
            <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">About Piece Of Stone</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ivory leading-tight">
              More Than
              <br />
              <span className="italic text-gold-light">a Material.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ivory/60 max-w-lg">
              We believe stone has the ability to transform an image into something timeless.
              Piece Of Stone creates handmade mosaic artworks from natural stone, combining traditional craftsmanship
              with contemporary subjects such as automotive design.
            </p>
            <p className="mt-6 text-base leading-relaxed text-ivory/60 max-w-lg">
              Every piece is made by hand. Every stone is selected, cut, shaped, and placed — one at a time —
              until the composition is complete. The result is not a reproduction. It is an original,
              unrepeatable work of art.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ivory/10 pt-8">
              <div>
                <p className="font-display text-4xl text-gold-light">100%</p>
                <p className="mt-2 text-[10px] tracking-luxe uppercase text-ivory/40">Natural Stone</p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold-light">1000s</p>
                <p className="mt-2 text-[10px] tracking-luxe uppercase text-ivory/40">Pieces Per Artwork</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ───────────────────────────────────────────────────
function ContactSection() {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', inquiryType: 'Custom artwork', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await supabase.from('inquiries').insert({
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        inquiry_type: formState.inquiryType,
        message: formState.message,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const inputClass = "w-full border-b border-taupe/30 bg-transparent py-3 text-sm text-ink placeholder-taupe/40 focus:border-gold focus:outline-none transition-colors duration-300";

  return (
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-[10px] tracking-ultra uppercase text-gold">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-ink leading-tight">
            Let's Create Something
            <br />
            <span className="italic text-gold-dark">Unforgettable.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-6 border border-luxe bg-cream px-8 py-16 text-center">
              <Check size={40} strokeWidth={1} className="text-gold" />
              <h3 className="font-display text-2xl text-ink">Thank you.</h3>
              <p className="text-sm text-charcoal/60 max-w-xs">
                Your message has been received. We will be in touch with you personally.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Name</label>
                  <input type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Email</label>
                  <input type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className={inputClass} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Phone</label>
                  <input type="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className={inputClass} placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Inquiry type</label>
                <select value={formState.inquiryType} onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })} className={inputClass}>
                  <option>Purchase an existing piece</option>
                  <option>Custom artwork</option>
                  <option>Wholesale / business inquiry</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Message</label>
                <textarea rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className={inputClass + " resize-none"} placeholder="Tell us what you have in mind..." />
              </div>

              <div>
                <label className="block text-[10px] tracking-luxe uppercase text-taupe mb-2">Image upload (optional)</label>
                <div className="flex items-center justify-center border border-dashed border-taupe/30 py-8 px-4 text-center transition-colors hover:border-gold">
                  <span className="text-xs text-taupe/50">Drag a file here or click to browse</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-3 bg-ink px-12 py-4 text-[10px] tracking-ultra uppercase text-ivory transition-all duration-500 ease-luxury hover:bg-gold hover:text-ink disabled:opacity-50"
                >
                  {submitting ? 'Sending...' : 'Send Inquiry'}
                  <ArrowRight size={14} strokeWidth={1.25} />
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

// ─── Featured Quote Banner ─────────────────────────────────────────────
function QuoteBanner() {
  return (
    <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6634141/pexels-photo-6634141.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Marble texture"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl italic font-light text-ivory/90 leading-tight">
            "Made from stone.
            <br />
            Made to be remembered."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── HomePage ──────────────────────────────────────────────────────────
export function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <Collection />
      <QuoteBanner />
      <Automotive />
      <CustomArtwork />
      <OurCraft />
      <Materials />
      <About />
      <ContactSection />
    </div>
  );
}
