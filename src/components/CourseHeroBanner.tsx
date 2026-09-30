import heroThumbnail from '../assets/course-detail/hero-thumbnail.jpg'
import { StarIcon } from './icons/Icons'
import { LevelIcon } from './icons/CardIcons'
import { PeopleIcon, PlayIcon, ShareIcon } from './icons/CourseDetailIcons'
import Navbar from './Navbar'

const BADGES = [
  { Icon: LevelIcon, label: 'Intermediate' },
  { Icon: StarIcon, label: '4.8 (172 reviews)' },
  { Icon: PeopleIcon, label: '199 Students' },
]

export default function CourseHeroBanner() {
  return (
    <section className="bg-grid-lines relative overflow-hidden bg-brand-blue">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p className="mt-1 text-sm text-white/80">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <p className="mt-3 text-sm text-white/70">
              by <span className="font-medium text-brand-lime">purepearl studio</span>
            </p>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
          >
            <ShareIcon className="h-4 w-4" />
            Share
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {BADGES.map(({ Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-blue"
            >
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </div>

        <div className="relative mt-6 max-w-3xl overflow-hidden rounded-2xl">
          <img src={heroThumbnail} alt="Course preview" className="h-80 w-full object-cover sm:h-96" />
          <button
            type="button"
            aria-label="Play preview"
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-blue shadow-lg transition hover:bg-white"
          >
            <PlayIcon className="h-6 w-6 translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
