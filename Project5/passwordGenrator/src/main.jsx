import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100wh' }}>
      <App />
    </div>
  </StrictMode>,
)
