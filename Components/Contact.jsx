import React from 'react'

const Contact = () => {
    return (
        <div className=''>


            <div className='p-15 hidden lg:flex flex-col gap-5 bg-[#03252d]'>
                <div className='flex flex-col lg:flex-row justify-between'>
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

            <div className="lg:hidden w-full min-h-screen bg-[#FBF6EE] flex flex-col items-center justify-start py-12 px-6 text-center">

                {/* Title */}
                <h1 className="text-2xl font-semibold mb-6">
                    Lilac Template
                </h1>

                {/* Address */}
                <p className="text-base leading-relaxed">
                    123 Example Road <br />
                    Minneapolis, MN
                </p>

                {/* Email */}
                <a
                    href="mailto:email@example.com"
                    className="mt-4 text-base underline underline-offset-4"
                >
                    email@example.com
                </a>

                {/* Phone */}
                <a
                    href="tel:5555555555"
                    className="mt-2 text-base underline underline-offset-4"
                >
                    (555) 555-5555
                </a>

                {/* Hours */}
                <h2 className="mt-10 text-xl font-semibold">
                    Hours
                </h2>
                <p className="mt-3 text-base leading-relaxed">
                    Monday – Friday <br />
                    10am – 6pm
                </p>

                {/* Find */}
                <h2 className="mt-10 text-xl font-semibold">
                    Find
                </h2>

                {/* Links */}
                <nav className="mt-4 flex flex-col gap-2">
                    <a href="/" className="text-base underline underline-offset-4">
                        Home
                    </a>
                    <a href="/contact" className="text-base underline underline-offset-4">
                        Contact
                    </a>
                    <a href="/blog" className="text-base underline underline-offset-4">
                        Blog
                    </a>
                </nav>

            </div>
        </div>
    )
}

export default Contact
