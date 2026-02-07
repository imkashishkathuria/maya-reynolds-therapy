import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'

const Intro = () => {
    return (
        <div>
            <div className='flex flex-col-reverse lg:flex-row justify-between py-15 lg:py-35 items-center gap-10 lg:gap-30 bg-[#e5e0da]'>


                <div className='flex flex-col gap-5 lg:gap-8 pl-5 pr-5 lg:pr-0 lg:pl-10  lg:mb-30 lg:w-1/2'>
                    <SubHeading text="Hi, I’m Lilac." />
                    <p className='whitespace-pre-wrap font-[500] text-[19px]'>I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
                    <div className='flex justify-center mt-15'>
                        <PageButtons text="Let's Chat" />
                    </div>
                    
                </div>

                <div className="relative lg:w-1/2 lg:h-[560px] px-15 lg:px-0">

                    <div className="relative overflow-hidden rounded-t-[180px]">
                        <Image
                            src="/assets/intro2.webp"
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

                </div>
            </div>
        </div>
    )
}

export default Intro
