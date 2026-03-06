import LotusWatermark, { PaisleyWatermark } from '../components/LotusWatermark'
import { IMAGES } from '../data/products'

export default function OurStory() {
  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F5EDD6' }}>
      {/* Header Banner */}
      <div className="pt-28 sm:pt-32 pb-10 sm:pb-14 relative overflow-hidden" style={{ backgroundColor: '#7A1020' }}>
        <LotusWatermark className="right-0 top-0" size={350} opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <p className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold/70 mb-2 sm:mb-3">Heritage &amp; Legacy</p>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-7xl text-white font-semibold">Our Story</h1>
        </div>
      </div>

      {/* ─── MAIN EDITORIAL ─────────────────────────────────────────── */}
      <article className="relative overflow-hidden">
        <PaisleyWatermark className="right-0 top-20" size={300} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left — Story Text */}
          <div>
            <h2 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl text-burgundy font-semibold leading-tight mb-6 sm:mb-8">
              The Spirit of Threya.
            </h2>

            <div className="space-y-4 sm:space-y-5 font-garamond text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Threya is a celebration of purity — inspired by generations of devotion, and sourced through traditional processes and the finest natural ingredients.
              </p>
              <p>
                Threya is a celebration of purity, inspired by our devotion, nurtured through tradition and imbued with meaning. With traditional processes, we endeavour to source products that are uncompromisingly natural and exceed the expectations of those who cherish authenticity.
              </p>
              <p>
                Our sindhoor is prepared using methods perfected over centuries — stone-ground, sun-dried, and blended with botanicals that carry both fragrance and significance. Each batch is small, attentive, and deeply intentional.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="mt-8 sm:mt-10 pl-4 sm:pl-6 border-l-4 border-gold">
              <p className="font-cormorant text-lg sm:text-2xl lg:text-3xl text-burgundy italic font-medium leading-snug">
                "Sindhoor is not merely a powder — it is a prayer, a promise, a thread of devotion worn at the crown."
              </p>
              <footer className="mt-2 sm:mt-3 font-lato text-[10px] sm:text-xs tracking-widest uppercase text-gold">
                — Founder, Threya Sindhoor
              </footer>
            </blockquote>

            {/* Values */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: 'Natural Ingredients', desc: 'No synthetic dyes, no heavy metals. Only botanicals and earth minerals.' },
                { title: 'Traditional Methods', desc: 'Stone-ground and prepared following Ayurvedic principles.' },
                { title: 'Artisan Crafted', desc: 'Made in small batches by skilled artisans in rural India.' },
                { title: 'Sustainably Sourced', desc: 'Ingredients traced from seed to shelf, ethically and responsibly.' },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gold text-lg">✦</span>
                    <h4 className="font-cormorant text-base sm:text-lg font-semibold text-burgundy">{title}</h4>
                  </div>
                  <p className="font-lato text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Images */}
          <div className="space-y-4 sm:space-y-6 relative">
            {/* Main lifestyle image — Indian bride with sindoor */}
            <div className="overflow-hidden shadow-xl relative">
              <img
                src={`${IMAGES.WEDDING_RITUAL}?auto=compress&cs=tinysrgb&w=700&h=520&fit=crop`}
                alt="Sacred sindhoor ritual — the heart of Indian tradition"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 bg-gradient-to-t from-cream/60 to-transparent" />
            </div>

            {/* Secondary — sindhoor powder close-up */}
            <div className="overflow-hidden shadow-lg">
              <img
                src={`${IMAGES.THALI_ORNAMENTS}?auto=compress&cs=tinysrgb&w=700&h=420&fit=crop`}
                alt="Traditional puja thali with sacred ornaments and ritual items"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Gold accent corner */}
            <div
              className="absolute -right-3 sm:-right-4 bottom-[30%] w-20 sm:w-24 h-20 sm:h-24 border-3 sm:border-4 hidden lg:block z-10"
              style={{ borderColor: '#C9A84C' }}
            />
          </div>
        </div>
      </article>

      {/* ─── PROCESS SECTION ─────────────────────────────────────────── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ backgroundColor: '#7A1020' }}
      >
        <LotusWatermark className="left-0 top-0" size={260} opacity={0.08} />
        <LotusWatermark className="right-0 bottom-0" size={300} opacity={0.07} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <p className="font-lato text-xs tracking-[0.4em] uppercase text-gold/70 mb-4">The Threya Way</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl text-white font-semibold mb-14">
            From Earth to Shrine
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Harvested', desc: 'Finest vermillion minerals and botanical pigments sourced from trusted regions.' },
              { step: '02', title: 'Purified', desc: 'Raw ingredients undergo traditional purification using water and sunlight.' },
              { step: '03', title: 'Ground', desc: 'Stone-milled to achieve the signature silky texture of Threya Sindhoor.' },
              { step: '04', title: 'Blessed', desc: 'Each batch is prepared with intention during auspicious timings.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <span className="font-cormorant text-5xl font-bold text-gold/30">{step}</span>
                <h3 className="font-cormorant text-xl text-white font-semibold mt-2 mb-3">{title}</h3>
                <p className="font-lato text-sm text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
