import personPhoto from '../assets/people/man-headphones-laptop.png'
import { COURSES } from '../data/courses'
import CourseCard from './CourseCard'
import Squiggle from './decor/Squiggle'
import ProgressCard from './ProgressCard'
import StatItem from './StatItem'

const FEATURED_COURSE = COURSES[0]

const STATS = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export default function ProfessionalGrowth() {
  return (
    <section className="bg-gradient-to-br from-[#F7FAEC] via-[#EDF0F7] to-[#F6F6F6] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-xl text-slate-500">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills,
            gain industry expertise, or embark on a new career path entirely, we have the
            resources you need.
          </p>

          <div className="mt-10 flex gap-10">
            {STATS.map(({ value, label }) => (
              <StatItem key={label} value={value} label={label} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 pl-4 pr-10 pt-4">
          <Squiggle
            color="#DCFA57"
            className="absolute -right-2 top-16 h-64 w-24 opacity-90"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl">
            <CourseCard course={FEATURED_COURSE} />
          </div>

          <img
            src={personPhoto}
            alt=""
            className="pointer-events-none absolute -bottom-6 right-0 h-[92%] w-auto max-w-none drop-shadow-2xl"
          />

          <ProgressCard className="absolute right-4 top-20 z-10 w-44 shadow-xl" />
        </div>
      </div>
    </section>
  )
}
