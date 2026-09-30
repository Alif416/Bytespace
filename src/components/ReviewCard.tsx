import { StarIcon } from './icons/Icons'

export interface Review {
  avatar: string
  name: string
  role: string
  timeAgo: string
  rating: number
  quote: string
}

export default function ReviewCard({ avatar, name, role, timeAgo, rating, quote }: Review) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={name} className="h-11 w-11 rounded-full object-cover" />
          <div>
            <p className="font-bold text-slate-950">{name}</p>
            <p className="text-sm text-slate-400">{role}</p>
          </div>
        </div>
        <span className="shrink-0 text-sm text-slate-400">{timeAgo}</span>
      </div>

      <div className="mt-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-slate-900" />
        ))}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-500">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}
