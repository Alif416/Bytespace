interface CourseInfoCardProps {
  className?: string
  compact?: boolean
}

export default function CourseInfoCard({ className = '', compact = false }: CourseInfoCardProps) {
  return (
    <div className={`rounded-2xl bg-white ${compact ? 'px-4 py-3' : 'px-5 py-4'} shadow-lg ${className}`}>
      <p className="text-sm font-semibold text-slate-900">UI/UX Design</p>
      <p className="mt-1 text-xs text-slate-500">200+ Courses &bull; 1000+ Students</p>
    </div>
  )
}
