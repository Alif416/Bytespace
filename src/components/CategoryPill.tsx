interface CategoryPillProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export default function CategoryPill({ label, active = false, onClick }: CategoryPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? 'rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-slate-900 transition'
          : 'rounded-full bg-[#F5F5F6] px-5 py-2.5 text-sm font-medium text-[#4B4C52] transition hover:bg-slate-200'
      }
    >
      {label}
    </button>
  )
}
