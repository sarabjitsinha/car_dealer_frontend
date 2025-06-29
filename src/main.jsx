import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myprovider from '../utils/Myprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Myprovider>
      <App />
  </Myprovider>
  </StrictMode>,
)
