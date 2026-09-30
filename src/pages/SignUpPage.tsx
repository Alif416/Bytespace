import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import SignupDecor from '../components/decor/SignupDecor'
import { LogoMark } from '../components/icons/Icons'
import RatingCard from '../components/RatingCard'
import SignupForm from '../components/SignupForm'
import { COURSES } from '../data/courses'

export default function SignUpPage() {
  return (
    <section className="bg-grid-lines relative min-h-screen overflow-hidden bg-brand-blue">
      <SignupDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Link to="/" className="inline-block">
          <LogoMark className="h-10 w-10" />
        </Link>

        <div className="mt-10 grid gap-16 pb-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Sign up and come in
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              The registration process is straightforward, uncomplicated, and efficient,
              allowing users to sign up quickly, easily, and at no cost
            </p>

            <div className="relative mt-16 hidden h-[420px] max-w-md lg:block">
              <CourseCard
                course={COURSES[1]}
                className="absolute left-0 top-16 w-64 opacity-90"
              />
              <CourseCard
                course={COURSES[2]}
                className="absolute left-24 top-0 z-10 w-72 shadow-2xl"
              />
              <RatingCard className="absolute bottom-0 left-40 z-20 w-56 shadow-2xl" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg">
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  )
}
