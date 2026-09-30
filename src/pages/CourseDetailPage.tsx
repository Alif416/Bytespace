import CourseDetailContent from '../components/CourseDetailContent'
import CourseHeroBanner from '../components/CourseHeroBanner'
import CourseSidebar from '../components/CourseSidebar'
import Footer from '../components/Footer'

export default function CourseDetailPage() {
  return (
    <>
      <CourseHeroBanner />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px] lg:px-10">
          <CourseDetailContent />
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <CourseSidebar />
          </aside>
        </div>
      </section>

      <Footer />
    </>
  )
}
