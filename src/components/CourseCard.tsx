import { Link } from 'react-router-dom'
import { StarIcon } from './icons/Icons'
import { ClockIcon, CommentIcon, LessonIcon, LevelIcon } from './icons/CardIcons'

export interface Course {
  image: string
  title: string
  rating: number
  instructor: string
  level: string
  studentCount: string
  price: number
  lessons: string
  duration: string
  comments: string
}

const AVATAR_SEEDS = [15, 22, 41]

export default function CourseCard({ course }: { course: Course }) {
  const { image, title, rating, instructor, level, studentCount, price, lessons, duration, comments } = course

  return (
    <Link
      to="/courses/build-digital-asset"
      className="block overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg"
    >
      <div className="relative h-[220px] w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            <LessonIcon className="h-3 w-3" />
            {lessons}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            <ClockIcon className="h-3 w-3" />
            {duration}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            <CommentIcon className="h-3 w-3" />
            {comments}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-bold text-slate-950">{title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-slate-500">
            {rating}
            <StarIcon className="h-3.5 w-3.5 text-slate-300" />
          </span>
        </div>
        <p className="mt-1 text-sm">
          by <span className="text-brand-blue">{instructor}</span>
        </p>

        <div className="mt-3 flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-3 py-1.5 text-xs font-medium text-[#4B4C52]">
            <LevelIcon className="h-3 w-3" />
            {level}
          </span>
          <div className="flex -space-x-2.5">
            {AVATAR_SEEDS.map((seed) => (
              <img
                key={seed}
                src={`https://i.pravatar.cc/40?img=${seed}`}
                alt=""
                className="h-6 w-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <span className="flex h-6 items-center whitespace-nowrap rounded-full bg-brand-lime px-2 text-[11px] font-semibold text-slate-900">
            {studentCount}
          </span>
        </div>

        <p className="mt-3 text-lg font-extrabold text-brand-blue">
          ${price}
          <span className="text-sm font-normal text-slate-400">/lifetime</span>
        </p>
      </div>
    </Link>
  )
}
