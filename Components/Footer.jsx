import React from 'react'

const Footer = () => {

    const links = ["Privacy & Cookies Policy", "Good Faith Estimate", "Website Terms & Conditions", "Disclaimer"]
    return (
        <div className='flex items-center justify-center p-10 flex-col gap-8 bg-[#e5e0da]'>
            <div className='flex flex-col gap-3 justify-center items-center'>
                <div className='flex flex-col lg:flex-row text-center lg:text-left gap-1 lg:gap-3' >
                    {links.map((item, index) => (

                        <p className='underline text-black font-[400] cursor-pointer' key={index}>
                            {item}
                        </p>


                    ))}
                </div>
                <p className='text-[#212121]'>Website Template Credits:<span className='underline text-black font-[400] text-center lg:text-left'> Go Bloom Creative</span></p>
            </div>

            <p className='text-[#212121]'>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
        </div>
    )
}

export default Footer
