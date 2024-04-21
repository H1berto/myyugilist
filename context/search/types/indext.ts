import { Card } from "@/components/Card";

export interface ISearchContext {
  cards: Card[]
  setCards: (cards: Card[]) => void
  error: Boolean
  setError: (error: Boolean) => void
  loading: Boolean
  setLoading: (loading: Boolean) => void
}

export type SearchProviderProps = {
  children : React.ReactNode
}