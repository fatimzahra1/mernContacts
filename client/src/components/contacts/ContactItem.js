
import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import ContactContext from '../../context/contact/contactContext'


function ContactItem({contact}) {
  const { id,name, email, phone, type } = contact
  
  const contactContext = useContext(ContactContext)
  const {deleteContact, setCurrent, clearCurrent} = contactContext

  const DeleteContact = () =>{  
    deleteContact(id)
    clearCurrent()

  }


  return (
    <div  className='card bg-light'>

    <h3 className='text-primary text-left'>
     {name}{' '}
      <span style={{float:'right'}} className={'badge ' + (type==='professional'? 'badge-success':'badge-primary')}>{type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </h3>

    <ul className='list'>
      {email&& (
          <li>
          <FontAwesomeIcon icon={solid("envelope-open-text")} /> {email}
       
          </li>
      )}

      {phone&& (
          <li>
          <FontAwesomeIcon icon={solid("phone-volume")} /> {phone}
       
          </li>
      )}
    </ul>
    <p>
        <button className='btn btn-dark btn-sm' onClick={() =>setCurrent(contact)}>
      Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={DeleteContact} >
      Delete
        </button>
    </p>



    </div>
  )
}

export default ContactItem