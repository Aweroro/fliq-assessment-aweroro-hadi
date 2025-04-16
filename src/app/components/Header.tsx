import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const Header = () => {
  return (
    <header className='flex items-center justify-between px-10 py-2'>
     <div className='flex'>
       <div className='flex'>
        <Image
            src={'/logo.png'}
            alt='fliq logo'
            width={40}
            height={20}
            />
            <span className='flex flex-col'>
                <h3 className='font-bold text-3xl'>FLIQ</h3>
                <p className='flex justify-end text-sm'>by Blend</p>
            </span>
       </div>
     </div>
      <nav className="hidden md:flex gap-16 text-gray-300 text-lg">
            <a
                href="#"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
            >
                Solutions
            </a>
            <a
                href="#"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
            >
                Learn
            </a>
            <a
                href="#"
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
            >
                About
            </a>
        </nav>
      <PrimaryButton
        title='Join the waitlist'/>
    </header>
  )
}

export default Header
