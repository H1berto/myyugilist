import React from 'react'
import SearchInput from './searchInput'
import { ModeToggle } from './modeToggle'
import {
  Menubar
} from "@/src/components/ui/menubar"

function Header() {
  return (
    <header className="flex justify-center flex-row p-3">
      <Menubar
        className="p-10 flex justify-center"
      >
        <SearchInput/>
        <ModeToggle/>
      </Menubar>
    </header>
  )
}

export default Header