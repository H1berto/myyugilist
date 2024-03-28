"use client"
import axios from 'axios';
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { ISearchContext, SearchProviderProps } from './types/indext';

const SearchContext = createContext<ISearchContext>({} as ISearchContext);

export const SearchProvider = ({ children }: SearchProviderProps)=>{
  const [query, setQuery] = useState('')
  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
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

    if(query) getData(query)
    setLoading(false)
  },[query])

  const handleQueryChange = useCallback((query: string) => {
    setQuery(query)
  },[])


  return (
    <SearchContext.Provider value={{ query, handleQueryChange, cards, error, loading }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => useContext(SearchContext)