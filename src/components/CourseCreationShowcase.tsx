import personPhoto from '../assets/people/woman-headphones-tablet.png'
import { CheckIcon } from './icons/Icons'
import RatingCard from './RatingCard'
import StatCard from './StatCard'

const CHECKLIST = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

export default function CourseCreationShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#F8F8F8] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -left-[450px] top-[65%] h-[900px] w-[900px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative mx-auto w-full max-w-md rounded-2xl border border-slate-400/70 p-6">
          <img src={personPhoto} alt="" className="w-full" />

          <div className="absolute left-6 top-6 flex w-40 flex-col gap-4">
            <StatCard label="Total Revenue" sublabel="July 1-28" value="$120.29" progress={55} />
            <StatCard label="Year to Date" sublabel="2023" value="$1,200.38" badge="+12$" />
          </div>
          <RatingCard className="absolute -bottom-2 right-0 w-52" />
        </div>

        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-6 max-w-lg text-slate-500">
            <span className="font-semibold text-slate-700">ByteSpace</span> supports individuals
            or entities in the creation, publication, and administration of educational courses.
          </p>

          <ul className="mt-8 space-y-4">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon className="h-6 w-6" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
