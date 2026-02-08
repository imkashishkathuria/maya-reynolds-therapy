import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
const PageButtons = ({ text }) => {
    return (
        <div>
            <button className='px-10 py-5 whitespace-pre-wrap font-[600] text-[16px] flex justify-between items-center uppercase rounded-4xl bg-[#6D9C7B] border-1 border-[#223614] gap-2 hover:text-white hover:bg-[#569c6b] cursor-pointer transition-all duration-300 ease-out '>
                <p className="transition-opacity duration-700 group-hover:opacity-90">{text}</p>
                <FaArrowRight />
            </button>

        </div>
    )
}

export default PageButtons
