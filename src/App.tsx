import { Route, Routes } from 'react-router-dom'
import CourseDetailPage from './pages/CourseDetailPage'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/courses/build-digital-asset/:tab?" element={<CourseDetailPage />} />
    </Routes>
  )
}

export default App
