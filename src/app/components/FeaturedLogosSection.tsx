'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { src: '/forbes_logo.png', alt: 'Forbes' },
  { src: '/cnbc_logo.png', alt: 'CNBC' },
  { src: '/bloomberg_logo.png', alt: 'Bloomberg' },
  { src: '/reuters_logo.png', alt: 'Reuters' },
  { src: '/cnn_logo.png', alt: 'CNN' },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const FeaturedLogosSection = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-200 text-sm uppercase tracking-wider mb-12"
        >
          FEATURED AND SEEN IN
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="grayscale opacity-80 hover:opacity-100 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={60}
                className="w-24 md:w-28 lg:w-32 h-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedLogosSection
