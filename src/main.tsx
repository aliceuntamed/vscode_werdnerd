import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { builder } from '@builder.io/react'
import './index.css'
import App from './App.tsx'

// Initialize Builder with your API key
builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
