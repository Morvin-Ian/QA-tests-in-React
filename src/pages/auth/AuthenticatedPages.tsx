import  { useContext } from 'react'
import { AuthStateProps } from '../../types'
import { AuthContext } from '../../context/Auth'
import { Navigate } from 'react-router-dom'

const AuthenticatedPages = ({ children }: AuthStateProps) => {
    const { user } = useContext(AuthContext)!
    if (user) return children;

    return (
        <Navigate to={'sign-in'} />
    )
}

export default AuthenticatedPages