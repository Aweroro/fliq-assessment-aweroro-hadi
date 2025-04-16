import React from 'react'
import Image from 'next/image'

const logos = [
  { src: '/forbes_logo.png', alt: 'Forbes' },
  { src: '/cnbc_logo.png', alt: 'CNBC' },
  { src: '/bloomberg_logo.png', alt: 'Bloomberg' },
  { src: '/reuters_logo.png', alt: 'Reuters' },
  { src: '/cnn_logo.png', alt: 'CNN' },
]

const FeaturedLogosSection = () => {
  return (
    <section className="py-12">
      <div className="px-4">
        <h2 className="text-center text-gray-200 text-sm uppercase tracking-wider mb-12">
          FEATURED AND SEEN IN
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale opacity-80 hover:opacity-100 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="w-24 md:w-28 lg:w-32 h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedLogosSection

