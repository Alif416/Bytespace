import { SearchIcon } from './icons/Icons'

export default function SearchBar() {
  return (
    <form className="flex w-full max-w-xl items-center gap-3" onSubmit={(e) => e.preventDefault()}>
      <label className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-sm">
        <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          type="text"
          placeholder="Course, tutor, or keyword"
          className="w-full min-w-0 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
      >
        Search
      </button>
    </form>
  )
}
