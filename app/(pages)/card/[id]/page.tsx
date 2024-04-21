'use client';
import {useEffect, useState} from 'react'
import { notFound } from 'next/navigation';
import { useCardContext } from '@/context/card';
import CardDetails from "@/components/CardPage/Details"
import axios from 'axios';

function Page({ params:{ id } }: { params: { id: string }}) {
  const { card, error, setCard, setError } = useCardContext()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getData = async (cardId: string) => {
      try{
        const { data: { data }} = await axios.get(`/api/ygoprodeck/${cardId}`)
        setCard(data[0])
        setLoading(false)
      }catch(error: any){
        setCard(null as any)
        setError(true)
        setLoading(false)
      }
    }
    getData(id)
  },[])

  if(error && !loading){
    notFound()
  }

  return (
    <div>
      <CardDetails card={card} />
    </div>
  )
}

export default Page