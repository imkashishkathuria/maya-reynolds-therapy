"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const SpecialityCard = ({ heading, subheading, image }) => {

    const [hoverText, setHoverText] = useState(false);


    return (
        <div className='p-8 lg:w-1/3 flex flex-col gap-4 justify-between'>

            <div className='flex flex-col gap-7'>


                <p className='whitespace-pre-wrap font-[500] font-semibold text-center text-[23px] capitalize'>{heading}</p>

                {/* {hoverText && (
                     <p className='whitespace-pre-wrap font-[450] text-[15px]'>{subheading}</p>
                )} */}

                <p
                    className={`
    whitespace-pre-wrap
    font-[450]
    text-[15px]
    transition-all
    duration-500
    ease-in-out
    ${hoverText ? "opacity-100 max-h-40 translate-y-0" : "opacity-0 max-h-0 -translate-y-2 overflow-hidden"}
  `}
                >
                    {subheading}
                </p>


            </div>
            <div className='flex justify-center' onMouseEnter={() => setHoverText(true)} onMouseLeave={() => setHoverText(false)}>
                <Image src={image}
                    alt="Hero Section"
                    width={300}
                    height={10}
                    priority
                    className='
  w-40 lg:w-100 h-40 lg:h-120
  object-cover rounded-full object-center
  border-14 border-[#003742e5]
  transition-transform duration-700 ease-in-out
  hover:scale-110 my-5
'
                />
            </div>

        </div>
    )
}

export default SpecialityCard
