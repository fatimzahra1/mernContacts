import React, { useReducer } from "react";
import axios from 'axios'
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR
} from '../types'



const AuthState = (props) =>{
    
    const initialState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load User

    const loadUser = async () => {
        if(localStorage.getItem('token')) {
      
          setAuthToken(localStorage.getItem('token'))
        }
      try {
        const res = await axios.get('/api/auth')
        dispatch({ type: USER_LOADED, payload:res.data})
      } catch (error) {
        dispatch({ type: AUTH_ERROR})
      }
    }

    // Register User

    const register = async FormData => {
      const config = {
        headers : {
          'Content-Type': 'application/json'
        }
      }

      try {
       
         // We have the proxy aiming to localhost
        const response = await axios.post('/api/users', FormData, config)
         dispatch({type:REGISTER_SUCCESS, payload: response.data})
        console.log(localStorage.getItem('token'))
        loadUser()
       
      } catch (error) {
        console.log('register failed')
        dispatch({type:REGISTER_FAIL, payload: error.response.data.msg})
      }
    }

    // Login User

    // Logout

    // Clear Errors

    const clearErrors = () => dispatch({type:CLEAR_ERRORS})

   return (
       <AuthContext.Provider
       value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      error: state.error,
      user: state.user,
      register,
      clearErrors,
      loadUser
           }}
       >
      { props.children}
       </AuthContext.Provider>
   )
}

export default AuthState