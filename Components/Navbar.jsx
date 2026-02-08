"use client"

import React, { useState } from 'react'
import { FaCross, FaTimes } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const [active, setActive] = useState(false);

    const scrollToSection = (id, offset) => {
    const el = document.getElementById(id)
    if (!el) return

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset

    window.scrollTo({
      top: y,
      behavior: "smooth",
    })

    setActive(false) 
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <div className=' hidden lg:flex justify-between px-5 lg:px-15 py-4 mb-3 items-center bg-[#03252d]' >
        <h1 className='hidden lg:block text-[27px] '>Dr. Maya Reynolds, PsyD</h1>
        <div className='hidden lg:flex gap-10 items-center text-[20px] cursor-pointer'>
          <p onClick={()=>scrollToSection("about", 70)}>About</p>
          <p  onClick={()=>scrollToSection("speciality", -50)}>Specialities</p>
          <p onClick={()=> scrollToSection("faq", 100)}>FAQs</p>
          <p>Blog</p>
          <p onClick={()=> scrollToSection("contact", 150)}>Contact</p>
        </div>
      </div>

      <div className="lg:hidden relative bg-[#03252d]">

        <div className="flex justify-between items-center p-5">
          <button onClick={() => setActive(prev => !prev)}>
            {active ? <FaTimes size={22} /> : <FiMenu size={22} />}
          </button>

          <h1 className="text-[18px] font-medium">Dr. Maya Reynolds, PsyD</h1>
        </div>

        <div
          className={`absolute left-0 w-full bg-[#FBF7F2] z-40 transition-all duration-500 ease-in-out
      ${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
          style={{ height: "calc(100vh - 72px)" }}
          >
          <div className="h-full flex flex-col justify-center items-center gap-6 text-[22px] text-[#212121]">
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar
