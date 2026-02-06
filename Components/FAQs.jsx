"use client"
import React, { useState } from 'react'
import SubHeading from './SubHeading'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'

const FAQs = () => {

    const faqs = [
        { faqQ: "Do you take insurance?", ans: "Answer goes here." },
        { faqQ: "What are your rates?", ans: "Answer goes here." },
        { faqQ: "Do you have any openings?", ans: "Answer goes here." },
    ]

    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div>
            <div className='flex justify-between px-15 py-25 items-center'>

                <div className="relative pl-10 h-[560px]">
                    <div className="relative overflow-hidden rounded-t-[180px]">
                        <Image
                            src="/assets/faq.webp"
                            alt="Main"
                            width={400}
                            height={500}
                            priority
                            className='rounded-tl-full rounded-tr-full h-[580px]'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-15 pr-10 mb-30'>
                    <SubHeading text="FAQs" />

                    <div className='flex flex-col'>
                        {faqs.map((item, index) => (
                            <div key={index} className="border-y py-4">

                             
                                <div
                                    className='flex gap-4 items-center cursor-pointer transition-all duration-300 ease-out  '
                                    onClick={() => handleClick(index)}
                                >
                                    {activeIndex === index ? (
                                        <FaMinus className='text-[43px] font-[300] leading-13' />
                                    ) : (
                                        <FaPlus className='text-[43px] font-[300] leading-13' />
                                    )}
                                    <p className='text-[43px] font-[500] leading-13'>
                                        {item.faqQ}
                                    </p>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <p className='ml-[70px] text-[16px]'>
                                        {item.ans}
                                    </p>
                                </div>


                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQs
