import React from 'react'
import { Alert } from './Alert'
import Toggle from './Toggle'

const Header = ({ alert, removeAlert, notes }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      {alert.show && <Alert {...alert} removeAlert={removeAlert} notes={notes}/>}
      <Toggle />
    </div>
  )
}

export default Header