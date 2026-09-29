import { LogoMark } from './icons/Icons'
import NewsletterForm from './NewsletterForm'

const LINK_COLUMNS = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

export default function Footer() {
  return (
    <footer className="bg-white pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <LogoMark />
              <span className="text-xl font-bold text-slate-950">ByteSpace</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-slate-500">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="mt-6">
              <NewsletterForm />
            </div>

            <p className="mt-4 max-w-sm text-xs text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to receive updates
              from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 sm:grid-cols-3 lg:gap-x-16">
            {LINK_COLUMNS.map((column, i) => (
              <ul key={i} className="space-y-3">
                {column.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-sm text-slate-700 transition hover:text-brand-blue"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100" />
      </div>
    </footer>
  )
}
