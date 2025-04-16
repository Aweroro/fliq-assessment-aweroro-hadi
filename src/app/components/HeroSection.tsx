'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

const HeroSection = () => {
  return (
    <section className="relative border-white/15 border-t-1 px-4 md:px-10 py-20 text-center overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto space-y-6 z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex cursor-pointer text-nowrap items-center gap-2 px-4 py-1 rounded-full border bg-white/15 font-semibold text-gray-200 border-white/15 text-xs md:text-base hover:bg-gray-800 transition"
        >
          Introducing Fliq Mobile banking App
          <span className="text-xs md:text-xl">{'>'}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-7xl font-bold tracking-tight"
        >
          Building the future of banking.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Experience the future of banking with Fliq. We're here to empower your financial journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <PrimaryButton title="Get Started" className="text-xs md:text-base" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 max-w-6xl mx-auto rounded-2xl overflow-hidden"
      >
        <Image
          src={'/bg-photo.png'}
          alt="People using Fliq"
          className="w-full h-auto object-cover"
          width={1920}
          height={1080}
          priority
        />
      </motion.div>
    </section>
  )
}

export default HeroSection
