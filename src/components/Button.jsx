import React from 'react'
import Title from './Title'

function Button({roundeds="",width="",hg="",hoverbg="",hoverboder="",hovertxt="",text="",size="",color="",bgcolor="",font="",padinng=""}) {
  return (
    <button className={`border-solid text-${size} text-${color} font-${font} bg-${bgcolor} border-slate-600 border-2 rounded-${roundeds} w-${width} h-${hg} hover:bg-teal-700 hover:text-white hover:border-${hoverboder} p-${padinng} p-0.5`}>{text}</button>
  )
}

export default Button
