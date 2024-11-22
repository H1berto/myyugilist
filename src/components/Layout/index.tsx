import React from 'react'
import { AppSidebar } from "@/src/components/appSidebar"
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar"

function Layout({ children }: { children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default Layout