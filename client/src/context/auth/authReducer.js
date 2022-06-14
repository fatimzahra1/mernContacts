import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from '../types'

const authRreducer = (state, action) =>{
    switch (action.type) {
        case USER_LOADED:
             return {
                 ...state,
                 isAuthenticated: true,
                 loading: false,
                 user: action.payload
             }
        case REGISTER_SUCCESS :
        case LOGIN_SUCCESS :
            console.log(localStorage.getItem('token'))
            console.log('i succ')
         
           return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading:false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            console.log(action.payload)
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: null
            }


        default:
            return state
    }

}

export default authRreducer