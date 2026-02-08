"use client"

import React from 'react'


import SubHeading from './SubHeading'
import SpecialityCard from './SpecialityCard'


const Specialities = () => {
  return (
    <div id='speciality' className='flex flex-col gap-12 py-10 lg:py-40 px-5 lg:px-10 items-center mt-4 bg-[#03252d]'>
       
    <SubHeading text='Areas of Specialization' />
    <p><p className='lg:w-[700px] text-center font-[200]'>I provide therapy for adults navigating emotional, psychological, and relational challenges. My work is grounded in evidence-based approaches and tailored to your unique experiences.</p></p>
    <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
        <SpecialityCard heading="Self-Esteem & Perfectionism" subheading="Support for individuals struggling with self-criticism, imposter syndrome, people-pleasing, and high internal pressure. Therapy helps build self-trust, confidence, and a more compassionate inner dialogue." image="/assets/self-esteem.webp" />
        <SpecialityCard heading="Relationships & Attachment" subheading="Explore relationship patterns, communication challenges, boundaries, and attachment dynamics. Ideal for clients navigating dating, long-term partnerships, or the emotional impact of past relationships." image="/assets/relationships.webp" />
        <SpecialityCard heading="Anxiety, Trauma & Burnout" subheading="Treatment for chronic anxiety, panic, trauma (single-incident or complex), and professional burnout. Sessions focus on emotional regulation, nervous system support, and sustainable coping strategies." image="/assets/burnout.webp" />
        </div>  
    </div>
  )
}

export default Specialities
