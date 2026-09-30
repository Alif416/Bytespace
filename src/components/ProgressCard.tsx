interface ProgressCardProps {
  label?: string
  value?: number
  className?: string
  compact?: boolean
}

export default function ProgressCard({
  label = 'Learning Progress',
  value = 55,
  className = '',
  compact = false,
}: ProgressCardProps) {
  return (
    <div className={`rounded-2xl bg-white ${compact ? 'px-4 py-3' : 'px-5 py-4'} shadow-lg ${className}`}>
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-slate-900">{value}%</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-brand-lime"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
