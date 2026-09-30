import Squiggle from './Squiggle'

// Decorative background shapes for the sign-up page.
export default function SignupDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Squiggle
        color="#FFFFFF"
        className="absolute left-[27%] top-1/2 h-56 w-24 opacity-90 hidden lg:block"
      />
      <div
        className="absolute left-[8%] bottom-24 h-24 w-24 hidden lg:block"
        style={{
          background: '#DCFA57',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
      />
      <div className="absolute left-[19%] top-[38%] h-16 w-16 rounded-full border-[14px] border-brand-lime hidden lg:block" />
    </div>
  )
}
