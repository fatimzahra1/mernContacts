import React, { useReducer } from "react";
import {v4 as uuid} from 'uuid'
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'



const ContactState = (props) =>{
    
    const initialState = {
        contacts: [
            {
                id:9889675,
                name:"fati",
                email:"fatimzahra@gmail.com",
                phone:"09665433567",
                type:"personal"
            },
            {
                id:98845675,
                name:"rana",
                email:"rana@gmail.com",
                phone:"09665433567",
                type:"personal"
            },
            {
                id:93569675,
                name:"sali",
                email:"sali@gmail.com",
                phone:"09665433567",
                type:"professional"
            }
        ],
        current :null,
        filtered: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState)

    // ADD CONTACT

    const addContact = contact =>{
    
        contact.id = uuid()
       
        dispatch({type : ADD_CONTACT, payload: contact})
    }

   // DELETE CONTACT

   const deleteContact = (id) =>{
       dispatch({type: DELETE_CONTACT, payload: id})
   }
   // SET CURRENT CONTACT
    const setCurrent = (contact) =>{
        dispatch({type: SET_CURRENT, payload : contact})
    }
   // CLEAR CURRENT CONTACT
    const clearCurrent = () =>{
        dispatch({type: CLEAR_CURENT})
    }
   // UPDATE CONTACT
    const updateContact= (contact) => {
        dispatch({type: UPDATE_CONTACT, payload : contact})
    }
   //FILTER CONTACTS
    
   const filterContacts= text => {
    dispatch({type: FILTER_CONTACTS, payload : text})
}
   //CLEAR FILTER

   const clearFilter = () =>{
    dispatch({type: CLEAR_FILTER})
}

   return (
       <ContactContext.Provider
       value={{
           contacts: state.contacts,
           current: state.current,
           filtered : state.filtered,
           addContact,
           deleteContact,
           updateContact,
           setCurrent,
           clearCurrent,
           filterContacts,
           clearFilter
           }}
       >
      { props.children}
       </ContactContext.Provider>
   )
}

export default ContactState





