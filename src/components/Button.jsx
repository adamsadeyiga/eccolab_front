import React, { useState } from 'react'


const Button = ({text, classStatus, type}) => {
  const [colorMode, setColorMode] = useState(false)

  function swapColor() {
    setColorMode(!colorMode)
  }

  return (
    <button className={'btn'} onDoubleClick={swapColor}>
          {text}
      </button>
    // <Link />
  )
}

export default Button