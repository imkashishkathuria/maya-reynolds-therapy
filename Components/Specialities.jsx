import React from 'react'

import SubHeading from './SubHeading'
import SpecialityCard from './SpecialityCard'

const Specialities = () => {
  return (
    <div className='flex flex-col gap-12 lg:py-40 px-5 lg:px-10 items-center mt-4 bg-[#03252d]'>
    <SubHeading text='My Specialities' />
    <p><p>I specialize in the following areas of practice.</p></p>
    <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
        <SpecialityCard heading="Self-Esteem" subheading="Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem." image="/assets/self-esteem.webp" />
        <SpecialityCard heading="Relationships" subheading="Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections." image="/assets/relationships.webp" />
        <SpecialityCard heading="Burnout" subheading="Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout." image="/assets/burnout.webp" />
        </div>  
    </div>
  )
}

export default Specialities
