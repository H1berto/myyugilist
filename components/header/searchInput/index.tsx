'use client';
import React, { useState } from 'react'
import SearchIcon from '@/assets/search-icon.svg'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchInput = () => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: any) => {
    e.preventDefault()
    if(query) router.push(`/search/${query}`)
  }

  return (
    <form className="max-w-md mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Image
            priority
            src={SearchIcon}
            alt={"Search icon"}
          />
        </div>
        <input onChange={(e)=> setQuery(e.currentTarget.value)}  type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busque coleções, cards..." required />
        <button onClick={handleSearch} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
      </div>
    </form>
  )
}

export default SearchInput