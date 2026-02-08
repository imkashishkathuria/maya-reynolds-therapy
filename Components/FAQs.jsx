"use client"
import React, { useState } from 'react'
import SubHeading from './SubHeading'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { motion } from "framer-motion"

const FAQs = () => {

    const faqs = [
        { faqQ: "Do you take insurance?", ans: "I am an out-of-network provider. I’m happy to provide documentation for reimbursement through your insurance plan when applicable." },
        { faqQ: "What are your rates?", ans: "Session fees vary depending on the type of service. Please contact me directly for current rates and availability." },
        { faqQ: "Do you have any openings?", ans: "Availability changes periodically. Reach out to inquire about current openings for in-person or telehealth sessions." },
    ]

    const [activeIndex, setActiveIndex] = useState(-1)

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div>
            <div id='faq' className='flex flex-col lg:flex-row justify-between lg:px-15 py-10 lg:py-25 items-center bg-[#03252d]'>

                <div className="relative lg:pl-10 lg:h-[560px]">
                    <div className="relative overflow-hidden rounded-t-[180px]">
                         <motion.div initial={{ opacity: 0, x: -70 }}
                                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                                                viewport={{ once: true }}>
                        <Image
                            src="/assets/pexels-tracehudson-2454682.jpg"
                            alt="Main"
                            width={400}
                            height={500}
                            priority
                            className='rounded-tl-full rounded-tr-full lg:h-[580px] px-10 lg:px-0'
                        />
                        </motion.div>
                    </div>
                </div>

                <div className='flex flex-col gap-6 lg:gap-15 lg:pr-10 lg:mb-30 px-5 lg:px-0 py-8 lg:py-8'>
                    <SubHeading text="FAQs" />

                    <div className='flex flex-col'>
                        {faqs.map((item, index) => (
                            <div key={index} className="border-y py-2 lg:py-4">

                             
                                <div
                                    className='flex gap-4 items-center cursor-pointer transition-all duration-300 ease-out  '
                                    onClick={() => handleClick(index)}
                                >
                                    {activeIndex === index ? (
                                        <FaMinus className='text-[28px] lg:text-[43px] font-[300] leading-13' />
                                    ) : (
                                        <FaPlus className='text-[28px] lg:text-[43px] font-[300] leading-13' />
                                    )}
                                    <p className='text-[28px] lg:text-[43px] font-[500] lg:leading-13'>
                                        {item.faqQ}
                                    </p>
                                </div>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                                >
                                    <p className='lg:ml-[70px] lg:w-[500px] text-[16px]'>
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
