import { COURSES } from '../data/courses'
import CourseCard from './CourseCard'
import RatingCard from './RatingCard'

// Decorative course-card collage shared by the sign-up and sign-in pages.
export default function AuthCollage() {
  return (
    <div className="relative mt-16 hidden h-[420px] max-w-md lg:block">
      <CourseCard course={COURSES[1]} className="absolute left-0 top-16 w-64 opacity-90" />
      <CourseCard
        course={COURSES[2]}
        className="absolute left-24 top-0 z-10 w-72 shadow-2xl"
      />
      <RatingCard className="absolute bottom-0 left-40 z-20 w-56 shadow-2xl" />
    </div>
  )
}
