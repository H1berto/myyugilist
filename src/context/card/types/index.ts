import { Card } from "@/src/components/card";

export interface ICardContext {
  card: Card | null
  setCard: (card: Card) => void
  error: boolean
  setError: (error: boolean) => void
}

export type CardProviderProps = {
  children : React.ReactNode
}