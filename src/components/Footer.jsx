import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C2340' }} className="text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-lato tracking-widest text-white/60 text-center sm:text-left">
          <Link to="/shipping" className="hover:text-gold transition-colors duration-200">
            Shipping &amp; Returns
          </Link>
          <span className="text-white/30 hidden sm:inline">|</span>
          <Link to="/privacy" className="hover:text-gold transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>

        {/* Logo center */}
        <div className="flex flex-col items-center">
          <span className="font-cormorant text-lg sm:text-xl font-semibold tracking-wide" style={{ color: '#C9A84C' }}>
            Threya
          </span>
          <span className="font-lato text-[6px] sm:text-[7px] tracking-[0.3em] sm:tracking-[0.4em] uppercase" style={{ color: '#C9A84C', marginTop: '-1px' }}>
            Sindhoor
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {[
            { label: 'Facebook', d: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
            { label: 'Twitter', d: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
            { label: 'Instagram', icon: 'instagram' },
            { label: 'Email', icon: 'mail' },
          ].map(({ label, d, icon }) => (
            <button
              key={label}
              aria-label={label}
              className="w-6 sm:w-8 h-6 sm:h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {icon === 'instagram' && (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
                  </>
                )}
                {icon === 'mail' && (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </>
                )}
                {d && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={d} />}
              </svg>
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
