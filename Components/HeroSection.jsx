import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
// import HeroSectionImage from '../assets/HeroSectionImage.webp'
import PageButtons from './PageButtons'

const HeroSection = () => {
    return (
        <div>
            <div className='flex justify-between px-15 py-10 items-center gap-10'>
                <Image
                    src="/assets/HeroSectionImage.webp"
                    alt="Hero Section"
                    width={500}
                    height={400}
                    priority
                    className='rounded-tl-full rounded-tr-full'
                />

                <div className='flex flex-col gap-4 items-center px-23 mb-30'>
                   <PageHeadings text="Live your life in full bloom" />
                    <p className='whitespace-pre-wrap font-[500] text-[19px]'>Therapy for Adults in Minneapolis, MN.</p>
                <PageButtons text="connect with me" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
