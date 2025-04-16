'use client'
import Image from 'next/image'

const CardIntro = () => {
  return (
    <section className="py-16 bg-black text-white text-center">
      <p className="text-sm text-purple-500 uppercase tracking-wide mb-4">Introducing</p>
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">Introducing Fliq&rsquo;s Next-Gen Cards</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Discover Fliq&rsquo;s latest innovation — our new cards. Elevate your banking experience with cutting-edge features,
        security, and unprecedented convenience.
      </p>
      <div className="flex justify-center">
        <Image src="/bg-visa-card.png" alt="Fliq Card" width={180} height={280} className="rounded-xl" />
      </div>
    </section>
  )
}

export default CardIntro
