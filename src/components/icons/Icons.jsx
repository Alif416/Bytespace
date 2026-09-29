export function SearchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export function BagIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

export function StarIcon({ className = 'w-4 h-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.14 6.6.72-4.9 4.6 1.28 6.54L12 17.77l-5.88 3.23L7.4 14.46l-4.9-4.6 6.6-.72L12 2.5Z" />
    </svg>
  )
}

export function LogoMark({ className = 'w-9 h-9' }) {
  return (
    <div
      className={`${className} rounded-xl bg-brand-lime flex items-center justify-center shrink-0`}
    >
      <span className="font-extrabold text-brand-blue text-lg leading-none">b</span>
    </div>
  )
}
