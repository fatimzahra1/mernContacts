import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR
  } from '../types'

const authRreducer =(state, action) =>{
    switch (action.type) {
        case USER_LOADED:
             return {
                 ...state,
                 loading: false,
                 user: action.payload
             }
        case REGISTER_SUCCESS :
            localStorage.setItem('token', action.payload.token)
            console.log(localStorage.getItem('token'))
            console.log('i succ')
         
            return{
                ...state,
                ...action.payload,
                isAuthenticated : true,
                loading:false,
                token:'lol'
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            console.log('i failed')
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