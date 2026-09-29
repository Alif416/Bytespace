import { StarIcon } from './icons/Icons'

const AVATAR_SEEDS = [12, 33, 47, 5, 21]

export default function RatingCard({ className = '' }) {
  return (
    <div className={`rounded-2xl bg-white px-5 py-4 shadow-lg ${className}`}>
      <p className="whitespace-nowrap text-sm font-semibold text-slate-900">Happy Students</p>
      <div className="mt-1 flex items-center gap-1">
        <span className="whitespace-nowrap text-xs font-medium text-slate-500">4.9 (240)</span>
        <StarIcon className="h-3.5 w-3.5 shrink-0 text-amber-400" />
      </div>

      <div className="mt-3 flex items-center">
        <div className="flex -space-x-2.5">
          {AVATAR_SEEDS.map((seed) => (
            <img
              key={seed}
              src={`https://i.pravatar.cc/40?img=${seed}`}
              alt=""
              className="h-7 w-7 shrink-0 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <span className="ml-2 flex h-7 shrink-0 items-center whitespace-nowrap rounded-full bg-brand-lime px-2.5 text-[11px] font-semibold text-brand-blue">
          2K+
        </span>
      </div>
    </div>
  )
}
