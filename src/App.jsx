import LoginPage from "./LoginPage"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import RepositoryPage from "./RepositoryPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/repository" element={<RepositoryPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
