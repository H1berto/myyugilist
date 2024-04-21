'use client';
import {useEffect} from 'react'
import { notFound } from 'next/navigation';
import { useCardContext } from '@/context/card';
import CardDetails from "@/components/CardPage/Details"

function Page({ params:{ id } }: { params: { id: string }}) {
  const { card, error, handleCardChange } = useCardContext()

  useEffect(()=>{
    handleCardChange(id)
  },[handleCardChange, id])

  if(error){
    notFound()
  }
  
  return (
    <div>
      <CardDetails card={card} />
    </div>
  )
}

export default Page