import "../types"
import { ADD_CONTACT, CLEAR_CONTACTS, CLEAR_CURENT, CLEAR_FILTER, CONTACT_ERROR, DELETE_CONTACT, FILTER_CONTACTS, GET_CONTACTS, SET_CURRENT, UPDATE_CONTACT } from "../types"


const contactReducer = (state, action) => {
switch (action.type){
    case ADD_CONTACT:
      
     return    {...state,
       contacts: [action.payload, ...state.contacts],
       loading:false
        }

    case DELETE_CONTACT:
       const filteredContacts = state.contacts.filter(contact =>contact._id !== action.payload)
     
      return    {...state,
        contacts: filteredContacts,
        loading: false
         }
    
    case CLEAR_CONTACTS:
      return {
        ...state,
        contacts: null,
        filtered: null,
        error:null,
        current:null
      }
    case SET_CURRENT:
    
    
      return {
        ...state,
        current: action.payload
      }

    case CLEAR_CURENT:
      return {
        ...state,
        current:null
      }

    case UPDATE_CONTACT:
      return {
        ...state,
      contacts: state.contacts.map(contact =>contact._id === action.payload._id?action.payload: contact ),
      loading:false
    }  

    case FILTER_CONTACTS:
      return {
...state,
filtered: state.contacts.filter(contact =>{
  const regex= new RegExp(`${action.payload}`, 'gi')
  return contact.name.match(regex)|| contact.email.match(regex)

})
      }


      case CLEAR_FILTER:
        return {
          ...state,
          filtered:null
        }
      
      case CONTACT_ERROR:
        return {
          ...state,
          error: action.payload,
          loading:false
        }

        case GET_CONTACTS:
          return {
            ...state,
            contacts: action.payload.contacts
          }
        default:return state

}
}

export default contactReducer