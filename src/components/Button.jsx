import React, { useState } from 'react'


const Button = ({text, classStatus, type}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <button className={colorMode ? 'btn filled' : 'btn'} onDoubleClick={swapColor}>
          {colorMode ? 'Logged In': 'Log In'}
      </button>
    // <Link />
  )
}

export default Button