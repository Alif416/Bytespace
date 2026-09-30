export interface Testimonial {
  avatar: string
  name: string
  role: string
  quote: string
}

export default function TestimonialCard({ avatar, name, role, quote }: Testimonial) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      <img src={avatar} alt={name} className="h-14 w-14 rounded-full object-cover" />
      <p className="mt-5 font-bold text-slate-950">{name}</p>
      <p className="text-brand-blue">{role}</p>
      <p className="mt-4 text-slate-500">&ldquo;{quote}&rdquo;</p>
    </div>
  )
}
