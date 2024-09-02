import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import AuthenticatedPages from './pages/auth/AuthenticatedPages'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={
          <AuthenticatedPages>
            <Home />
          </AuthenticatedPages>
        } />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
