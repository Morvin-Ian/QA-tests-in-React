import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthState from "./context/Auth.tsx"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthState>
      <App />
    </AuthState>
  </BrowserRouter>,
)
