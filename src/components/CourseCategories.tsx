import { useState } from 'react'
import balancingProductivity from '../assets/balancing-productivity.jpg'
import buildDigitalAsset from '../assets/build-digital-asset.jpg'
import fromIdeaToStartupSuccess from '../assets/from-idea-to-startup-success.jpg'
import learnFigmaFromBasic from '../assets/learn-figma-from-basic.jpg'
import masteringMoneyManagement from '../assets/mastering-money-management.jpg'
import powerOfBigData from '../assets/power-of-big-data.jpg'
import CategoryPill from './CategoryPill'
import CourseCard, { type Course } from './CourseCard'

const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
]

const COURSES: Course[] = [
  {
    image: learnFigmaFromBasic,
    title: 'Learn Figma from Basic',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
  {
    image: buildDigitalAsset,
    title: 'Build Digital Asset',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
  {
    image: powerOfBigData,
    title: 'the Power of Big Data',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
  {
    image: balancingProductivity,
    title: 'Balancing Productivity and Creativity',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
  {
    image: masteringMoneyManagement,
    title: 'Mastering Money Management',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
  {
    image: fromIdeaToStartupSuccess,
    title: 'From Idea to Startup Success',
    rating: 4.5,
    instructor: 'purepearl studio',
    level: 'Beginner',
    studentCount: '26+',
    price: 25,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
  },
]

export default function CourseCategories() {
  const [active, setActive] = useState('Featured')

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#83868D] sm:text-base">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a
          variety of courses across different fields, from technology to the arts, and make a
          difference in your career and life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((label) => (
            <CategoryPill
              key={label}
              label={label}
              active={active === label}
              onClick={() => setActive(label)}
            />
          ))}
          <button
            type="button"
            className="flex items-center gap-1 px-2 py-2.5 text-sm font-medium text-brand-blue transition hover:underline"
          >
            + More
          </button>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {COURSES.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  )
}
