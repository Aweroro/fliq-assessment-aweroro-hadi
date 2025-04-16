import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

const Footer = () => {
  return (
    <>
      <footer className="bg-black border-t border-gray-700 text-white pt-10 px-6 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

          {/* QR Section */}
          <div className="border border-dashed p-4 flex gap-5 items-start md:w-1/2 lg:w-1/3">
            <Image src="/qr-code.png" alt="QR code" width={80} height={80} className="object-contain" />
            <div>
              <p className="mb-2 text-sm">Hope your test is going well.</p>
              <div className="flex gap-4 cursor-pointer mt-2">
                <Link href="#"><Image src="/google-icon.png" alt="Google Icon" width={20} height={20} /></Link>
                <Link href="#"><Image src="/apple-icon.png" alt="Apple Icon" width={20} height={20} /></Link>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-14 md:w-1/2 lg:w-2/3">
            <div>
              <p className="text-sm mb-2 font-semibold">About us</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Our company</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press kits</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm mb-2 font-semibold">Legal</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of use</a></li>
                <li><a href="#" className="hover:text-white">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white">About us</a></li>
              </ul>
            </div>

            <div>
              <p className="text-sm mb-2 font-semibold">Support</p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Contact us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-4 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Goodluck on your Test</span>
            <ChevronDownIcon className="w-4 h-4" />
          </div>
          <span>© Fliq Co, LLC.</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
