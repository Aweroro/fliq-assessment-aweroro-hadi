'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Solutions', 'Learn', 'About']

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-4 gap-4 md:gap-0">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Fliq logo" width={40} height={20} />
          <span className="flex flex-col ml-3">
            <h3 className="font-bold text-xl md:text-3xl">FLIQ</h3>
            <p className="text-xs md:text-sm flex justify-end text-gray-400">by Blend</p>
          </span>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <nav className="hidden md:flex gap-8 lg:gap-16 text-gray-300 text-base lg:text-lg">
        {navItems.map((text, index) => (
          <a
            key={index}
            href="#"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            {text}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex">
        <PrimaryButton title="Join the waitlist" className="text-sm md:text-base" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center w-full text-text py-4 space-y-4">
          {navItems.map((text) => (
            <a
              key={text}
              href="#"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer pb-2 relative text-sm font-semibold text-white
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px]
                after:bg-violet-600 after:bottom-0 after:left-0 after:transition-transform
                after:duration-500 after:origin-left hover:after:scale-x-100"
            >
              {text}
            </a>
          ))}
          <PrimaryButton title="Join the waitlist" className="text-sm md:text-base w-fit"/>
        </div>
      )}
    </header>
  )
}

export default Header
