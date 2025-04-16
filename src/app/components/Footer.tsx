import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Footer = () => {
  return (
   <>
    <footer className="bg-black border-t border-gray-700 text-white pt-10 px-20 flex justify-between">
        <div className='p-2 border border-dashed flex gap-5 w-1/3'>
          <Image src="/qr-code.png" alt="QR code" width={100} height={30} />
          <div>
            <p className='mb-2 text-sm'>Hope your test is going well.</p>
            <div className='flex cursor-pointer gap-4'>
                <Link href={'#'}><Image src={'/google-icon.png'} alt='Google Icon' width={20} height={20}/></Link>
                <Link href={'#'}><Image src={'/apple-icon.png'} alt='Google Icon' width={20} height={20}/></Link>
            </div>
          </div>
        </div>

      <div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        <div>
          <p className="text-sm mb-2">About us</p>
          <ul className="space-y-1 text-sm text-gray-400 cursor-pointer">
            <li><a href='#' className='hover:text-white'>Our company</a></li>
            <li><a href='#' className='hover:text-white'>Careers</a></li>
            <li><a href='#' className='hover:text-white'>Press kits</a></li>
          </ul>
        </div>

        <div>
          <p className="text-smmb-2">Legal</p>
          <ul className="space-y-1 text-gray-400 text-sm cursor-pointer">
            <li><a href='#' className='hover:text-white'>Terms of use</a></li>
            <li><a href='#' className='hover:text-white'>Privacy policy</a></li>
            <li><a href='#' className='hover:text-white'>About us</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm mb-2">Support</p>
          <ul className="space-y-1 text-gray-400 text-sm cursor-pointer">
          <li><a href='#' className='hover:text-white'>Contact us</a></li>
          <li><a href='#' className='hover:text-white'>FAQ</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
 
      <div className="mt-10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1 ml-2 lg:ml-20">
          Goodluck on your Test
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        <span>© Fliq co, LLC.</span>
      </div>

   </>  )
}

export default Footer
