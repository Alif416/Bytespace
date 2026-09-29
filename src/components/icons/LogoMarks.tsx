interface MarkProps {
  className?: string
}

export function WaveMark({ className = 'h-5 w-5' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 7c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

export function SparkMark({ className = 'h-5 w-5' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="12"
          y1="4"
          x2="12"
          y2="9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 12 12)`}
        />
      ))}
    </svg>
  )
}

export function BoltMark({ className = 'h-5 w-5' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="7" fill="currentColor" opacity="0.12" />
      <path
        d="M13 6 7 13h4l-1 5 6-7h-4l1-5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function CloverMark({ className = 'h-5 w-5' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="8" r="3" fill="currentColor" />
      <circle cx="12" cy="16" r="3" fill="currentColor" />
      <circle cx="8" cy="12" r="3" fill="currentColor" />
      <circle cx="16" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}

export function SpiralMark({ className = 'h-5 w-5' }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
