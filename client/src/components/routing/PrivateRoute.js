import React, {useContext} from 'react'
import { Navigate} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

function PrivateRoute({ Component}) {
    const authContext = useContext(AuthContext)
    const {isAuthenticated, loading} = authContext
    const auth = isAuthenticated && !loading 
  return (
    auth ? <Component /> : <Navigate to="/login" />

    )
}

export default PrivateRoute