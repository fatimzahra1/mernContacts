import axios from "axios";

const setAuthToken = token => {
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token
    } else {
        console.log('nooo token in setauth')
        delete   axios.defaults.headers.common['x-auth-token']
        }
}

export default setAuthToken