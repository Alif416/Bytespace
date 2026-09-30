import CourseCategories from '../components/CourseCategories'
import CourseCreationShowcase from '../components/CourseCreationShowcase'
import CreatorCta from '../components/CreatorCta'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import LearningPaths from '../components/LearningPaths'
import ProfessionalGrowth from '../components/ProfessionalGrowth'
import Testimonials from '../components/Testimonials'
import TrustedLogos from '../components/TrustedLogos'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <CourseCategories />
      <LearningPaths />
      <ProfessionalGrowth />
      <CourseCreationShowcase />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </>
  )
}
