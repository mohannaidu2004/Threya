import { useState } from 'react'
import StarRating from './StarRating'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="product-card group">
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-cream-dark relative">
        <img
          src={product.image}
          alt={`${product.name} ${product.size}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/7686264/pexels-photo-7686264.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
          }}
        />
        <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/5 transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="p-2.5 sm:p-4">
        <h3 className="font-cormorant text-sm sm:text-lg font-semibold text-gray-800 leading-tight mb-0.5 line-clamp-2">
          {product.name},&nbsp;{product.size}
        </h3>
        <p className="font-lato text-burgundy font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
          ₹{product.price.toFixed(2)}
        </p>
        <StarRating rating={product.rating} count={product.reviews} />

        <button
          onClick={handleAdd}
          className={`mt-2 sm:mt-3 w-full py-2 sm:py-2.5 text-xs sm:text-sm font-lato font-bold tracking-widest uppercase transition-all duration-300
            ${added
              ? 'bg-green-700 text-white'
              : 'bg-burgundy text-white hover:bg-burgundy-dark hover:shadow-md active:scale-95'
            }`}
        >
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}
