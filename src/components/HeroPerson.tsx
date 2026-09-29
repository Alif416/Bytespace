interface HeroPersonProps {
  className?: string
}

// Placeholder illustration standing in for the photo cropped from Figma.
// Swap the <svg> below for the real exported PNG/JPG once available.
export default function HeroPerson({ className = '' }: HeroPersonProps) {
  return (
    <svg viewBox="0 0 360 420" className={className} aria-hidden="true">
      {/* torso / jacket */}
      <path
        d="M60 420 C60 300 100 250 180 250 C260 250 300 300 300 420 Z"
        fill="#3355C8"
      />
      {/* hoodie collar */}
      <path d="M140 262 C160 300 200 300 220 262 L205 240 L155 240 Z" fill="#E9ECF2" />
      {/* laptop */}
      <g transform="translate(90 340) rotate(-6)">
        <rect x="0" y="0" width="180" height="112" rx="10" fill="#20263B" />
        <rect x="8" y="8" width="164" height="88" rx="4" fill="#3A4568" />
      </g>
      {/* neck */}
      <rect x="155" y="205" width="50" height="50" rx="16" fill="#E6AF87" />
      {/* head */}
      <circle cx="180" cy="165" r="64" fill="#EDB78D" />
      {/* hair */}
      <path
        d="M116 150 C110 90 250 80 244 150 C244 120 200 96 180 96 C160 96 116 120 116 150Z"
        fill="#3B2A20"
      />
      {/* headphone band */}
      <path
        d="M110 150 C110 70 250 70 250 150"
        stroke="#16233D"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      {/* headphone ear cups */}
      <rect x="96" y="140" width="26" height="46" rx="13" fill="#16233D" />
      <rect x="238" y="140" width="26" height="46" rx="13" fill="#16233D" />
      {/* raised arm to ear */}
      <path
        d="M262 260 C300 240 300 190 268 165"
        stroke="#3355C8"
        strokeWidth="34"
        fill="none"
        strokeLinecap="round"
      />
      {/* hand near ear cup */}
      <circle cx="262" cy="160" r="20" fill="#EDB78D" />
      {/* simple smile */}
      <path
        d="M156 188 Q180 206 204 188"
        stroke="#8A4B2E"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
