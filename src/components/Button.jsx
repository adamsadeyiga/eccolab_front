import React from 'react'

const Button = ({text, classStatus}) => {
  return (
    <button class={classStatus ? 'btn filled': 'btn'}>{text}</button>
  )
}

export default Button