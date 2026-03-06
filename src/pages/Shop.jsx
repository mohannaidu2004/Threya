import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import LotusWatermark from '../components/LotusWatermark'
import { products } from '../data/products'

const COLORS = [
  { name: 'Beige', hex: '#C9A070', value: 'beige' },
  { name: 'Crimson', hex: '#7A1020', value: 'crimson' },
  { name: 'Navy', hex: '#1C2340', value: 'navy' },
]
const SIZES = ['All', '50g', '75g', '100g']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Most Reviewed']

export default function Shop() {
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedSize, setSelectedSize] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [colorOpen, setColorOpen] = useState(true)
  const [sizeOpen, setSizeOpen] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleColor = (colorValue) => {
    setSelectedColors((prev) =>
      prev.includes(colorValue) ? prev.filter((c) => c !== colorValue) : [...prev, colorValue]
    )
  }

  const filtered = products
    .filter((p) => {
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(p.color)
      const sizeMatch = selectedSize === 'All' || p.size === selectedSize
      return colorMatch && sizeMatch
    })
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price
      if (sortBy === 'Price: High to Low') return b.price - a.price
      if (sortBy === 'Most Reviewed') return b.reviews - a.reviews
      return 0
    })

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F5EDD6' }}>
      {/* Page Header */}
      <div className="pt-28 sm:pt-32 pb-8 sm:pb-10 relative overflow-hidden" style={{ backgroundColor: '#7A1020' }}>
        <LotusWatermark className="right-4 sm:right-10 top-0" size={280} opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            SHOP
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="w-8 sm:w-12 h-px bg-gold" />
            <p className="font-lato text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gold/80">
              All Products
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 flex flex-col lg:flex-row gap-6 sm:gap-10">
        {/* ─── FILTERS TOGGLE (Mobile) ─────────────────────────────── */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden flex items-center justify-between px-4 py-3 border border-burgundy rounded text-burgundy font-lato text-sm font-semibold tracking-widest uppercase"
        >
          <span>Filters</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 transition-transform duration-200 ${sidebarOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* ─── SIDEBAR ─────────────────────────────────────────────── */}
        <aside className={`w-full lg:w-56 flex-shrink-0 ${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
          {/* Color Filter */}
          <div className="mb-8">
            <button
              onClick={() => setColorOpen((o) => !o)}
              className="flex items-center justify-between w-full mb-4 group"
            >
              <span className="font-cormorant text-lg sm:text-xl font-semibold text-burgundy">Color</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 text-burgundy transition-transform duration-200 ${colorOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {colorOpen && (
              <div className="flex gap-3 flex-wrap">
                {COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => toggleColor(c.value)}
                    title={c.name}
                    className={`w-7 h-7 rounded-full border-2 transition-all duration-200
                      ${selectedColors.includes(c.value)
                        ? 'border-gold scale-110 shadow-md'
                        : 'border-transparent hover:border-gold/50'
                      }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={c.name}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Size Filter */}
          <div className="mb-8">
            <button
              onClick={() => setSizeOpen((o) => !o)}
              className="flex items-center justify-between w-full mb-4"
            >
              <span className="font-cormorant text-lg sm:text-xl font-semibold text-burgundy">Size</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 text-burgundy transition-transform duration-200 ${sizeOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {sizeOpen && (
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-gray-300 bg-white px-3 py-2.5 font-lato text-sm text-gray-600
                           focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              >
                {SIZES.map((s) => (
                  <option key={s} value={s}>{s === 'All' ? 'Select...' : s}</option>
                ))}
              </select>
            )}
          </div>

          {/* Active Filters */}
          {(selectedColors.length > 0 || selectedSize !== 'All') && (
            <button
              onClick={() => { setSelectedColors([]); setSelectedSize('All') }}
              className="font-lato text-xs tracking-widest uppercase text-burgundy underline hover:text-gold transition-colors duration-200"
            >
              Clear Filters
            </button>
          )}
        </aside>

        {/* ─── PRODUCT GRID ─────────────────────────────────────── */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <p className="font-lato text-sm text-gray-500">
              {filtered.length} product{filtered.length !== 1 ? 's' : ''}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <span className="font-lato text-xs text-gray-500 tracking-widest uppercase">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto border border-gray-300 bg-white px-3 py-2 font-lato text-sm text-gray-600
                           focus:outline-none focus:border-gold"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-cormorant text-xl sm:text-2xl text-burgundy">No products match your selection.</p>
              <button
                onClick={() => { setSelectedColors([]); setSelectedSize('All') }}
                className="mt-4 btn-gold inline-block text-sm"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
