import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { user, firebaseLogout } = useContext(AuthContext)!

  if (!user) return navigate('/sign-in')
  return (
    <>
      <div>Home</div>
      <button onClick={firebaseLogout}>Logout</button>
    </>

  )
}

export default Home