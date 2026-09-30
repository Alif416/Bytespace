import { VideoIcon } from './icons/CourseDetailIcons'

interface LessonModuleProps {
  title: string
  description: string
}

export default function LessonModule({ title, description }: LessonModuleProps) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lime">
        <VideoIcon className="h-4 w-4 text-slate-900" />
      </span>
      <div>
        <p className="font-bold text-slate-950">{title}</p>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  )
}
