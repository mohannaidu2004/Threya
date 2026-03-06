import { Link } from 'react-router-dom'
import LotusWatermark from '../components/LotusWatermark'
import { featuredProducts, IMAGES } from '../data/products'

export default function Home() {
  return (
    <div className="page-enter">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#7A1020' }}
      >
        {/* Full-bleed image — right panel, absolutely positioned */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
          <img
            src={`${IMAGES.HERO_DIYA_FABRIC}?auto=compress&cs=tinysrgb&w=1400&h=1000&fit=crop`}
            alt="Traditional Indian puja setup with marigold flowers, brass bowls and candlelight — Threya Sindhoor"
            className="w-full h-full object-cover object-center"
          />
          {/* Left-to-right gradient: solid burgundy on left, transparent on right */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #7A1020 0%, #7A1020 12%, rgba(122,16,32,0.93) 30%, rgba(122,16,32,0.55) 52%, rgba(122,16,32,0.18) 72%, transparent 100%)',
            }}
          />
        </div>

        {/* Background texture overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 55%, #9B1530 0%, transparent 55%),
                              radial-gradient(circle at 5% 20%, #5C0B17 0%, transparent 45%)`,
          }}
        />

        {/* Decorative gold border lines */}
        <div className="absolute top-20 left-6 right-6 bottom-6 border border-gold/20 pointer-events-none hidden lg:block z-20" />
        <div className="absolute top-22 left-8 right-8 bottom-8 border border-gold/10 pointer-events-none hidden lg:block z-20" />

        {/* Text content — left side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
          <div className="w-full lg:max-w-[52%] animate-slide-up">
            <p
              className="font-lato text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-4 sm:mb-6"
              style={{ color: '#C9A84C' }}
            >
              Nature Sindhoor
            </p>
            <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-7xl text-white font-semibold leading-tight mb-6 sm:mb-8">
              Purity in Tradition.<br />
              Beauty in Devotion.
            </h1>
            <Link
              to="/shop"
              className="inline-block btn-gold text-sm sm:text-base"
              style={{ backgroundColor: '#C9A84C', color: '#1C2340' }}
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60Z"
              fill="#F5EDD6"
            />
          </svg>
        </div>
      </section>

      {/* ─── FEATURED COLLECTION ──────────────────────────────────────── */}
      <section className="relative py-12 sm:py-20 overflow-hidden" style={{ backgroundColor: '#F5EDD6' }}>
        {/* Lotus watermarks */}
        <LotusWatermark className="right-4 sm:right-8 top-8" size={380} opacity={0.06} />
        <LotusWatermark className="left-0 bottom-0" size={200} opacity={0.04} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-semibold text-burgundy mb-8 sm:mb-12">
            Featured Collection
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <Link
                to="/shop"
                key={product.id}
                className="group block bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="aspect-square overflow-hidden bg-cream-dark">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/7686264/pexels-photo-7686264.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
                    }}
                  />
                </div>
                <div className="px-3 sm:px-4 py-2 sm:py-3">
                  <p className="font-cormorant text-sm sm:text-base font-semibold text-gray-800 line-clamp-2">
                    {product.name} ({product.size})
                  </p>
                </div>
              </Link>
            ))}

            {/* Promo card */}
            <div
              className="col-span-2 hidden sm:flex items-center justify-center text-center p-6 sm:p-8 relative overflow-hidden"
              style={{ backgroundColor: '#7A1020' }}
            >
              <LotusWatermark className="inset-0 m-auto" size={200} opacity={0.12} />
              <div className="relative z-10">
                <p className="font-lato text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold/80 mb-2">
                  Crafted with Devotion
                </p>
                <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-semibold mb-3 sm:mb-4">
                  Explore the Full Range
                </h3>
                <Link to="/shop" className="btn-gold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 inline-block">
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND VALUES STRIP ───────────────────────────────────────── */}
      <section
        className="py-10 sm:py-14"
        style={{ backgroundColor: '#1C2340' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {[
            { icon: '✦', title: 'Pure & Natural', desc: 'Sourced from the finest natural ingredients with no harmful chemicals' },
            { icon: '✦', title: 'Traditional Process', desc: 'Crafted using age-old methods passed down through generations of devotion' },
            { icon: '✦', title: 'Ethically Sourced', desc: 'Responsibly sourced ingredients supporting artisan communities across India' },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2 sm:gap-3">
              <span className="text-gold text-lg sm:text-xl">{icon}</span>
              <h3 className="font-cormorant text-lg sm:text-xl text-white font-semibold tracking-wide">{title}</h3>
              <p className="font-lato text-xs sm:text-sm text-white/50 leading-relaxed max-w-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT TEASER ─────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EDD6' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex-1 relative w-full">
            <div className="aspect-[4/3] overflow-hidden shadow-xl">
              <img
                src={`${IMAGES.PUJA_THALI_DIWALI}?auto=compress&cs=tinysrgb&w=700&h=525&fit=crop`}
                alt="Ornate Indian puja thali — the sacred ritual of Threya Sindhoor"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-28 sm:w-40 h-28 sm:h-40 border-4 sm:border-8 hidden lg:block"
              style={{ borderColor: '#C9A84C' }}
            />
          </div>
          <div className="flex-1">
            <p className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4">Our Heritage</p>
            <h2 className="font-cormorant text-2xl sm:text-4xl lg:text-5xl text-burgundy font-semibold mb-4 sm:mb-6 leading-tight">
              The Spirit of Threya.
            </h2>
            <p className="font-garamond text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Threya is a celebration of purity, inspired by generations of devotion, and sources traditional processes and the finest natural ingredients. Every jar of Threya Sindhoor carries the soul of an ancient ritual.
            </p>
            <Link to="/our-story" className="btn-gold inline-block text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
