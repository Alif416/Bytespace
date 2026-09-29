import { BagIcon, LogoMark } from './icons/Icons'

const NAV_LINKS = [
  { label: 'Home', href: '#', active: true },
  { label: 'Courses', href: '#' },
  { label: 'Creators', href: '#' },
]

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-xl font-bold text-white">ByteSpace</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              className={
                active
                  ? 'text-sm font-semibold text-white'
                  : 'text-sm font-medium text-white/70 transition hover:text-white'
              }
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-medium text-white/80 transition hover:text-white">
            Sign In
          </a>
          <a href="#" className="text-sm font-medium text-white/80 transition hover:text-white">
            Join Us
          </a>
          <button
            type="button"
            aria-label="Cart"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-blue transition hover:bg-white/90"
          >
            <BagIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
