import React from 'react'

const Input = ({type, title}) => {
  return (
    <div className="input-container">
        <p className='input-title'>{title}</p>                
        <input type={type} />
    </div>
  )
}

export default Input