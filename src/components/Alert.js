import React, { useEffect } from 'react'

export const Alert = ({ notes, msg, type, removeAlert }) => {
  
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      removeAlert()
    },3000);

    return () => clearTimeout(timeout);
    
  }, [notes]);
  
  return (
    <div className={`alert-box ${type}`}>{msg}</div>
  )
}
