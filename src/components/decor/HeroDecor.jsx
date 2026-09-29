import Squiggle from './Squiggle'

// Purely decorative background shapes echoing the Figma hero artwork
// (spiral squiggles, a ring, a triangle and a cylinder). Approximated
// with CSS/SVG primitives since the original 3D renders weren't exported.
export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* lime squiggle, top-left */}
      <Squiggle
        color="#DCFA57"
        className="absolute -left-6 top-24 w-24 h-64 opacity-90 hidden sm:block"
      />
      {/* white squiggle, left, below the lime one */}
      <Squiggle
        color="#FFFFFF"
        className="absolute left-40 top-72 w-16 h-40 opacity-90 hidden lg:block"
      />
      {/* white ring, bottom-left */}
      <div className="absolute left-10 bottom-16 w-40 h-40 rounded-full border-[26px] border-white/95 hidden md:block" />

      {/* lime cylinder, top-right */}
      <div
        className="absolute -right-16 top-10 w-52 h-80 rounded-[45%] hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, #F2FE60 0%, #C6E03F 100%)',
          transform: 'rotate(8deg)',
        }}
      />
      {/* white triangle, right */}
      <div
        className="absolute right-24 top-96 w-24 h-24 bg-white opacity-95 hidden lg:block"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      {/* white squiggle, bottom-right */}
      <Squiggle
        color="#FFFFFF"
        className="absolute right-8 bottom-0 w-24 h-56 opacity-90 hidden md:block"
      />
    </div>
  )
}
