import { useState } from 'react'
import LotusWatermark from '../components/LotusWatermark'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page-enter min-h-screen" style={{ backgroundColor: '#F5EDD6' }}>
      <div className="pt-28 sm:pt-32 pb-8 sm:pb-12 relative overflow-hidden" style={{ backgroundColor: '#7A1020' }}>
        <LotusWatermark className="right-4 sm:right-10 top-0" size={260} opacity={0.1} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl text-white font-semibold">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        {sent ? (
          <div className="text-center py-12 sm:py-16">
            <span className="text-gold text-4xl sm:text-5xl">✦</span>
            <h2 className="font-cormorant text-2xl sm:text-4xl text-burgundy font-semibold mt-3 sm:mt-4 mb-2 sm:mb-3">
              Thank You!
            </h2>
            <p className="font-garamond text-base sm:text-lg text-gray-600">
              We've received your message and will respond within 1–2 business days.
            </p>
          </div>
        ) : (
          <>
            <p className="font-garamond text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 text-center">
              We'd love to hear from you. Reach out with questions, wholesale inquiries, or just to say namaste.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                required
                className="input-field"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your Email"
                required
                className="input-field"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your Message"
                rows={6}
                required
                className="input-field resize-none"
              />
              <button type="submit" className="btn-gold w-full py-3 sm:py-4 text-sm sm:text-base">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
