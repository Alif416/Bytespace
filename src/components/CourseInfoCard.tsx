interface CourseInfoCardProps {
  className?: string
}

export default function CourseInfoCard({ className = '' }: CourseInfoCardProps) {
  return (
    <div className={`rounded-2xl bg-white px-5 py-4 shadow-lg ${className}`}>
      <p className="text-sm font-semibold text-slate-900">UI/UX Design</p>
      <p className="mt-1 text-xs text-slate-500">200+ Courses &bull; 1000+ Students</p>
    </div>
  )
}
