import { useState } from 'react'
import { useCart } from '../context/CartContext'

const rupeeSymbol = '₹'

export default function Checkout() {
  const { cart, subtotal, shipping, total, removeFromCart } = useCart()
  const [form, setForm] = useState({
    name: '', email: '', address: '', address2: '', city: '', pincode: '',
  })
  const [payMethod, setPayMethod] = useState('upi')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1400)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center page-enter" style={{ backgroundColor: '#F5EDD6' }}>
        <div className="text-center px-4 sm:px-6">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-cormorant text-2xl sm:text-4xl text-burgundy font-semibold mb-2 sm:mb-3">Order Placed!</h2>
          <p className="font-garamond text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Thank you, {form.name || 'dear customer'}. Your Threya Sindhoor is on its way.
          </p>
          <a href="/" className="btn-gold inline-block text-sm sm:text-base">Return to Home</a>
        </div>
      </div>
    )
  }

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F5EDD6' }}>
      {/* Header */}
      <div className="pt-28 sm:pt-32 pb-8 sm:pb-10 relative overflow-hidden" style={{ backgroundColor: '#7A1020' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <h1 className="font-cormorant text-3xl sm:text-5xl text-white font-semibold">Checkout</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
        {/* ──── LEFT FORM ─────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
          {/* Contact Info */}
          <div>
            <h2 className="font-cormorant text-xl sm:text-2xl font-semibold text-burgundy mb-1">Contact Info</h2>
            <p className="font-lato text-xs sm:text-sm text-gray-400 mb-3 sm:mb-5">Enter your contact information forms.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="input-field"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="input-field"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="font-cormorant text-xl sm:text-2xl font-semibold text-burgundy mb-3 sm:mb-5">Shipping Address</h2>
            <div className="space-y-3 sm:space-y-4">
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                required
                className="input-field"
              />
              <input
                name="address2"
                value={form.address2}
                onChange={handleChange}
                placeholder="Apartment, suite, etc. (optional)"
                className="input-field"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="input-field"
                />
                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                  required
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 sm:py-4 font-lato font-bold tracking-widest uppercase text-xs sm:text-sm transition-all duration-300
              ${loading
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-burgundy text-white hover:bg-burgundy-dark hover:shadow-lg active:scale-95'
              }`}
          >
            {loading ? 'Processing...' : 'Place Order'}
          </button>
        </form>

        {/* ──── RIGHT ORDER SUMMARY ────────────────────────────── */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white p-4 sm:p-8 shadow-sm">
            <h2 className="font-cormorant text-lg sm:text-2xl font-semibold text-burgundy mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-100">
              Order Summary
            </h2>

            {/* Cart Items */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-cream-dark overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://images.pexels.com/photos/7686264/pexels-photo-7686264.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-cormorant text-sm sm:text-base font-semibold text-gray-800 leading-tight truncate">
                      {item.name}
                    </p>
                    <p className="font-lato text-xs text-gray-400 mt-0.5">{item.size}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-lato text-xs text-gray-400 mb-0.5">x{item.qty}</p>
                    <p className="font-lato text-xs sm:text-sm font-bold text-burgundy">
                      {rupeeSymbol}{(item.price * item.qty).toFixed(0)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-1 flex-shrink-0 text-red-500 hover:text-red-700 transition-colors"
                    title="Remove from cart"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-5 h-4 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t border-gray-100 pt-3 sm:pt-5 space-y-2 sm:space-y-3">
              <div className="flex justify-between font-lato text-xs sm:text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{rupeeSymbol}{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between font-lato text-xs sm:text-sm text-gray-500">
                <span>Shipping</span>
                <span>{shipping > 0 ? `${rupeeSymbol}${shipping.toFixed(0)}` : 'Free'}</span>
              </div>
              <div className="flex justify-between font-cormorant text-lg sm:text-xl font-semibold text-burgundy pt-2 sm:pt-3 border-t border-gray-100">
                <span>Total</span>
                <span>{rupeeSymbol}{total.toFixed(0)}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-6 sm:mt-8">
              <h3 className="font-cormorant text-lg sm:text-xl font-semibold text-burgundy mb-3 sm:mb-4">Payment Options</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  {
                    value: 'upi', label: 'UPI',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M2 12h20" />
                        <text x="6" y="16" fontSize="6" fill="currentColor" stroke="none" fontFamily="sans-serif" fontWeight="bold">UPI</text>
                      </svg>
                    ),
                  },
                  {
                    value: 'card', label: 'Card',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth="1.5" />
                        <path strokeLinecap="round" strokeWidth="1.5" d="M2 10h20" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15h2M10 15h4" />
                      </svg>
                    ),
                  },
                  {
                    value: 'netbanking', label: 'Net Banking',
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-2M8 21v-6M12 21v-8M16 21v-6M21 21v-2M3 10l9-7 9 7H3z" />
                      </svg>
                    ),
                  },
                ].map(({ value, label, icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setPayMethod(value)}
                    className={`flex flex-col items-center justify-center gap-1 sm:gap-1.5 py-3 sm:py-4 border-2 transition-all duration-200
                      ${payMethod === value
                        ? 'border-gold bg-gold/5 text-burgundy'
                        : 'border-gray-200 text-gray-400 hover:border-gold/50 hover:text-burgundy'
                      }`}
                  >
                    {icon}
                    <span className="font-lato text-[8px] sm:text-[10px] tracking-wider uppercase text-center leading-tight">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
