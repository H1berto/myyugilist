import { Card } from "@/src/components/card";

export interface ISearchContext {
  cards: Card[]
  setCards: (cards: Card[]) => void
  error: boolean
  setError: (error: boolean) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export type SearchProviderProps = {
  children : React.ReactNode
}