import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'
import { FaArrowRight } from 'react-icons/fa'

const GetInTouch = () => {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center bg-[#e5e0da]'>


                    <div className='flex flex-col gap-4 items-center px-12 mb-30'>
                        <SubHeading text="Live a fulfilling life." />
                        <p className='whitespace-pre-wrap font-[500] text-[19px] w-[500px]'>Life can be challenging—especially when you're trying to balance your personal and professional life. <br /> <br />It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.</p>

                        <div className='flex justify-end mt-auto'>
                            <div>   
                                <button className='px-10 py-2 whitespace-pre-wrap font-[600] text-[16px] flex justify-between items-center uppercase border-1 border-[#223614] gap-2 hover:text-white hover:bg-[#223614] cursor-pointer transition-all duration-300 ease-out '>
                                    <p className="transition-opacity duration-700 group-hover:opacity-90">Get In Touch</p>
                                    <FaArrowRight />
                                </button>

                            </div>
                        </div>
                    </div>
                    <Image
                        src="/assets/getintouch.webp"
                        alt="Hero Section"
                        width={1000}
                        height={10}
                        priority
                        className='object-cover h-[600px] w-1/2'
                    />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
