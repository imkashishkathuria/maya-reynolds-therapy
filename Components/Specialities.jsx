import React from 'react'

import SubHeading from './SubHeading'
import SpecialityCard from './SpecialityCard'

const Specialities = () => {
  return (
    <div className='flex flex-col gap-12 py-7 px-10 items-center my-14'>
    <SubHeading text='My Specialities' />
    <div className='flex justify-between items-center gap-4'>
        <SpecialityCard heading="Self-Esteem" subheading="Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem." image="/assets/self-esteem.webp" />
        <SpecialityCard heading="Relationships" subheading="Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections." image="/assets/relationships.webp" />
        <SpecialityCard heading="Burnout" subheading="Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout." image="/assets/burnout.webp" />
        </div>  
    </div>
  )
}

export default Specialities
