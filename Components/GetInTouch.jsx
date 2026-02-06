import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'
import { FaArrowRight } from 'react-icons/fa'

const GetInTouch = () => {
    return (
        <div>
            <div className='mb-10'>
                <div className='flex justify-between bg-[#e5e0da]'>

                    <div className='flex flex-col justify-end w-1/2'>

                    <div className='flex flex-col gap-7 px-12 mb-40'>
                        <SubHeading text="Live a fulfilling life." />
                        <p className='whitespace-pre-wrap font-[500] text-[19px] w-[500px]'>Life can be challenging—especially when you're trying to balance your personal and professional life. <br /> <br />It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>

                        
                    </div>

                    <div className='flex w-full '>
                            
                                <button className='w-full py-7 whitespace-pre-wrap font-[600] text-[16px] flex justify-center items-center uppercase border-t border-[#223614] gap-2 hover:text-white hover:bg-[#223614] cursor-pointer transition-all duration-300 ease-out '>
                                    <p className="transition-opacity duration-700 group-hover:opacity-90 ">Get In Touch</p>
                                    <FaArrowRight />
                                </button>

                           
                        </div>
                    </div>
                    <Image
                        src="/assets/getintouch.webp"
                        alt="Hero Section"
                        width={1000}
                        height={10}
                        priority
                        className='object-cover h-[95vh] w-1/2'
                    />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
