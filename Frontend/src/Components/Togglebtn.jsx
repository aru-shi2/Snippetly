import React from 'react'
import { useState } from 'react'

const Togglebtn = ({toggled,isOn}) => {
    
  return (
    <div>
      <div onClick={isOn} className={toggled?'w-15 h-7 border rounded-2xl flex items-center bg-blue-500':'w-15 h-7 border rounded-2xl flex items-center bg-white'}>
        <div className={toggled?'w-5 h-5 border right-0 mr-1 translate-x-8.5 transition delay-100 duration-200 ease-in-out rounded-2xl bg-white':'w-5 h-5 border left-1 ml-1 rounded-2xl translare-x-0 transition delay-100 duration-200 '}></div>
      </div>
    </div>
  )
}

export default Togglebtn
