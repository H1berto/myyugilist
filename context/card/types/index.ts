import { Card } from "@/components/Card";

export interface ICardContext {
  card: Card | null
  cardId: String
  handleCardChange: (cardId: string) => void
  error: Boolean
  loading: Boolean
}

export type CardProviderProps = {
  children : React.ReactNode
}