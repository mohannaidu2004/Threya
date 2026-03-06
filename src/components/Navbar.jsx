import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    // On non-home pages, always show the white bar
    if (!isHome) setScrolled(true)
    else setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/97 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center leading-none group flex-shrink-0">
          <span
            className="font-cormorant font-semibold text-2xl sm:text-4xl tracking-wide"
            style={{ color: '#C9A84C', textShadow: '0 1px 2px rgba(0,0,0,0.15)', letterSpacing: '0.05em' }}
          >
            Threya
          </span>
          <span
            className="font-lato text-[8px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] uppercase"
            style={{ color: '#C9A84C', marginTop: '-2px' }}
          >
            Sindhoor
          </span>
        </Link>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {['/', '/shop', '/gallery', '/our-story', '/contact'].map((path, i) => {
            const labels = ['Home', 'Shop', 'Gallery', 'Our Story', 'Contact']
            return (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-link font-lato text-xs font-light tracking-[0.2em] uppercase transition-all duration-200
                   ${scrolled ? 'text-navy hover:text-burgundy' : 'text-white/90 hover:text-gold'}
                   ${isActive ? (scrolled ? 'text-burgundy border-b border-burgundy pb-0.5' : 'text-gold border-b border-gold pb-0.5') : ''}`
                }
              >
                {labels[i]}
              </NavLink>
            )
          })}

          {/* Cart - Desktop */}
          <Link
            to="/checkout"
            className={`relative ml-2 lg:ml-4 transition-colors duration-200 ${scrolled ? 'text-navy hover:text-burgundy' : 'text-white/90 hover:text-gold'}`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button + Cart */}
        <div className="md:hidden flex items-center gap-3">
          {/* Cart - Mobile */}
          <Link
            to="/checkout"
            className={`relative transition-colors duration-200 ${scrolled ? 'text-navy hover:text-burgundy' : 'text-white/90 hover:text-gold'}`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-navy text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 transition-colors duration-200 ${scrolled ? 'text-navy hover:text-burgundy' : 'text-white/90 hover:text-gold'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className={`md:hidden border-t transition-all duration-300 ${scrolled ? 'border-gray-200 bg-white/97' : 'border-white/10 bg-burgundy/95'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {['/', '/shop', '/gallery', '/our-story', '/contact'].map((path, i) => {
              const labels = ['Home', 'Shop', 'Gallery', 'Our Story', 'Contact']
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === '/'}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded font-lato text-sm font-light tracking-[0.15em] uppercase transition-all duration-200
                     ${scrolled
                      ? `${isActive ? 'bg-burgundy/10 text-burgundy font-semibold' : 'text-navy hover:bg-gold/10 hover:text-burgundy'}`
                      : `${isActive ? 'bg-white/20 text-white font-semibold' : 'text-white/80 hover:bg-white/10'}`
                    }`
                  }
                >
                  {labels[i]}
                </NavLink>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m5-9l2 9" />
    </svg>
  )
}
