import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



 const Navbar = ({title, icon}) => {
  return (
   
    <div className="navbar bg-primary">
        <h1>
       
        <FontAwesomeIcon icon={icon} />   {title}
      


        </h1>
    </div>
  

   
  )
}

export default Navbar