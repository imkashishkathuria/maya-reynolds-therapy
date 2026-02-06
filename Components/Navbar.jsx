import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between px-15 py-4 items-center'>
        <h1 className='text-[35px] '>Lilac Template</h1>

        <div className='flex gap-10 items-center text-[20px]'>
            <p>Blog</p>
            <p>Contact</p>
        </div>
      </div>

    </div>
  )
}

export default Navbar
