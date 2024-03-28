"use client"

import { SearchProvider } from "./search"

export const AppProvider = ({ children }:{ children: React.ReactNode}) => {
  return (
    <>
      <SearchProvider>{children}</SearchProvider>
    </>
  )
}