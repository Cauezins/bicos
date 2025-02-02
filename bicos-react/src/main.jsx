import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './views/HomePage'
import TermsPage from './views/TermsPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  </StrictMode>,
)
