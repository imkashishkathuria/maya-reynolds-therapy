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
                <div className='flex flex-col lg:flex-row justify-between bg-[#c2bfcb] text-[#212121]'>
                <motion.div initial={{ opacity: 0, x: -70 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        viewport={{ once: true }}>
                    <Image
                
                        src="/assets/workwithme.webp"
                        alt="Hero Section"
                        width={700}
                        height={800}
                        priority
                        className='object-cover h-full'
                    />
                </motion.div>
                    <div className='flex flex-col justify-end lg:w-1/2'>
                     <motion.div initial={{ opacity: 0, y: -70 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            viewport={{ once: true }}>
                    <div className='flex flex-col gap-7 px-7 lg:px-12 pt-10 lg:pt-40 pb-20'>
                        <SubHeading text="You don’t have to do this all alone." />
                        <p className='whitespace-pre-wrap font-[500] text-[19px] '>If you are facing any of these, there’s hope:<br/> <br/><ul className='list-disc flex flex-col gap-4 px-5 lg:px-10'>
                        <li>Persistent feelings of sadness or hopelessness</li>
                        <li>Trouble focusing or making decisions</li>
                        <li>Difficulty maintaining relationships</li>
                        <li>Feeling constantly exhausted or unmotivated</li>
                        <li>A pervasive sense of being overwhelmed</li>
                        
                    </ul>
                        <br/> <br/>
                        With empathy and guidance, we'll work together to navigate the challenges life throws your way.
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
