'use client';
import {useState, useEffect} from 'react'
import Gallery from "@/components/Gallery";
import axios from "axios"
import { notFound } from 'next/navigation';
import { useSearchContext } from '@/context/search';

const Page = ({ params:{ slug } }: { params: { slug: string } }) => {
  const { cards, error, handleQueryChange } = useSearchContext()

  useEffect(()=>{
    handleQueryChange(slug)
  },[handleQueryChange, slug])

  if(error){
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