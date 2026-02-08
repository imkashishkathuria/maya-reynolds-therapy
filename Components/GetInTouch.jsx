"use client"

import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from "framer-motion"

const GetInTouch = () => {
    return (
        <div>
            <div className=''>
                <div className='flex lg:flex-row flex-col justify-between bg-[#e5e0da]'>

                    <motion.div initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        <Image
                            src="/assets/getintouch.avif"
                            alt="Hero Section"
                            width={400}
                            height={10}
                            priority
                            className='lg:hidden object-cover h-[300px] w-full'
                        />
                    </motion.div>
                    <div className='flex flex-col justify-end lg:w-1/2'>
                        <motion.div
                            initial={{ opacity: 0, y: -70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className='flex flex-col gap-7 px-7 py-8 lg:py-0 lg:px-12 lg:mb-20 text-[#212121] pt-0! lg:pt-15!'>
                                <SubHeading text="Live a fulfilling, grounded life." />
                                <p className='whitespace-pre-wrap font-[500] text-[19px] lg:w-[500px]'>Life can feel overwhelming—especially when you’re balancing career demands, relationships, and the pressure to keep everything together. <br /> <br />Many clients come to therapy feeling functional on the outside while internally struggling with:

                                <ul className='list-disc pl-12 py-5'>
                                    <li>Constant worry or racing thoughts</li>
                                    <li>Physical tension or chronic stress</li>
                                    <li>Difficulty sleeping or relaxing</li>
                                    <li>Emotional exhaustion or burnout</li>
                                    <li>A persistent sense of bracing for something to go wrong</li>
                                </ul>
                        
                                    Therapy offers a space to slow down, understand what’s happening beneath the surface, and build tools that support long-term emotional wellbeing.</p>


                            </div>
                        </motion.div>
                        <div className='flex w-full '>

                            <button className='w-full py-5 lg:py-7 whitespace-pre-wrap font-[600] text-[16px] flex justify-center items-center uppercase border-t border-[#223614] gap-2 hover:bg-[#03252d] cursor-pointer transition-all duration-300 ease-out text-[#212121] hover:text-white'>
                                <p className="transition-opacity duration-700 group-hover:opacity-90 ">Get In Touch</p>
                                <FaArrowRight />
                            </button>


                        </div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: -60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}>

                        <Image
                            src="/assets/getintouch.avif"
                            alt="Hero Section"
                            width={700}
                            height={10}
                            priority
                            className='hidden lg:block object-cover h-full'
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
