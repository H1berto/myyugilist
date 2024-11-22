'use client';

import SearchInput from "@/src/components/header/searchInput";

const Page = () => {

  return (
    <div>
      <div className='flex flex-col justify-center'>
        <h1>Pagina de busca </h1>
        <SearchInput/>
      </div>
    </div>
  )
}

export default Page