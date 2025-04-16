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

const CardFeatures = () => {
  return (
    <section className="pt-16 pb-3">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i}>
            <div className='flex justify-start items-center'>
                <div className="flex justify-center items-center mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{f.description}</p>
          </div>
        ))}
        <div className="mt-40 flex items-center">
            <Image src="/logo.svg" alt="Fliq logo" width={100} height={50} />
            <div className="space-y-2 ml-4">
                <h3 className="text-7xl font-bold">Fliq.</h3>
                <p className="text-sm flex justify-center text-gray-400">by Blend</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default CardFeatures
