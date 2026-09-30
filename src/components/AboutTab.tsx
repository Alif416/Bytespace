import sneakPeek1 from '../assets/course-detail/sneak-peek-1.jpg'
import sneakPeek2 from '../assets/course-detail/sneak-peek-2.jpg'
import sneakPeek3 from '../assets/course-detail/sneak-peek-3.jpg'
import sneakPeek4 from '../assets/course-detail/sneak-peek-4.jpg'
import { CheckIcon } from './icons/Icons'

const DESCRIPTION_PARAGRAPHS = [
  `Embark on an enlightening exploration into the world of digital creation with our
  comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative
  learning experience invites you to delve deep into the intricacies of crafting digital
  content. From laying the groundwork with foundational concepts to mastering advanced
  techniques, this guide is meticulously curated to empower you with the skills essential for
  navigating the dynamic landscape of digital asset creation.`,
  `In the initial modules, you'll establish a solid foundation by immersing yourself in the
  foundational concepts that form the backbone of digital asset creation. Understand the
  fundamental elements that constitute compelling digital content and gain proficiency in
  leveraging these elements to communicate effectively in the digital realm.`,
  `As you progress through the course, you'll ascend to higher levels of expertise, delving
  into the nuances of design principles that drive impactful creations. Uncover the secrets
  behind effective visual communication, exploring color theory, typography, and layout
  strategies that elevate your digital assets to new heights. Engage in hands-on practical
  exercises that reinforce your understanding, allowing you to apply these principles in
  practical scenarios.`,
]

const SNEAK_PEEK_IMAGES = [sneakPeek1, sneakPeek2, sneakPeek3, sneakPeek4]

const KEY_POINTS = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
]

export default function AboutTab() {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-950">Description</h2>
      <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-500">
        {DESCRIPTION_PARAGRAPHS.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-extrabold text-slate-950">Sneak Peak</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {SNEAK_PEEK_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-24 w-full rounded-xl object-cover sm:h-28"
          />
        ))}
      </div>

      <h2 className="mt-10 text-xl font-extrabold text-slate-950">Key Points</h2>
      <ul className="mt-4 space-y-3">
        {KEY_POINTS.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <CheckIcon className="h-5 w-5" />
            <span className="text-sm text-slate-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
