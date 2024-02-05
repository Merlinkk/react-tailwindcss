import React from 'react'
import { Button } from '@mui/material'

function Navbar() {
  return (
    <nav className='flex bg-red-400 border-t-4 border-blue-900 h-20 w-full'>

        <div className='flex w-4/5 flex-row items-center justify-start'>
        <div className='p-3 text-white text-2xl'>Kalvium</div>
        <div className='p-3 text-green-200'>About Us</div>
        <div className='p-3 text-green-200'>Contact</div>
        <div className='p-3 text-green-200'>Courses</div>
        </div>
        <div className='flex w-1/5 p-3 flex-row items-center justify-end' >
            {/* <Button style={{border:'1px solid white', color:'white'}} variant='outlined' color='primary'>Login</Button> */}
            <button className='p-1 border-white text-lg rounded px-4 text-white border'>Login</button>
        </div>
  </nav>
  )
}

export default Navbar