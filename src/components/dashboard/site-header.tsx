// import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "../Navbar/ModeToggle"
import { CiSearch } from "react-icons/ci"
// import { NavLink, useNavigate } from "react-router"
// import { BsCart3 } from "react-icons/bs"
import { Bell, CircleQuestionMark, LayoutDashboard } from "lucide-react"

export function SiteHeader() {
  // const navigate= useNavigate()
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">

      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6 justify-between">

        <div className="flex items-center gap-7">
          <div className="flex">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx- data-[orientation=vertical]:h-8"
            />
          </div>

          <div className="flex gap-2 items-center">
            <LayoutDashboard className=" h-5! w-5!"/>
            <h2 className="text-xl">Dashboard</h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
              <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
              <CiSearch className="text-xl"/>
          </div>
          <ModeToggle/>
          <Bell className="h-5"/>
          <CircleQuestionMark className="h-5"/>
        </div>
    
      </div>
    </header>
  )
}
