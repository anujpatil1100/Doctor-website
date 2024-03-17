import React from 'react'

function Title({text="",font="",size="",padding="",color=""}) {
  return (
    <span className={`text-${size} font-${font} text-${color} ${padding}`}>{text}</span>
  )
}

export default Title