import { AppProvider } from "@/src/context"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{ children }</AppProvider>
}