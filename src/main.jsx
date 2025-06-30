import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myprovider from '../utils/Myprovider.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient=new QueryClient({
  defaultOptions:{
    staleState:60*1000
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Myprovider>
      <App />
  </Myprovider>
  </QueryClientProvider>
  </StrictMode>,
)
