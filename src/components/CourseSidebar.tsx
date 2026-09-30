import { CertificateIcon, ConsultIcon, FolderIcon, VideoIcon } from './icons/CourseDetailIcons'

const LESSONS = [
  { number: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
  { number: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
  { number: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
]

const INCLUDES = [
  { Icon: FolderIcon, label: 'Learning Resources' },
  { Icon: VideoIcon, label: 'Quality Lesson Videos' },
  { Icon: CertificateIcon, label: 'Certificate of Completion' },
  { Icon: ConsultIcon, label: 'Private Consultation' },
]

export default function CourseSidebar() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-950">112 Lessons (24 hours)</h3>

      <ul className="mt-4 space-y-3">
        {LESSONS.map(({ number, title, duration }) => (
          <li key={number} className="flex items-start justify-between gap-3">
            <p className="text-sm text-slate-700">
              <span className="mr-2 text-slate-400">{number}</span>
              {title}
            </p>
            <span className="shrink-0 text-sm text-brand-blue">{duration}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-slate-400">99 more videos</p>

      <p className="mt-5 text-sm text-slate-500">
        Ready to Dive In? Enroll Now and Start Building your Digital Future!
      </p>

      <p className="mt-3 text-2xl font-extrabold text-brand-blue">
        $25<span className="text-sm font-normal text-slate-400">/lifetime</span>
      </p>

      <button
        type="button"
        className="mt-4 w-full rounded-full bg-brand-lime py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
      >
        Enroll Now
      </button>

      <h4 className="mt-6 font-bold text-slate-950">This course include</h4>
      <ul className="mt-3 space-y-3">
        {INCLUDES.map(({ Icon, label }) => (
          <li key={label} className="flex items-center gap-3 text-sm text-slate-600">
            <Icon className="h-4 w-4 text-brand-blue" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
        <img
          src="https://i.pravatar.cc/80?img=13"
          alt="PurePearl Studio"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-slate-950">PurePearl Studio</p>
          <p className="text-xs text-slate-400">Professional Creator</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Ready to Dive In? Enroll Now and Start Building your Digital Future!
      </p>

      <button
        type="button"
        className="mt-4 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
      >
        See Full Profile
      </button>
    </div>
  )
}
