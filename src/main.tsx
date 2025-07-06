import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouteProvider } from './context/RouteContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </StrictMode>
)
