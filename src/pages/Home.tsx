import { useContext } from 'react'
import { AuthContext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../store/slices/counter'

const Home = () => {
  const navigate = useNavigate()
  const { user, firebaseLogout } = useContext(AuthContext)!

  const state = useSelector((state: any) => state)
  const { countValue } = state

  const dispatch = useDispatch()

  if (!user) return navigate('/sign-in')

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <>
      <div style={{ padding: "10px" }}>
        <h1>Home</h1>
        <p>Counter: {countValue}</p>

        <div style={{ display: "flex", gap: "20px", margin: "30px 0px" }}>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <button onClick={firebaseLogout}>Logout</button>
      </div>
    </>
  )
}

export default Home