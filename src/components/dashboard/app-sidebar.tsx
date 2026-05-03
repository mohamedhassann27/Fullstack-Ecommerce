import { NavPages } from "@/components/dashboard/nav-pages"
import { NavMain } from "@/components/dashboard/nav-main"
import { NavSecondary } from "@/components/dashboard/nav-secondary"
import { NavUser } from "@/components/dashboard/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, CommandIcon, Heart, } from "lucide-react"
import { AiOutlinePieChart } from "react-icons/ai";
import { TbChartArea } from "react-icons/tb";
import { PiChartBar, PiChartLineBold } from "react-icons/pi";

import { FaRegCalendarAlt } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { Link } from "react-router"




const data = {
  user: {
    name: "admin1",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon
        />
      ),
    },
    {
      title: "Products",
      url: "products",
      icon: (
        <ListIcon
        />
      ),
    },
    {
      title: "Favorites",
      url: "/dashboard/favorites",
      icon: (
        <Heart
        />
      ),
    },
    {
      title: "Team",
      url: "/dashboard/team",
      icon: (
        <RiTeamLine />
      ),
    },
    {
      title: "Calender",
      url: "/dashboard/calender",
      icon: (
        <FaRegCalendarAlt />
      ),
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: (
        <CameraIcon
        />
      ),
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: (
        <FileTextIcon
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: (
        <FileTextIcon
        />
      ),
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: (
        <Settings2Icon
        />
      ),
    },
    {
      title: "Get Help",
      url: "#",
      icon: (
        <CircleHelpIcon
        />
      ),
    },
    {
      title: "Search",
      url: "#",
      icon: (
        <SearchIcon
        />
      ),
    },
  ],
  documents: [
    {
      name: "Area Chart",
      url: "/dashboard/areachart",
      icon: (
        <TbChartArea />
      ),
    },
    {
      name: "Bar Chart",
      url: "/dashboard/barchart",
      icon: (
        <PiChartBar />
      ),
    },
    
    {
      name: "Pie Chart",
      url: "/dashboard/piechart",
      icon: (
        <AiOutlinePieChart />
      ),
    },
    {
      name: "Line Chart",
      url: "/dashboard/linechart",
      icon: (
        <PiChartLineBold/>
      ),
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to="/">
                <CommandIcon className="size-5! text-theme" />
                <span className="text-base font-semibold text-theme">Exclusive</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavPages items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
