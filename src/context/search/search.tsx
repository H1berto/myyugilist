"use client"
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ISearchContext, SearchProviderProps } from './types/indext';
import { Card } from "@/src/components/Card";

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchProvider = ({ children }: SearchProviderProps)=>{
  const [cards, setCards] = useState<Card[]>([])
  const [error, setError] = useState<Boolean>(false)
  const [loading, setLoading] = useState<Boolean>(false)

  return (
    <SearchContext.Provider value={{ cards, setCards, error, setError, loading, setLoading}}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)