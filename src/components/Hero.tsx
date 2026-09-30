import limeArch from '../assets/hero/lime-arch.png'
import heroPersonPhoto from '../assets/people/man-headphones-laptop.png'
import CourseInfoCard from './CourseInfoCard'
import HeroDecor from './decor/HeroDecor'
import Navbar from './Navbar'
import ProgressCard from './ProgressCard'
import RatingCard from './RatingCard'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      <HeroDecor />
      <img
        src={limeArch}
        alt=""
        className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-auto w-[720px] max-w-none -translate-x-1/2 sm:w-[900px] lg:w-[1150px]"
      />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-4xl px-6 pt-8 text-center lg:pt-12">
          <h1 className="text-3xl font-extrabold leading-[1.15] text-white sm:text-5xl sm:leading-[1.1] lg:text-6xl">
            Get Access to Hundreds
            <br className="hidden sm:inline" /> Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/80 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>

          <div className="mt-8 flex justify-center">
            <SearchBar />
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-4xl justify-center overflow-hidden px-6 lg:mt-24 lg:overflow-visible">
          <div className="relative flex h-[360px] w-[300px] items-end justify-center sm:h-[480px] sm:w-[420px] lg:h-[560px] lg:w-[500px] scale-125">
            <img
              src={heroPersonPhoto}
              alt="Student wearing headphones holding a laptop"
              className="relative z-10 h-[92%] w-auto max-w-none object-contain"
            />

            <CourseInfoCard
              compact
              className="absolute left-0 top-40 z-20 w-40 whitespace-nowrap sm:top-44 sm:w-auto lg:-left-16"
            />
            <ProgressCard
              compact
              className="absolute right-0 top-28 z-20 w-32 sm:top-32 sm:w-36 lg:-right-4"
            />
            <RatingCard className="absolute bottom-24 left-0 z-20 w-48 sm:w-56 lg:-left-14" />
          </div>
        </div>
      </div>
    </section>
  )
}
