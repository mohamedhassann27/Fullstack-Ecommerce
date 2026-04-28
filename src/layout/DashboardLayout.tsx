import { AppSidebar } from '@/components/dashboard/app-sidebar'
import { SiteHeader } from '@/components/dashboard/site-header'
// import Navbar from '@/components/Navbar/Navbar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
// import Dashboard from '@/pages/dashboard/Dashboard'
import { Outlet } from 'react-router'

function DashboardLayout() {
    // const {data}= useSelector(state=> state.login)
    // console.log(data);
    
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader/>
        
        <Outlet/>

      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
