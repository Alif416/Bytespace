import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function NotFoundPage() {
  return (
    <>
      <section className="bg-grid-lines relative overflow-hidden bg-brand-blue">
        <Navbar />

        <div className="mx-auto max-w-3xl px-6 pb-20 pt-8 text-center sm:pb-28">
          <p
            className="text-[6rem] font-extrabold leading-none sm:text-[8rem] lg:text-[9rem]"
            style={{
              backgroundImage: 'linear-gradient(180deg, #DCFA57 0%, #163AD9 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            404
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/80 sm:text-base">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-brand-lime px-7 py-3 text-sm font-semibold text-brand-blue transition hover:bg-brand-lime-dark"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
