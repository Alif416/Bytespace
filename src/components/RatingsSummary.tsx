import { StarIcon } from './icons/Icons'

const BREAKDOWN = [
  { stars: 5, percent: 65, count: 720 },
  { stars: 4, percent: 35, count: 120 },
  { stars: 3, percent: 8, count: 21 },
  { stars: 2, percent: 5, count: 12 },
  { stars: 1, percent: 6, count: 16 },
]

export default function RatingsSummary() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 p-6 sm:flex-row sm:items-center">
      <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-lime">
        <p className="text-xs font-medium text-slate-900">Ratings</p>
        <p className="text-2xl font-extrabold text-slate-900">4.7</p>
      </div>

      <div className="flex-1 space-y-2.5">
        {BREAKDOWN.map(({ stars, percent, count }) => (
          <div key={stars} className="flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-brand-lime" style={{ width: `${percent}%` }} />
            </div>
            <div className="flex shrink-0 gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3 w-3 text-slate-900" />
              ))}
            </div>
            <span className="w-8 shrink-0 text-right text-sm text-slate-400">{count}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
