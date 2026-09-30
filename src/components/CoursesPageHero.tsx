import CoursesSearchBar from './CoursesSearchBar'
import Navbar from './Navbar'

export default function CoursesPageHero() {
  return (
    <section className="bg-grid-lines relative overflow-hidden bg-brand-blue">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pb-10 pt-2 text-center lg:px-10">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Find Your Next Course</h1>

        <div className="mt-6">
          <CoursesSearchBar />
        </div>
      </div>
    </section>
  )
}
