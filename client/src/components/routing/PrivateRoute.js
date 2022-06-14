import React, {Fragment, useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import {useNavigate} from 'react-router-dom';



function PrivateRoute({ Component}) {


  const navigate = useNavigate();

  const authContext = useContext(AuthContext)
    const {isAuthenticated} = authContext
  useEffect( () =>{ const fetchContact= async () => {
    if (localStorage.getItem('token')) {
      console.log(authContext)
      console.log(`in Home ${localStorage.getItem('token')}`)
     await  authContext.loadUser()
    
    

    }
  
  
  }
  fetchContact()
    //eslint-disable-next-line
},[])

    
return (
  <Fragment>
  {
    isAuthenticated? <Component />:navigate("/login")

  }
 
  </Fragment>
)
    
}

export default PrivateRoute