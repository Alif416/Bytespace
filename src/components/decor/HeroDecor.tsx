import cylinderLime from '../../assets/hero/cylinder-lime.png'
import ringWhite from '../../assets/hero/ring-white.png'
import squiggleLime from '../../assets/hero/squiggle-lime.png'
import squiggleWhite from '../../assets/hero/squiggle-white.png'
import triangleWhite from '../../assets/hero/triangle-white.png'

// Decorative background shapes exported directly from the Figma hero artwork.
export default function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #6f8cff 1px, transparent 1px), linear-gradient(to bottom, #6f8cff 1px, transparent 1px)',
          backgroundSize: '122px 100%, 100% 122px',
          backgroundPosition: 'center top, left top',
          backgroundRepeat: 'repeat-x, repeat-y',
        }}
      />
      <img
        src={squiggleLime}
        alt=""
        className="absolute -left-2 top-[300px] w-48 hidden sm:block"
      />
      <img
        src={squiggleWhite}
        alt=""
        className="absolute left-[235px] top-[520px] w-28 hidden lg:block"
      />
      <img
        src={ringWhite}
        alt=""
        className="absolute left-[3%] bottom-16 w-52 hidden md:block"
      />
      <img
        src={cylinderLime}
        alt=""
        className="absolute -right-2 top-[270px] w-44 hidden lg:block"
      />
      <img
        src={triangleWhite}
        alt=""
        className="absolute right-[200px] top-[500px] w-32 hidden lg:block"
      />
      <img
        src={squiggleWhite}
        alt=""
        className="absolute right-[70px] bottom-12 w-44 hidden md:block"
      />
    </div>
  )
}
