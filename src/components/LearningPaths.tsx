import businessImg from '../assets/category/business.png'
import designImg from '../assets/category/design.png'
import developmentImg from '../assets/category/development.png'
import itSoftwareImg from '../assets/category/it-software.png'
import marketingImg from '../assets/category/marketing.png'
import photographyImg from '../assets/category/photography.png'
import CategoryCard from './CategoryCard'

const CATEGORIES = [
  { label: 'Design', image: designImg },
  { label: 'Development', image: developmentImg },
  { label: 'IT & Software', image: itSoftwareImg },
  { label: 'Business', image: businessImg },
  { label: 'Marketing', image: marketingImg },
  { label: 'Photography', image: photographyImg },
]

export default function LearningPaths() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#83868D] sm:text-base">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse
          range of courses spans various fields, ensuring there's something for everyone.
          Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap justify-center gap-4 px-6 lg:flex-nowrap lg:px-10">
        {CATEGORIES.map(({ label, image }) => (
          <CategoryCard key={label} label={label} image={image} />
        ))}
      </div>
    </section>
  )
}
