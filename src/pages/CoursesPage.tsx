import { useState } from 'react'
import CategoryPill from '../components/CategoryPill'
import CourseCard from '../components/CourseCard'
import CoursesPageHero from '../components/CoursesPageHero'
import FilterBar from '../components/FilterBar'
import Footer from '../components/Footer'
import { CATEGORIES } from '../data/categories'
import { COURSES } from '../data/courses'

export default function CoursesPage() {
  const [active, setActive] = useState('Featured')

  return (
    <>
      <CoursesPageHero />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FilterBar />

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {CATEGORIES.map((label) => (
              <CategoryPill
                key={label}
                label={label}
                active={active === label}
                onClick={() => setActive(label)}
              />
            ))}
          </div>

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
