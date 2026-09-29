import sarahAvatar from '../assets/testimonial-sarah.png'
import jamesAvatar from '../assets/testimonial-james.png'
import alexAvatar from '../assets/testimonial-alex.png'
import TestimonialCard, { type Testimonial } from './TestimonialCard'

const TESTIMONIALS: Testimonial[] = [
  {
    avatar: sarahAvatar,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    avatar: jamesAvatar,
    name: 'James L.',
    role: 'Lifelong Learner',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    avatar: alexAvatar,
    name: 'Alex B.',
    role: 'Inspired Creator',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-16 sm:py-20"
      style={{
        background:
          'linear-gradient(225deg, #F5FBE0 0%, #FFFFFF 45%, #FFFFFF 55%, #D9E1F7 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-slate-500 lg:mt-2">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what
            we do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
