import LotusWatermark from '../components/LotusWatermark'

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: '/images/fc/1.png', alt: 'Threya Gallery - Image 1' },
    { id: 2, src: '/images/fc/2.png', alt: 'Threya Gallery - Image 2' },
    { id: 3, src: '/images/fc/3.png', alt: 'Threya Gallery - Image 3' },
    { id: 4, src: '/images/fc/4.png', alt: 'Threya Gallery - Image 4' },
    { id: 5, src: '/images/fc/5.png', alt: 'Threya Gallery - Image 5' },
    { id: 6, src: '/images/fc/6.png', alt: 'Threya Gallery - Image 6' },
    { id: 7, src: '/images/fc/7.png', alt: 'Threya Gallery - Image 7' },
    { id: 8, src: '/images/fc/8.png', alt: 'Threya Gallery - Image 8' },
    { id: 9, src: '/images/fc/9.png', alt: 'Threya Gallery - Image 9' },
    { id: 10, src: '/images/fc/10.png', alt: 'Threya Gallery - Image 10' },
  ]

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F5EDD6' }}>
      {/* Page Header */}
      <div className="pt-28 sm:pt-32 pb-8 sm:pb-10 relative overflow-hidden" style={{ backgroundColor: '#7A1020' }}>
        <LotusWatermark className="right-4 sm:right-10 top-0" size={280} opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            GALLERY
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-8 sm:w-12 h-px bg-gold" />
            <p className="font-lato text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold/80">
              Explore Our Collection
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="relative py-12 sm:py-20 overflow-hidden">
        <LotusWatermark className="right-4 sm:right-8 top-8" size={380} opacity={0.06} />
        <LotusWatermark className="left-0 bottom-0" size={200} opacity={0.04} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-cream-dark">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Description */}
      <section className="py-12 sm:py-20 relative overflow-hidden" style={{ backgroundColor: '#F5EDD6' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="font-lato text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold mb-3 sm:mb-4">
            Threya Sindhoor
          </p>
          <h2 className="font-cormorant text-2xl sm:text-4xl lg:text-5xl text-burgundy font-semibold mb-4 sm:mb-6 leading-tight">
            Celebrating Tradition & Beauty
          </h2>
          <p className="font-garamond text-sm sm:text-lg text-gray-600 leading-relaxed">
            Every image in our gallery represents the essence of Threya Sindhoor — a celebration of purity, tradition, and devotion. From the vibrant powder to the sacred rituals, each moment captures the soul of our brand and the timeless beauty of Indian heritage.
          </p>
        </div>
      </section>
    </div>
  )
}
