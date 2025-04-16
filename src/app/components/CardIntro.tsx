'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const CardIntro = () => {
  return (
    <section className="relative px-4 md:px-10 py-20 overflow-hidden text-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto z-10 relative"
      >
         <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-lg text-violet-500 uppercase tracking-wide mb-4"
        >
          Introducing
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold mb-6"
        >
          Introducing Fliq&rsquo;s Next-Gen Cards
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-md md:text-lg text-gray-400 mb-10"
        >
          Discover Fliq&rsquo; latest innovation - our new cards. 
          Elevate your banking experience with cutting-edge features, security, and unprecedented convenience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <Image
            src="/bg-visa-card.png"
            alt="Fliq Card"
            width={800}
            height={600}
            className="rounded-xl h-auto w-32 md:w-40 lg:w-48"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CardIntro
