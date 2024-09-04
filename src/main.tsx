import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthState from "./context/Auth.tsx"
import { Provider } from 'react-redux'
import store from './store/index.ts'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthState>
        <App />
      </AuthState>
    </Provider>
  </BrowserRouter>,
)
