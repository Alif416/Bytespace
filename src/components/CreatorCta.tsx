import CreatorDecor from './decor/CreatorDecor'

export default function CreatorCta() {
  return (
    <section
      className="relative overflow-hidden bg-brand-blue py-20 sm:py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    >
      <CreatorDecor />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-white underline decoration-white/40 decoration-2 underline-offset-4 sm:text-4xl">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-white/80 sm:text-base">
          Experience the collaboration of numerous creators and an expanding selection of
          courses. Register now and become a part of a community comprising over 10,000 local
          and international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-8 rounded-full bg-brand-lime px-7 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
        >
          Join as Creator
        </button>
      </div>
    </section>
  )
}
