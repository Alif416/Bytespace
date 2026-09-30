import { SearchIcon } from './icons/Icons'

export default function CoursesSearchBar() {
  return (
    <form className="mx-auto flex w-full max-w-xl items-center gap-3" onSubmit={(e) => e.preventDefault()}>
      <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-sm">
        <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full min-w-0 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </label>
      <button
        type="button"
        className="flex shrink-0 items-center gap-1.5 rounded-full bg-brand-lime px-5 py-3.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
      >
        Courses
        <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  )
}
