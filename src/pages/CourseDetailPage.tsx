import { useParams } from 'react-router-dom'
import CourseDetailContent from '../components/CourseDetailContent'
import CourseHeroBanner from '../components/CourseHeroBanner'
import CourseSidebar from '../components/CourseSidebar'
import Footer from '../components/Footer'
import NotFoundPage from './NotFoundPage'

const VALID_TABS = ['lessons', 'reviews']

export default function CourseDetailPage() {
  const { tab } = useParams<{ tab?: string }>()

  if (tab && !VALID_TABS.includes(tab)) {
    return <NotFoundPage />
  }

  return (
    <>
      <CourseHeroBanner />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_360px] lg:px-10">
          <CourseDetailContent />
          {/* Pulled up over the hero so the card starts level with the video thumbnail:
              thumbnail height (h-96) + hero bottom padding (pb-10) + this section's top padding (py-16). */}
          <aside className="relative z-10 lg:sticky lg:top-6 lg:-mt-[488px] lg:self-start">
            <CourseSidebar />
          </aside>
        </div>
      </section>

      <Footer />
    </>
  )
}
