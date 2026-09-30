import { Link, useLocation } from 'react-router-dom'
import { BagIcon, LogoMark } from './icons/Icons'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '#' },
  { label: 'Creators', href: '#' },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-xl font-bold text-white">ByteSpace</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className={
                pathname === href
                  ? 'text-sm font-semibold text-white'
                  : 'text-sm font-medium text-white/70 transition hover:text-white'
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-sm font-medium text-white/80 transition hover:text-white">
            Sign In
          </a>
          <Link
            to="/signup"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            Join Us
          </Link>
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
