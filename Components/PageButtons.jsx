import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const PageButtons = ({ text }) => {
    return (
        <div>
            <button className='px-10 py-2 whitespace-pre-wrap font-[600] text-[16px] flex justify-between items-center uppercase border-1 border-[#223614] gap-2 hover:text-white hover:bg-[#223614] cursor-pointer transition-all duration-300 ease-out '>
                <p className="transition-opacity duration-700 group-hover:opacity-90">{text}</p>
                <FaArrowRight />
            </button>

        </div>
    )
}

export default PageButtons
