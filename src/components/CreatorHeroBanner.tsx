import Navbar from './Navbar'

export default function CreatorHeroBanner() {
  return (
    <section className="bg-grid-lines relative overflow-hidden bg-brand-blue">
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 lg:px-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <img
              src="https://i.pravatar.cc/160?img=13"
              alt="PurePearl Studio"
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-brand-lime px-3 py-1 text-xs font-semibold text-slate-900">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-sm text-white/80">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-full bg-brand-lime px-6 py-2.5 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
          >
            Follow
          </button>
        </div>

        <div className="mt-6 max-w-3xl space-y-3 text-sm leading-relaxed text-white/80">
          <p>
            Welcome to the creative world of [Creator&rsquo;s Name]. Here, you&rsquo;ll discover
            the passion, expertise, and inspiration that drive my creative journey. Let&rsquo;s
            explore and learn together!
          </p>
          <p>
            ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From
            digital designs to multimedia projects, each piece tells a unique story. Explore the
            world of creativity with me.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700">
            <span className="font-bold text-brand-blue">3</span> Products
          </span>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700">
            <span className="font-bold text-brand-blue">12</span> Followers
          </span>
        </div>
      </div>
    </section>
  )
}
