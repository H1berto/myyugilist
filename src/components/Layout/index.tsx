import React from 'react'
import Header from '../header'

function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout