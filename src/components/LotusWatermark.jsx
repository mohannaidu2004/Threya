export default function LotusWatermark({ className = '', size = 300, opacity = 0.07 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      style={{ opacity, position: 'absolute', pointerEvents: 'none', zIndex: 0 }}
      className={className}
      width={size}
      height={size}
      aria-hidden="true"
    >
      {/* Lotus petals */}
      <g fill="#C9A84C">
        {/* Center circle */}
        <circle cx="100" cy="105" r="12" />
        {/* Main petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="105"
            rx="10"
            ry="30"
            transform={`rotate(${angle} 100 105) translate(0 -25)`}
            opacity="0.85"
          />
        ))}
        {/* Stem */}
        <path d="M96 135 Q88 160 82 175 Q100 165 108 175 Q102 160 104 135 Z" opacity="0.7" />
        {/* Leaves */}
        <path d="M82 175 Q60 155 55 135 Q75 148 82 175Z" opacity="0.6" />
        <path d="M108 175 Q130 155 145 135 Q125 148 108 175Z" opacity="0.6" />
      </g>
    </svg>
  )
}

export function PaisleyWatermark({ className = '', size = 200 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 160"
      style={{ opacity: 0.07, position: 'absolute', pointerEvents: 'none', zIndex: 0 }}
      className={className}
      width={size}
      height={size * 1.6}
      aria-hidden="true"
    >
      <g fill="#C9A84C">
        <path d="M50 10 C20 10 5 35 5 60 C5 100 30 140 50 150 C70 140 95 100 95 60 C95 35 80 10 50 10Z" opacity="0.4" />
        <path d="M50 20 C30 20 15 40 15 60 C15 90 35 125 50 138 C65 125 85 90 85 60 C85 40 70 20 50 20Z" opacity="0.3" fill="none" stroke="#C9A84C" strokeWidth="2" />
        <circle cx="50" cy="45" r="10" opacity="0.6" />
        <circle cx="50" cy="45" r="6" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.8" />
      </g>
    </svg>
  )
}
