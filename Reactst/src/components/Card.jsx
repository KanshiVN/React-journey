import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-red-400'>
        <div className='px-3 py-4 bg-zinc-200 absolute left-1/2 top-1/2 rounded-md translate-x-[-50%] translate-y-[-50%]'>
            <div className='w-52 h-32 bg-zinc-300'></div>
        </div>
    </div>
    
  )
}

export default Card