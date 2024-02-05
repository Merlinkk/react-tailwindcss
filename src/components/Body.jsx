import React from 'react'

function Body() {
  return (
    <div className='my-10 w-full flex flex-col items-center' >
        <div className='w-11/12'>
           <button className='bg-blue-500 p-2 font-bold text-lg rounded px-4 text-white'>Button One</button>
           
           <div className='bg-red-200 rounded border-2 text-red-700 border-red-400 my-3 p-3'>
                <span className='font-bold'>Alert!</span> This is awesome!
           </div>

            <div className='flex justify-center items-center w-full my-28'>
                <div className='flex flex-row border p-4 border-gray-100 rounded shadow-lg '>
                    <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
                    <div className='flex flex-col m-4 items-start text-left'>
                        <span className='text-xl'>Kalvium Store</span>
                        <span className='text-gray-600'>You have a new course!</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
// 

export default Body