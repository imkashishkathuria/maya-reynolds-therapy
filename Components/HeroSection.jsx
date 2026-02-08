"use client"

import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
// import HeroSectionImage from '../assets/HeroSectionImage.webp'
import PageButtons from './PageButtons'
import { motion } from "framer-motion"

const HeroSection = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-between lg:px-15 py-10 items-center lg:gap-15 bg-[#03252d] mt-16'>
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/assets/photo-1599254461321-f61a8c05e291.avif"
                        alt="Hero Section"
                        width={700}
                        height={1000}
                        priority
                        className='rounded-tl-full rounded-tr-full h-full px-7 lg:px-0'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                <div className='flex flex-col gap-4 items-center px-7 lg:px-20 mb-15 lg:mb-30 py-5 lg:py-0 '>
                    <PageHeadings text="Live your life in full bloom" />
                    <p className='whitespace-pre-wrap font-[500] text-[19px] text-center lg:text-left pb-10'>Therapy for Adults in Santa Monica, CA.</p>
                    <PageButtons text="schedule a consultation" />
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection
