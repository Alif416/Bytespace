export default function NewsletterForm() {
  return (
    <form className="flex w-full max-w-md items-center gap-3" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="min-w-0 flex-1 rounded-full border border-slate-200 px-5 py-3.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand-lime px-7 py-3.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
      >
        Search
      </button>
    </form>
  )
}
