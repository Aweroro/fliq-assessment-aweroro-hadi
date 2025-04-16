import React from 'react'
import Image from 'next/image'

const logos = [
    {src: '/forbes_logo.png', alt: 'Forbes'},
    {src: '/cnbc_logo.png', alt: 'CNBC'},
    {src: '/bloomberg_logo.png', alt: 'Bloomberg'},
    {src: '/reuters_logo.png', alt: 'Reuters'},
    {src: '/cnn_logo.png', alt: 'CNN'},
]

const FeaturedLogosSection = () => {
  return (
    <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4'> 
            <h2  className="text-center text-gray-200 text-sm uppercase tracking-wider mb-12">
                FEATURED AND SEEN IN
            </h2>
            <div className='flex flex-wrap justify-center gap-10 items-center'>
                {logos.map((logo, index) => (
                    <div key={index} className='h-24 grayscale opacity-70 hover:opacity-100 transition'>
                        <Image src={logo.src} alt={logo.alt} width={120} height={0}/>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturedLogosSection
