"use client"
import axios from 'axios';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ICardContext, CardProviderProps } from './types/index';
import { Card } from '@/components/Card';

const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: CardProviderProps)=>{
  const [cardId, setCardId] = useState('')
  const [card, setCard] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getData = async (id: string) => {
      try{
        const { data: { data }} = await axios.get(`/api/ygoprodeck?id=${id}`)
        setCard(data[0])
      }catch(error: any){
        if(error.response.status === 404){
          setCard(null)
          setError(true)
        }
      }
    }

    if(cardId) getData(cardId)
    setLoading(false)
  },[cardId])

  const handleCardChange = useCallback((query: string) => {
    setCardId(query)
  },[])


  return (
    <CardContext.Provider value={{ cardId, handleCardChange, card, error, loading }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => useContext(CardContext)