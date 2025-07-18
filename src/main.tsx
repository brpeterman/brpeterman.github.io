import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element=<App />></Route>
        <Route path="/cv" element=<App page="cv"/>></Route>
        <Route path="/portfolio" element=<App page="portfolio"/>></Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
