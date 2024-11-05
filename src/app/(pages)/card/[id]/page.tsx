'use client';
import {useEffect, useState} from 'react'
import { notFound } from 'next/navigation';
import { useCardContext } from '@/src/context/card';
import CardDetails from "@/src/components/cardDetails"
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
      }catch(err){
        setCard(null)
        setError(true)
        setLoading(false)
        console.log("error:", err)
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