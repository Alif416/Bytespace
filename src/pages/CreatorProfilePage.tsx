import CourseCard from '../components/CourseCard'
import CreatorHeroBanner from '../components/CreatorHeroBanner'
import FilterBar from '../components/FilterBar'
import Footer from '../components/Footer'
import { COURSES } from '../data/courses'

export default function CreatorProfilePage() {
  return (
    <>
      <CreatorHeroBanner />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FilterBar />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
