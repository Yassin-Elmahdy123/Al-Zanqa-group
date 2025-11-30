import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage.jsx'
import PublishPage from './pages/PublishPage/PublishPage.jsx'
import CreatePage from './pages/CreatePage/CreatePage.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App
