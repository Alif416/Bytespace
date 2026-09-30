import bolt from '../assets/logos/bolt.png'
import clover from '../assets/logos/clover.png'
import spiral from '../assets/logos/spiral.png'
import wave from '../assets/logos/wave.png'
import { SparkMark } from './icons/LogoMarks'

const ICON_CLASS = 'h-9 w-9'

const LOGOS = [
  { label: 'Logoipsum', icon: <img src={wave} alt="" className={ICON_CLASS} /> },
  { label: 'Logoipsum', icon: <SparkMark className={ICON_CLASS} /> },
  { label: 'Logoipsum', icon: <img src={bolt} alt="" className={ICON_CLASS} /> },
  { label: 'Logoipsum', icon: <img src={clover} alt="" className={ICON_CLASS} /> },
  { label: 'Logoipsum', icon: <img src={spiral} alt="" className={ICON_CLASS} /> },
]

export default function TrustedLogos() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 lg:justify-between">
        {LOGOS.map(({ label, icon }, i) => (
          <div key={i} className="flex items-center gap-2 text-[#83868D]">
            {icon}
            <span className="text-xl font-bold tracking-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
