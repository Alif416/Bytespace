import Squiggle from './Squiggle'

// Decorative shapes echoing the Figma artwork for the creator CTA band.
export default function CreatorDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Squiggle
        color="#DCFA57"
        className="absolute -left-10 -top-6 h-72 w-28 opacity-90 hidden sm:block"
      />
      <Squiggle
        color="#FFFFFF"
        className="absolute left-32 top-6 h-52 w-20 opacity-90 hidden lg:block"
      />
      <Squiggle
        color="#DCFA57"
        className="absolute right-16 bottom-0 h-64 w-28 opacity-90 hidden md:block"
      />

      <div
        className="absolute right-24 top-8 h-24 w-24 hidden lg:block"
        style={{
          background: 'linear-gradient(135deg, #F2FE60 0%, #C6E03F 100%)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: 'rotate(8deg)',
        }}
      />
      <div
        className="absolute -right-10 top-0 h-52 w-44 rounded-b-[60%] bg-white hidden lg:block"
        style={{ transform: 'rotate(6deg)' }}
      />

      <div
        className="absolute -left-10 bottom-0 h-40 w-44 bg-white hidden md:block"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      <div className="absolute left-8 -bottom-10 h-40 w-40 rounded-full border-[26px] border-brand-lime hidden sm:block" />
    </div>
  )
}
