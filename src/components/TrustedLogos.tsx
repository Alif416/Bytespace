import type { ComponentType } from 'react'
import {
  BoltMark,
  CloverMark,
  SparkMark,
  SpiralMark,
  WaveMark,
} from './icons/LogoMarks'

interface LogoEntry {
  label: string
  Icon: ComponentType<{ className?: string }>
}

const LOGOS: LogoEntry[] = [
  { label: 'Logoipsum', Icon: WaveMark },
  { label: 'Logoipsum', Icon: SparkMark },
  { label: 'Logoipsum', Icon: BoltMark },
  { label: 'Logoipsum', Icon: CloverMark },
  { label: 'Logoipsum', Icon: SpiralMark },
]

export default function TrustedLogos() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 sm:justify-between lg:px-10">
        {LOGOS.map(({ label, Icon }, i) => (
          <div key={i} className="flex items-center gap-2 text-[#83868D]">
            <Icon className="h-5 w-5" />
            <span className="text-lg font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
