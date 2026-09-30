import { Route, Routes } from 'react-router-dom'
import CourseDetailPage from './pages/CourseDetailPage'
import LandingPage from './pages/LandingPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses/build-digital-asset/:tab?" element={<CourseDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
