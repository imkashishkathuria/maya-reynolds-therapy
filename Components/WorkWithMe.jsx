"use client"

import React from 'react'
import SubHeading from './SubHeading'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from "framer-motion"

const WorkWithMe = () => {
    return (
        <div>
            <div className=' h-100vh'>
                <div className='flex flex-col lg:flex-col justify-between bg-[#c2bfcb] text-[#212121]'>
                    <motion.div initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <Image

                            src="/assets/c4d29776d4434e3c99006b1c9ba26f38.avif"
                            alt="Hero Section"
                            width={700}
                            height={800}
                            priority
                            className='object-contain h-full w-full'
                        />
                    </motion.div>
                    <div className='flex flex-col text-center '>
                        <motion.div initial={{ opacity: 0, y: -70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <div className='flex flex-col text-center justify-center gap-7 px-7 lg:px-12 pt-10 lg:pt-20 pb-20 '>
                                <SubHeading text="You don’t have to do this all alone." />
                                <p className='whitespace-pre-wrap text-center font-[500] text-[19px]'>If you’re experiencing any of the following, therapy can help:<br /> <br /><ul className='flex flex-col justify-center gap-4 px-5 lg:px-10'>
                                    <li>Persistent sadness, anxiety, or hopelessness</li>
                                    <li>Difficulty focusing or making decisions</li>
                                    <li>Strained or unsatisfying relationships</li>
                                    <li>Chronic exhaustion or loss of motivation</li>
                                    <li>Feeling overwhelmed, stuck, or emotionally on edge</li>

                                </ul>
                                    <br /> <br />
                                    With empathy, structure, and collaboration, we’ll work together to navigate challenges and help you feel more grounded in daily life.
                                </p>



                            </div>
                        </motion.div>

                        <div className='flex w-full '>

                            <button className='w-full py-5 lg:py-7 whitespace-pre-wrap font-[600] text-[16px] flex justify-center items-center uppercase border-t border-[#223614] gap-2 hover:text-white hover:bg-[#03252d] cursor-pointer transition-all duration-300 ease-out '>
                                <p className="transition-opacity duration-700 group-hover:opacity-90 ">Work With Me</p>
                                <FaArrowRight />
                            </button>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkWithMe
