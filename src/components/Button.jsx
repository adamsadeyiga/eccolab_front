import React, { useState } from 'react'
import { Link } from 'react-dom'


const Button = ({text, classStatus}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <button className={colorMode ? 'btn filled' : 'btn'} onDoubleClick={swapColor}>{colorMode ? 'Logged In': 'Log In'}</button>
    // <Link />
  )
}

export default Button