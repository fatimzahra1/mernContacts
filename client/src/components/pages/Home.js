import React, {useContext, useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'


function Home() {
  
  const authContext = useContext(AuthContext)

  useEffect( () =>{ const fetchContact= async () => {
    if (localStorage.getItem('token')) {
     await  authContext.loadUser()
    

    }
  
  
  }
  fetchContact()
    //eslint-disable-next-line
},[])

  return (
 <div className='grid-2'>
   <div>
  
     {/* form */}
     <ContactForm />
   </div>
   <div>
     <ContactFilter />
     <Contacts />
   </div>
 </div>
  )
}

export default Home