import LessonModule from './LessonModule'
import ProgressCard from './ProgressCard'

const MODULES = [
  {
    title: 'Module 1: Introduction to Digital Assets',
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: 'Module 2: Design Principles for Impact',
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: 'Module 4: User-Centric Design Strategies',
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: 'Module 5: Interactive Media and Engagement',
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: 'Module 6: Project Showcase and Critique',
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
]

export default function LessonsTab() {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-950">Explore the Modules</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Immerse yourself in the course content as we break down each module into comprehensive
        lessons, providing practical insights and hands-on experiences.
      </p>

      <h3 className="mt-8 font-bold text-slate-950">Lesson List</h3>
      <div className="mt-4 space-y-6">
        {MODULES.map((module) => (
          <LessonModule key={module.title} {...module} />
        ))}
      </div>

      <h3 className="mt-10 font-bold text-slate-950">Lesson Content</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Engage with each lesson through captivating video content, detailed textual
        explanations, and interactive elements. Download resources, complete assignments, and
        test your understanding with quizzes.
      </p>

      <h3 className="mt-8 font-bold text-slate-950">Lesson Progress Tracking</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-500">
        Witness your growth as you complete lessons, with an intuitive progress tracking
        feature guiding you through your learning journey.
      </p>

      <ProgressCard className="mt-4 max-w-sm border border-slate-200 shadow-none" />
    </div>
  )
}
