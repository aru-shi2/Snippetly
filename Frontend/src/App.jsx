import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className='px-10'>
      <div className="header flex justify-between">
        <div className="name pt-5 text0lg font-bold">
          Snippetly
        </div>
        <div className='theme pt-5'>
          <button>Light</button>
        </div>
      </div>
      <div className="content flex gap-30 absolute top-[30%]">
        <div className="l space-y-15">
          <div className="text space-y-8">
            <h1 className='font-bold text-4xl'>Turn Your Code Into Beautiful Snippets</h1>
          <p className='text-xl'>Create stunning, shareable images of your code in seconds. Perfect for social media, blogs, and documentation.</p>
          </div>
          <button className='bg-yellow-200 px-5 h-15 rounded-2xl text-lg'>Get started</button>
        </div>

        <div className="r w-[70%]">
          <img className='w-[90%] rounded-2xl' src="/public/Pic/Snap.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
