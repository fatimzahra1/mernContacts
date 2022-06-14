import React, {Fragment, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import Login from '../auth/Login';



function PrivateRoute({ Component}) {



  const authContext = useContext(AuthContext)
    const {isAuthenticated} = authContext
  useEffect( () =>{ const fetchContact= async () => {
    if (localStorage.getItem('token')) {
     await  authContext.loadUser()
    
    

    }
  
   
  }
  fetchContact()
  
 
    //eslint-disable-next-line
},[])

    
return (
  <Fragment>
  {
    isAuthenticated? <Component />:<Login />

  }
 
  </Fragment>
)
    
}

export default PrivateRoute