const GRADIENTS = {
  lime: 'radial-gradient(50% 50% at 50% 50%, rgba(203, 252, 1, 0.6) 0%, rgba(203, 252, 1, 0.138) 53%, rgba(203, 252, 1, 0.036) 75%, rgba(203, 252, 1, 0) 100%)',
  blue: 'radial-gradient(50% 50% at 50% 50%, rgba(22, 58, 217, 0.18) 0%, rgba(22, 58, 217, 0.05) 60%, rgba(22, 58, 217, 0) 100%)',
} as const

interface GlowBlobProps {
  color: keyof typeof GRADIENTS
  /** Tailwind classes for size, position and opacity. */
  className?: string
}

// Soft radial colour glow used as a decorative section background.
export default function GlowBlob({ color, className = '' }: GlowBlobProps) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={{ background: GRADIENTS[color] }}
      aria-hidden="true"
    />
  )
}
