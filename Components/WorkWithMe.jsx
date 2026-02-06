import React from 'react'
import SubHeading from './SubHeading'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const WorkWithMe = () => {
  return (
      <div>
            <div className=' h-100vh'>
                <div className='flex justify-between bg-[#c2bfcb]'>

                    <Image
                
                        src="/assets/workwithme.webp"
                        alt="Hero Section"
                        width={1000}
                        height={10}
                        priority
                        className='object-cover w-1/2'
                    />

                    <div className='flex flex-col justify-end w-1/2'>

                    <div className='flex flex-col gap-7 px-12 pt-40 pb-20'>
                        <SubHeading text="You don’t have to do this all alone." />
                        <p className='whitespace-pre-wrap font-[500] text-[19px] '>If you are facing any of these, there’s hope:<br/> <br/><ul className='list-disc flex flex-col gap-4 px-10'>
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

                    <div className='flex w-full '>
                            
                                <button className='w-full py-7 whitespace-pre-wrap font-[600] text-[16px] flex justify-center items-center uppercase border-t border-[#223614] gap-2 hover:text-white hover:bg-[#223614] cursor-pointer transition-all duration-300 ease-out '>
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
