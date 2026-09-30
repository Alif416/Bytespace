import { useState } from 'react'
import albertAvatar from '../assets/reviews/albert-flores.png'
import brooklynAvatar from '../assets/reviews/brooklyn-simmons.png'
import purepearlAvatar from '../assets/reviews/purepearl-studio.png'
import jamesAvatar from '../assets/testimonials/james.png'
import RatingsSummary from './RatingsSummary'
import ReviewCard, { type Review } from './ReviewCard'
import { StarIcon } from './icons/Icons'

const REVIEWS: Review[] = [
  {
    avatar: purepearlAvatar,
    name: 'PurePearl Studio',
    role: 'UI/UX Designer',
    timeAgo: 'a year ago',
    rating: 5,
    quote:
      'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
  },
  {
    avatar: albertAvatar,
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    timeAgo: 'a year ago',
    rating: 5,
    quote:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    avatar: jamesAvatar,
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    timeAgo: 'a year ago',
    rating: 5,
    quote:
      'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    avatar: brooklynAvatar,
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    timeAgo: 'a year ago',
    rating: 5,
    quote:
      'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me',
  },
]

const RATING_FILTERS = [5, 4, 3, 2, 1]

export default function ReviewsTab() {
  const [activeFilter, setActiveFilter] = useState<number | 'all'>('all')

  const visibleReviews =
    activeFilter === 'all' ? REVIEWS : REVIEWS.filter((review) => review.rating === activeFilter)

  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-950">What Learners Are Saying</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Discover what our learners have to say about their experience with &lsquo;Build Digital
        Assets: A Comprehensive Guide.&rsquo; Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital asset creation.
      </p>

      <div className="mt-6">
        <RatingsSummary />
      </div>

      <h3 className="mt-10 font-bold text-slate-950">Individual Reviews:</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          className={
            activeFilter === 'all'
              ? 'rounded-full bg-brand-lime px-5 py-2.5 text-sm font-semibold text-slate-900 transition'
              : 'rounded-full bg-[#F5F5F6] px-5 py-2.5 text-sm font-medium text-[#4B4C52] transition hover:bg-slate-200'
          }
        >
          All rating
        </button>
        {RATING_FILTERS.map((stars) => (
          <button
            key={stars}
            type="button"
            onClick={() => setActiveFilter(stars)}
            className={
              activeFilter === stars
                ? 'flex items-center gap-1.5 rounded-full bg-brand-lime px-4 py-2.5 text-sm font-semibold text-slate-900 transition'
                : 'flex items-center gap-1.5 rounded-full bg-[#F5F5F6] px-4 py-2.5 text-sm font-medium text-[#4B4C52] transition hover:bg-slate-200'
            }
          >
            <StarIcon className="h-3.5 w-3.5" />
            {stars}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {visibleReviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
        {visibleReviews.length === 0 && (
          <p className="text-sm text-slate-400">No reviews with this rating yet.</p>
        )}
      </div>
    </div>
  )
}
