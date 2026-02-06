import React from 'react'

const Contact = () => {
    return (
        <div className='p-15 flex flex-col gap-5'>
            <div className='flex justify-between'>
                <h1 className='text-[35px] '>Lilac Template</h1>
                <div className='flex gap-55'>
                    <h1 className='text-[35px] '>Hours</h1>
                    <h1 className='text-[35px] '>Find</h1>
                </div>
            </div>

            <div className='flex justify-between'>
                <p className='text-[20px] w-[200px]'>123 Example Road Minneapolis, MN</p>
                <div className='flex gap-30'>
                    <h1 className='text-[20px] w-[200px]'>Monday – Friday 10am – 6pm</h1>
                    <h1 className='text-[20px] w-[60px] cursor-pointer underline'>Home Contact Blog</h1>

                </div>
            </div>

             <div className='flex justify-between'>
                <p className='text-[20px] w-[200px] cursor-pointer underline'>email@example.com (555) 555-5555</p>
                
            </div>

        </div>
    )
}

export default Contact
