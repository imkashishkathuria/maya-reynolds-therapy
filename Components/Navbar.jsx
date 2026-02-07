"use client"

import React, { useState } from 'react'
import { FaCross, FaTimes } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div className='hidden lg:flex justify-between px-5 lg:px-15 py-4 items-center'>
        <h1 className='hidden lg:block text-[35px] '>Lilac Template</h1>
        <div className='hidden lg:flex gap-10 items-center text-[20px]'>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="lg:hidden relative bg-[#FBF7F2]">

        <div className="flex justify-between items-center p-5">
          <button onClick={() => setActive(prev => !prev)}>
            {active ? <FaTimes size={22} /> : <FiMenu size={22} />}
          </button>

          <h1 className="text-[18px] font-medium">Lilac Template</h1>
        </div>

        <div
          className={`absolute left-0 w-full bg-[#FBF7F2] z-40 transition-all duration-500 ease-in-out
      ${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
          style={{ height: "calc(100vh - 72px)" }}>
          <div className="h-full flex flex-col justify-center items-center gap-6 text-[22px]">
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
