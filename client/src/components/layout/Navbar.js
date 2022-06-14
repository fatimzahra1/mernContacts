import React, {Fragment, useContext} from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {solid} from '@fortawesome/fontawesome-svg-core/import.macro'



 const Navbar = ({title, icon}) => {
   const authContext = useContext(AuthContext)
   const contactContext = useContext(ContactContext)


   const {isAuthenticated, logout, user} = authContext
   const {clearContacts} = contactContext

   const onLogout =() => {
     logout()
     clearContacts()
   }

   const authLinks = (
     <Fragment>
       <li> hello { user&& user.name}</li>
       <li>
         <a onClick={onLogout} href='#!'>
         <FontAwesomeIcon icon={solid("arrow-right-from-bracket")} />
         <span className='hide-sm'>Logout</span>
        
         </a>
       </li>
     </Fragment>

     
   )

   const guestLinks = (
    <Fragment>
      <li>
          <Link to="/register">Register</Link> 
          </li>

          <li>
          <Link to="/login">Login</Link> 
          </li>
    </Fragment>

    
  )

  return (
   
    <div className="navbar bg-primary">
        <h1>
        <FontAwesomeIcon icon={icon} />   {title}
        </h1>
        <ul>
       {isAuthenticated ? authLinks: guestLinks}
            
        </ul>
    </div>
  

   
  )
}

export default Navbar