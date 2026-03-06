// All images free to use under Pexels License (https://www.pexels.com/license/)
const HERO_DIYA_FABRIC   = 'https://images.pexels.com/photos/8819121/pexels-photo-8819121.jpeg'  // colorful Indian decor — flowers + lit diya + ornamented fabric, Diwali (Yan Krukau)
const PUJA_THALI_FLOWERS = 'https://images.pexels.com/photos/7686264/pexels-photo-7686264.jpeg'  // puja thali adorned with vibrant red powders + marigold flowers
const PUJA_THALI_SET     = 'https://images.pexels.com/photos/7686352/pexels-photo-7686352.jpeg'  // close-up intricately decorated puja thali set
const THALI_ORNAMENTS    = 'https://images.pexels.com/photos/13772390/pexels-photo-13772390.jpeg' // detailed puja thali dark red and gold ceremonial items
const PUJA_THALI_DIWALI  = 'https://images.pexels.com/photos/7685636/pexels-photo-7685636.jpeg'  // ornate Indian puja thali for Diwali rituals
const PUJA_THALI_CLOSE   = 'https://images.pexels.com/photos/7685644/pexels-photo-7685644.jpeg'  // close-up puja thali set for rituals
const POOJA_JAIPUR       = 'https://images.pexels.com/photos/14855916/pexels-photo-14855916.jpeg' // pooja articles on puja thali Jaipur India
const POWDER_BOWLS       = 'https://images.pexels.com/photos/7686376/pexels-photo-7686376.jpeg'  // top view colorful powders and grains traditional setup
const WEDDING_RITUAL     = 'https://images.pexels.com/photos/5433120/pexels-photo-5433120.jpeg'  // close-up traditional Indian wedding sindhoor ritual

export const products = [
  {
    id: 1,
    name: 'Threya Sacred Crimson Sindhoor',
    size: '100g',
    price: 100,
    priceUSD: 10.0,
    color: 'crimson',
    colorHex: '#7A1020',
    reviews: 128,
    rating: 5,
    image: '/images/shop/1.png',
  },
  {
    id: 2,
    name: 'Threya Bridal Maroon Sindhoor',
    size: '50g',
    price: 50,
    priceUSD: 5.0,
    color: 'maroon',
    colorHex: '#4A0E15',
    reviews: 96,
    rating: 5,
    image: '/images/shop/2.png',
  },
  {
    id: 3,
    name: 'Threya Sacred Crimson Sindhoor',
    size: '50g',
    price: 70,
    priceUSD: 7.0,
    color: 'crimson',
    colorHex: '#7A1020',
    reviews: 74,
    rating: 5,
    image: '/images/shop/3.png',
  },
  {
    id: 4,
    name: 'Threya Classic Vermillion Sindhoor',
    size: '75g',
    price: 85,
    priceUSD: 8.5,
    color: 'vermillion',
    colorHex: '#C1440E',
    reviews: 112,
    rating: 5,
    image: '/images/shop/4.png',
  },
  {
    id: 5,
    name: 'Threya Golden Kesar Sindhoor',
    size: '50g',
    price: 120,
    priceUSD: 12.0,
    color: 'gold',
    colorHex: '#C9A84C',
    reviews: 55,
    rating: 5,
    image: '/images/shop/5.png',
  },
  {
    id: 6,
    name: 'Threya Natural Herbal Sindhoor',
    size: '100g',
    price: 90,
    priceUSD: 9.0,
    color: 'maroon',
    colorHex: '#4A0E15',
    reviews: 89,
    rating: 4,
    image: '/images/shop/6.png',
  },
]

export const featuredProducts = [
  {
    id: 101,
    name: 'Classic Maroon',
    size: '50g',
    image: '/images/fc/1.png',
  },
  {
    id: 102,
    name: 'Sacred Crimson',
    size: '100g',
    image: '/images/fc/2.png',
  },
  {
    id: 103,
    name: 'Golden Bliss',
    size: '75g',
    image: '/images/fc/3.png',
  },
  {
    id: 104,
    name: 'Heritage Red',
    size: '50g',
    image: '/images/fc/4.png',
  },
  {
    id: 105,
    name: 'Pure Devotion',
    size: '100g',
    image: '/images/fc/5.png',
  },
]

// Export image references for use in pages
export const IMAGES = { HERO_DIYA_FABRIC, PUJA_THALI_FLOWERS, PUJA_THALI_SET, THALI_ORNAMENTS, PUJA_THALI_DIWALI, PUJA_THALI_CLOSE, POOJA_JAIPUR, POWDER_BOWLS, WEDDING_RITUAL }
