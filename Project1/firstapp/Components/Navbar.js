"use client"
import React from 'react'

function Navbar() {
  return (
    <div className='h-15 bg-black-500 flex justify-between items-center'>
        <h2>Logo</h2>


        <div className='flex gap-5'>
            <h4>About</h4>
            <h4>Blog</h4>
            <h4>Help</h4>
            <h4>Account</h4>


        </div>
    
      
    </div>
  )
}

export default Navbar;