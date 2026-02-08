"use client"

import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'
import { motion } from "framer-motion"

const Intro = () => {
    return (
        <div>
            <div id='about' className='flex flex-col-reverse lg:flex-row justify-between py-15 lg:py-25 items-center gap-10 lg:gap-30 bg-[#03252d] mt-5'>

            
                <div className='flex flex-col gap-5 lg:gap-8 pl-5 pr-5 lg:pr-0 lg:pl-10  lg:mb-10 lg:w-1/2'>
               
                    <SubHeading text="Hi, I’m Dr. Maya Reynolds" />
                    <p className='whitespace-pre-wrap font-[200]  text-[13px] lg:text-[19px]  pt-8'>I’m a licensed clinical psychologist (PsyD) based in Santa Monica, California, offering therapy for adults dealing with anxiety, stress, trauma, and burnout. <br /> <br />Therapy becomes a place to slow down, gain clarity, and develop healthier ways of relating to both work and relationships. <br /> <br />I take a warm, collaborative, and grounded approach, integrating:
                    <ul className='list-disc px-14 py-4'>
                        <li>Cognitive-Behavioral Therapy (CBT)</li>
                        <li>EMDR</li>
                        <li>Mindfulness-based practices</li>
                        <li>Body-oriented and nervous-system-informed techniques</li>
                        
                    </ul>
                    </p>
                    <div className='flex justify-center mt-15'>
                        <PageButtons text="Let's Chat" />
                    </div>
                    
                </div>

                <div className="relative lg:w-1/2 lg:h-[560px] px-15 lg:px-0">
                <motion.div initial={{ opacity: 0, x: -70 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                                        viewport={{ once: true }}>
                    <div className="relative overflow-hidden rounded-t-[180px]">
                        <Image
                            src="/assets/Dr. Maya Reynolds.png"
                            alt="Main"
                            width={400}
                            height={500}
                            priority
                            className='rounded-tl-full rounded-tr-full lg:h-[580px]'
                        />
                    </div>

                    <div className=" absolute bottom-[20px] lg:bottom-[-80px] right-[10px]  lg:right-[10px] w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden">
                        <Image
                            src="/assets/intro.webp"
                            alt="Overlay"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Intro
