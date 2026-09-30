import cylinderLime from '../../assets/hero/cylinder-lime.png'
import ringWhite from '../../assets/hero/ring-white.png'
import squiggleLime from '../../assets/hero/squiggle-lime.png'
import squiggleWhite from '../../assets/hero/squiggle-white.png'
import triangleWhite from '../../assets/hero/triangle-white.png'

// Decorative background shapes exported directly from the Figma hero artwork.
export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={squiggleLime}
        alt=""
        className="absolute -left-6 top-24 w-24 opacity-90 hidden sm:block"
      />
      <img
        src={squiggleWhite}
        alt=""
        className="absolute left-40 top-72 w-16 opacity-90 hidden lg:block"
      />
      <img
        src={ringWhite}
        alt=""
        className="absolute left-10 bottom-16 w-40 hidden md:block"
      />
      <img
        src={cylinderLime}
        alt=""
        className="absolute -right-16 top-10 w-52 hidden lg:block"
      />
      <img
        src={triangleWhite}
        alt=""
        className="absolute right-24 top-96 w-24 opacity-95 hidden lg:block"
      />
      <img
        src={squiggleWhite}
        alt=""
        className="absolute right-8 bottom-0 w-24 opacity-90 hidden md:block"
      />
    </div>
  )
}
