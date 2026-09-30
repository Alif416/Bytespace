interface MarkProps {
  className?: string
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
