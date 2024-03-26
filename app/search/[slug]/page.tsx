'use client';
import {useState, useEffect} from 'react'
import Gallery from "@/components/gallery";
import axios from "axios"
import { notFound } from 'next/navigation';

const Search = ({ params:{ slug } }: { params: { slug: string } }) => {
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  useEffect(()=>{
    const getData = async (query: string) => {
      try{
        const { data: { data }} = await axios.get(`/api/ygoprodeck?q=${query}`)
        setCards(data)
      }catch(error: any){
        if(error.response.status === 404){
          setCards([])
          setError(true)
        }
      }
    }
    getData(slug)
  },[slug])

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

export default Search