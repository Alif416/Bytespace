import { useState } from 'react'
import CategoryPill from '../components/CategoryPill'
import CourseCard from '../components/CourseCard'
import CoursesPageHero from '../components/CoursesPageHero'
import FilterBar from '../components/FilterBar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'
import { CATEGORIES } from '../data/categories'
import { COURSES } from '../data/courses'

const ROWS = 7
const COLUMNS = 3
const DISPLAY_COURSES = Array.from({ length: ROWS * COLUMNS }, (_, i) => COURSES[i % COURSES.length])

const PAGE_SIZE = 5
const TOTAL_PAGES = Math.ceil(DISPLAY_COURSES.length / PAGE_SIZE)

export default function CoursesPage() {
  const [active, setActive] = useState('Featured')
  const [page, setPage] = useState(1)

  const pageCourses = DISPLAY_COURSES.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

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
            {pageCourses.map((course, i) => (
              <CourseCard key={`${course.title}-${i}`} course={course} />
            ))}
          </div>

          <div className="mt-12">
            <Pagination currentPage={page} totalPages={TOTAL_PAGES} onPageChange={setPage} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
