import type { ComponentType } from 'react'
import bolt from '../assets/logos/bolt.png'
import clover from '../assets/logos/clover.png'
import spiral from '../assets/logos/spiral.png'
import wave from '../assets/logos/wave.png'
import { SparkMark } from './icons/LogoMarks'

interface LogoEntry {
  label: string
  Icon: ComponentType<{ className?: string }>
}

const imageIcon =
  (src: string) =>
  ({ className }: { className?: string }) => (
    <img src={src} alt="" className={className} />
  )

const LOGOS: LogoEntry[] = [
  { label: 'Logoipsum', Icon: imageIcon(wave) },
  { label: 'Logoipsum', Icon: SparkMark },
  { label: 'Logoipsum', Icon: imageIcon(bolt) },
  { label: 'Logoipsum', Icon: imageIcon(clover) },
  { label: 'Logoipsum', Icon: imageIcon(spiral) },
]

export default function TrustedLogos() {
  return (
    <section className="bg-[#f4f4f4] py-14 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 sm:justify-between">
        {LOGOS.map(({ label, Icon }, i) => (
          <div key={i} className="flex items-center gap-2 text-[#83868D]">
            <Icon className="h-9 w-9" />
            <span className="text-xl font-bold tracking-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
