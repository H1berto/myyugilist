'use client';
import {useEffect, useState} from 'react'
import Gallery from "@/src/components/gallery";
import { notFound } from 'next/navigation';
import { useSearchContext } from '@/src/context/search';
import axios from 'axios';

const Page = ({ params:{ slug } }: { params: { slug: string } }) => {
  const { cards, setCards, error, setError } = useSearchContext()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    const search = async (query: string) => {
      try{
        const { data } = await axios.get(`/api/ygoprodeck?q=${query}`)
        setCards(data.data)
        setError(false)
        setLoading(false)
      }catch(err){
        setCards([])
        setError(true)
        setLoading(false)
        console.log("erro:", err)
      }
    }
    search(slug)
  },[])

  if(error && !loading){
    notFound()
  }

  return (
    <div>
      <div className='flex justify-center'>
        <h1>Buscando por: <b>{decodeURI(slug)}</b> </h1>
      </div>
      <Gallery cards={cards}/>
    </div>
  )
}

export default Page