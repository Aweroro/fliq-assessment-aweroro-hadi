'use client'
import { DocumentDuplicateIcon, IdentificationIcon, LockClosedIcon } from '@heroicons/react/16/solid'

const features = [
  {
    icon: <DocumentDuplicateIcon className="w-5 h-5 mr-2" />,
    title: 'Contactless Technology',
    desc: 'Our new cards come equipped with contactless tech for swift, secure payments.',
  },
  {
    icon: <IdentificationIcon className="w-5 h-5 mr-2" />,
    title: 'Personalization',
    desc: 'Customize your card to reflect your unique style with a range of designs.',
  },
  {
    icon: <LockClosedIcon className="w-5 h-5 mr-2" />,
    title: 'Enhanced Security',
    desc: 'Our cards feature advanced security measures to protect your transactions.',
  },
]

const CardFeatures = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i}>
            <div className='flex justify-start items-center'>
                <div className="flex justify-center items-center mb-4">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
            </div>
            <p className="text-sm text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardFeatures
