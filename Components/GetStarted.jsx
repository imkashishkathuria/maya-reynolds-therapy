import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const GetStarted = () => {
    return (
        <div className='bg-[#7e7b46] py-20 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-8 pl-10  w-1/2'>
                <p className='text-[50px] font-[550] leading-13 text-white'> Get started today. </p>

                <p className='whitespace-pre-wrap font-[500] text-[19px] text-center text-white'>Ready to take the first step towards a happier, healthier you? <br />Contact me to book your first session. I look forward to starting this therapeutic journey with you.</p>
                <div className='flex justify-center mt-10'>
                    {/* <PageButtons text="Get in touch" /> */}
                    <button className='px-10 py-2 whitespace-pre-wrap font-[600] text-white text-[16px] flex justify-between items-center uppercase border-1 border-white gap-2 hover:text-[#7e7b46] hover:bg-white cursor-pointer transition-all duration-300 ease-out '>
                        <p className="transition-opacity duration-700 group-hover:opacity-90">Get in touch</p>
                        <FaArrowRight />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default GetStarted
