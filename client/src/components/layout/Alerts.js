import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

function Alerts() {
    const alertContext = useContext(AlertContext)
    

  return (
  alertContext.alerts.length>0 && alertContext.alerts.map(alert =>(
  <div key={alert.id} className={`alert alert-${alert.type}`}>
   <FontAwesomeIcon icon={solid("circle-info")}  /> {alert.msg}
  </div>))
    )
}

export default Alerts