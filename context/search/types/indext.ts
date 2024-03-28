import { Card } from "@/components/Card";

export interface ISearchContext {
  cards: Card[]
  query: String
  handleQueryChange: (query: string) => void
  error: Boolean
  loading: Boolean
}

export type SearchProviderProps = {
  children : React.ReactNode
}