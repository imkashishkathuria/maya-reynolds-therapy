import Image from 'next/image'
import React from 'react'

const SpecialityCard = ({ heading, subheading, image }) => {
    return (
        <div className='p-8 w-1/3 flex flex-col gap-4 justify-between bg-[#e5e0da] border'>
            <div className='flex flex-col gap-7'>
                <p className='whitespace-pre-wrap font-[500] font-semibold text-[19px] capitalize'>{heading}</p>
                <p className='whitespace-pre-wrap font-[450] text-[15px]'>{subheading}</p>
            </div>
            <div className='flex justify-center'>
                <Image src={image}
                    alt="Hero Section"
                    width={300}
                    height={10}
                    priority
                    className='w-70 h-70 object-cover rounded-full object-center' />
            </div>

        </div>
    )
}

export default SpecialityCard
