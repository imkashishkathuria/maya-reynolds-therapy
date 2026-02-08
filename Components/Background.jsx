"use client"
import React, { useState } from 'react'
import SubHeading from './SubHeading'
import { FaMinus, FaPlus } from 'react-icons/fa'

const Background = () => {

    const faqs = [
        { faqQ: "Education", ans: "Doctorate in Clinical Psychology (PsyD)" },
        { faqQ: "Licensure", ans: "Licensed Clinical Psychologist – California" },
        { faqQ: "Certifications", ans: <ul className='list-disc'><li>EMDR Therapy</li><li>Trauma-informed care</li><li>Mindfulness-based interventions</li><li>Anxiety and panic treatment</li></ul> },
    ]

    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }


    return (
        <div>
            <div className='flex justify-center py-8 lg:py-25 items-center text-[#212121]'>

                <div className='flex flex-col items-center gap-15 pr-10 pl-6 lg:pl-0'>
                    <SubHeading text="My Professional Background" />

                    <div className='flex flex-col'>
                        {faqs.map((item, index) => (
                            <div key={index} className="border-y py-4">


                                <div
                                    className='flex justify-between lg:w-[700px] items-center cursor-pointer transition-all duration-300 ease-out  '
                                    onClick={() => handleClick(index)}
                                >

                                    <p className='text-[25px] lg:text-[33px] font-[500] leading-13'>
                                        {item.faqQ}
                                    </p>
                                    {activeIndex === index ? (
                                        <FaMinus className='text-[25px] lg:text-[33px] leading-13' />
                                    ) : (
                                        <FaPlus className='text-[25px] lg:text-[33px]  leading-13' />
                                    )}
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <p className='flex justify-center lg:ml-[70px] text-[16px] lg:w-[500px]'>
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

export default Background
