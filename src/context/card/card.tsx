"use client"

import { createContext, useContext, useState } from 'react'
import { ICardContext, CardProviderProps } from './types/index';
import { Card } from '@/src/components/card';

const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: CardProviderProps)=>{
  const [card, setCard] = useState<Card | null>(null)

  const [error, setError] = useState<boolean>(false)

  return (
    <CardContext.Provider value={{ card, error, setCard, setError }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => useContext(CardContext)