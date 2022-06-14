import React, {useContext, useEffect} from 'react'
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'


function Home() {
  
  const authContext = useContext(AuthContext)

  useEffect( () =>function fetchContact()  {
    if (localStorage.getItem('token')) {
      console.log(authContext)
      console.log(`in Home ${localStorage.getItem('token')}`)
      authContext.loadUser()
    

    }
  
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