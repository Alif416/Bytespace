interface StatCardProps {
  label: string
  sublabel: string
  value: string
  progress?: number
  badge?: string
  className?: string
}

export default function StatCard({ label, sublabel, value, progress, badge, className = '' }: StatCardProps) {
  return (
    <div className={`rounded-2xl bg-brand-blue px-5 py-4 text-white shadow-lg ${className}`}>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-white/60">{sublabel}</p>
      <p className="mt-2 text-2xl font-extrabold">{value}</p>

      {progress !== undefined && (
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div className="h-full rounded-full bg-brand-lime" style={{ width: `${progress}%` }} />
        </div>
      )}

      {badge && (
        <span className="mt-2 inline-flex items-center rounded-full bg-brand-lime px-2 py-0.5 text-xs font-semibold text-brand-blue">
          {badge}
        </span>
      )}
    </div>
  )
}
