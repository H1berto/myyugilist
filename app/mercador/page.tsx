import Image from 'next/image'
import React from 'react'
import TraderImage from '@/assets/trader.jpg'

function Page() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-2">
        <Image
          src={TraderImage}
          alt='Mercador'
        />
        <h1>Pagina do Mercador!</h1>
        <p>
          Vejas as novas coleções e cards que temos para você!
        </p>
    </section>
  )
}

export default Page