//Button reusable component


import React from 'react'

const Button = ({item,value,onClick}) => {
  return (
    <button value={value} onClick={onClick}>{item}</button>
  )
}

export default Button