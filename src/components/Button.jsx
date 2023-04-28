import React, { useState } from 'react'


const Button = ({text, click, classStatus, type, location}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <a href={location}>
      <button className={colorMode ? 'btn filled' : 'btn'} onClick={click}  >
          {colorMode ? 'Logged In': 'Log In'}
      </button>
    </a>
    // <Link />
  )
}

export default Button