import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="px-10">
      <div className="header flex justify-between">
        <div className="name pt-5 text-lg font-bold">
          Snippetly
        </div>
        <div className='theme pt-5'>
          <button>Light</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
