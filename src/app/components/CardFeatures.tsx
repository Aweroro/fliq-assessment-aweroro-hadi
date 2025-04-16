'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DocumentDuplicateIcon, IdentificationIcon, LockClosedIcon } from '@heroicons/react/16/solid'

const features = [
  {
    icon: <DocumentDuplicateIcon className="w-5 h-5 mr-2" />,
    title: 'Contactless Technology',
    description: 'Our new cards come equipped with contactless technology allowing you to make swift, secure payments with a simple tap.',
  },
  {
    icon: <IdentificationIcon className="w-5 h-5 mr-2" />,
    title: 'Personalization',
    description: 'Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.',
  },
  {
    icon: <LockClosedIcon className="w-5 h-5 mr-2" />,
    title: 'Enhanced Security',
    description: 'Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.',
  },
]

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const CardFeatures = () => {
  return (
    <section className="pt-16 pb-3">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={featureVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className='flex justify-center md:justify-start items-center'>
              <div className="flex justify-center items-center mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2 text-md md:text-xl">{f.title}</h3>
            </div>
            <p className="text-xs md:text-base text-center md:text-left text-gray-400">{f.description}</p>
          </motion.div>
        ))}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-40 flex items-center"
        >
          <Image src="/logo.svg" alt="Fliq logo" width={100} height={50} />
          <div className="space-y-2 ml-4">
            <h3 className="text-7xl font-bold">Fliq.</h3>
            <p className="text-sm flex justify-center text-gray-400">by Blend</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CardFeatures
