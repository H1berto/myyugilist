'use client';

import { useState } from 'react'

function Page() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1 className='text-2xl font-semibold'>My Client Side Page</h1>
      <button
        className='bg-black text-white font-bold py-2 px-4 rounded my-4'
        onClick={() => setCount(count+1)}
      >
        Inclement
      </button>
      <p className='text-gray-700'>{count}</p>
    </section>
  )
}

export default Page