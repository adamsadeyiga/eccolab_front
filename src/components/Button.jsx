import React, { useState } from 'react'


const Button = ({text, classStatus}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <button className={colorMode ? 'btn filled' : 'btn'} onDoubleClick={swapColor}>
        <a href="/login">
          {colorMode ? 'Logged In': 'Log In'}
        </a>
      </button>
    // <Link />
  )
}

export default Button