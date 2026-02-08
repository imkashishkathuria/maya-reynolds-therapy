import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
// import HeroSectionImage from '../assets/HeroSectionImage.webp'
import PageButtons from './PageButtons'

const HeroSection = () => {
    return (
        <div>
            <div className='flex lg:flex-row flex-col justify-between lg:px-15 py-10 items-center lg:gap-15 bg-[#03252d]'>
                <Image
                    src="/assets/HeroSectionImage.webp"
                    alt="Hero Section"
                    width={500}
                    height={400}
                    priority
                    className='rounded-tl-full rounded-tr-full px-7 lg:px-0'
                />

                <div className='flex flex-col gap-4 items-center px-7 lg:px-20 mb-15 lg:mb-30 py-5 lg:py-0 '>
                   <PageHeadings text="Live your life in full bloom" />
                    <p className='whitespace-pre-wrap font-[500] text-[19px] text-center lg:text-left pb-10'>Therapy for Adults in Minneapolis, MN.</p>
                <PageButtons text="connect with me" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
