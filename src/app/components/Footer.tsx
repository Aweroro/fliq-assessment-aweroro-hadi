import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image src="/logo.svg" alt="Fliq Logo" width={100} height={30} />
          <p className="text-sm text-gray-500 mt-4">by Blend</p>
        </div>

        <div>
          <p className="text-sm mb-2">About us</p>
          <ul className="space-y-1 text-sm text-gray-400 cursor-pointer">
            <li className='hover:text-white'>Our company</li>
            <li className='hover:text-white'>Careers</li>
            <li className='hover:text-white'>Press kits</li>
          </ul>
        </div>

        <div>
          <p className="text-smmb-2">Legal</p>
          <ul className="space-y-1 text-gray-400 text-sm cursor-pointer">
            <li className='hover:text-white'>Terms of use</li>
            <li className='hover:text-white'>Privacy policy</li>
            <li className='hover:text-white'>About us</li>
          </ul>
        </div>

        <div>
          <p className="text-sm mb-2">Support</p>
          <ul className="space-y-1 text-gray-400 text-sm cursor-pointer">
            <li className='hover:text-white'>Contact us</li>
            <li className='hover:text-white'>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
        <div className="flex items-center gap-1">
          Goodluck on your Test
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        <span>© Fliq co, LLC.</span>
      </div>
    </footer>
  )
}

export default Footer
