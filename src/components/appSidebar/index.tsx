import Link from "next/link"
import { Calendar, Inbox,  Bell, Gift, Home, Menu, MessageSquare, Package, Search, Settings, Users, User } from "lucide-react"
import Cards from "@/public/cards.png"
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter
} from "@/src/components/ui/sidebar"
import { NavUser } from "../navUser";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Community",
    url: "/community",
    icon: Users,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/public/avatar.jpg",
  },
}

export function AppSidebar() {
  return (
    <Sidebar
      
    >
      <SidebarHeader>
        <div className="border-b p-4">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <Image
                src={Cards}
                alt={"Cards icon"}
                width={50}
                height={50}
              />
              <span>Yugilist Admin</span>
            </Link>
          </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user}/>
      </SidebarFooter>
    </Sidebar>
  )
}
