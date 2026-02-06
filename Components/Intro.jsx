import Image from 'next/image'
import React from 'react'
import PageHeadings from './PageHeadings'
import PageButtons from './PageButtons'
import SubHeading from './SubHeading'

const Intro = () => {
    return (
        <div>
            <div className='flex justify-between px-15 py-35 items-center gap-30 bg-[#e5e0da]'>


                <div className='flex flex-col gap-8 pl-10  mb-30 w-1/2'>
                    <SubHeading text="Hi, I’m Lilac." />
                    <p className='whitespace-pre-wrap font-[500] text-[19px]'>I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
                    <div className='flex justify-center mt-15'>
                        <PageButtons text="Let's Chat" />
                    </div>
                    
                </div>

                <div className="relative w-1/2 h-[560px]">

                    <div className="relative overflow-hidden rounded-t-[180px]">
                        <Image
                            src="/assets/intro2.webp"
                            alt="Main"
                            width={400}
                            height={500}
                            priority
                            className='rounded-tl-full rounded-tr-full h-[580px]'
                        />
                    </div>

                    <div className=" absolute bottom-[-80px] right-[10px] w-[300px] h-[300px] rounded-full overflow-hidden">
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
