import { Card } from "@/src/components/Card";

export interface ICardContext {
  card: Card | null
  setCard: (card: Card) => void
  error: Boolean
  setError: (error: Boolean) => void
}

export type CardProviderProps = {
  children : React.ReactNode
}