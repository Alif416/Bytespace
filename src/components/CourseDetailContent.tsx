import { useNavigate, useParams } from 'react-router-dom'
import AboutTab from './AboutTab'
import CategoryPill from './CategoryPill'
import LessonsTab from './LessonsTab'
import ReviewsTab from './ReviewsTab'

const TABS = ['About', 'Lessons', 'Reviews'] as const
type Tab = (typeof TABS)[number]

const COURSE_BASE_PATH = '/courses/build-digital-asset'

function tabToSlug(tab: Tab): string {
  return tab === 'About' ? '' : `/${tab.toLowerCase()}`
}

function slugToTab(slug: string | undefined): Tab {
  if (slug === 'lessons') return 'Lessons'
  if (slug === 'reviews') return 'Reviews'
  return 'About'
}

export default function CourseDetailContent() {
  const { tab } = useParams<{ tab?: string }>()
  const navigate = useNavigate()
  const activeTab = slugToTab(tab)

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {TABS.map((tabOption) => (
          <CategoryPill
            key={tabOption}
            label={tabOption}
            active={activeTab === tabOption}
            onClick={() => navigate(`${COURSE_BASE_PATH}${tabToSlug(tabOption)}`)}
          />
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'About' && <AboutTab />}
        {activeTab === 'Lessons' && <LessonsTab />}
        {activeTab === 'Reviews' && <ReviewsTab />}
      </div>
    </div>
  )
}
