import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const HeroSection = () => {
  return (
    <section className="relative border-white/15 border-t-1 px-4 md:px-10 py-20 text-center overflow-hidden">
    <div className="max-w-4xl mx-auto space-y-6 z-10 relative">
      <div className="inline-flex cursor-pointer items-center gap-2 px-4 py-1 rounded-full border bg-white/15 font-semibold text-gray-200 border-white/15 text-sm hover:bg-gray-800 transition">
        Introducing Fliq Mobile banking App
        <span className="text-xl">{'>'}</span>
      </div>

      <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
        Building the future of banking.
      </h1>

      <p className="text-lg text-gray-200 max-w-2xl mx-auto">
        Experience the future of banking with Fliq. We're here to empower your financial journey.
      </p>

      <PrimaryButton
      title='Get Started'/>
    </div>

    <div className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden">
      <Image
        src={'/bg-photo.png'}
        alt="People using Fliq"
        className="w-full h-auto object-cover"
        width={1920}
        height={1080}
        priority
      />
    </div>
  </section>
  )
}

export default HeroSection
