"use client"
import axios from 'axios';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ICardContext, CardProviderProps } from './types/index';
import { Card } from '@/src/components/Card';

const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider = ({ children }: CardProviderProps)=>{
  const [card, setCard] = useState<Card | null>(null)
  const [error, setError] = useState<Boolean>(false)

  return (
    <CardContext.Provider value={{ card, error, setCard, setError }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => useContext(CardContext)