"use client"

import { SearchProvider } from "./search"
import { CardProvider } from "./card"

export const AppProvider = ({ children }:{ children: React.ReactNode}) => {
  return (
    <>
      <SearchProvider>
        <CardProvider>
          {children}
        </CardProvider>
      </SearchProvider>
    </>
  )
}