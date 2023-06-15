import React, { useState } from 'react'
import { Link  } from 'react-router-dom'

const Button = ({text, click, classStatus, type, location}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <Link to={location}>
      <button className={colorMode ? 'btn filled' : 'btn'} onClick={click}  >
          {colorMode ? 'Logged In': 'Log In'}
      </button>
    </Link>
    // <Link />
  )
}

export default Button