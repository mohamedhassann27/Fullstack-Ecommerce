import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"

function RootLayout() { 
    return (
        <>
        <div className="max-w-7xl mx-auto min-h-screen">

            <Navbar/>

            <Outlet/>

            <Footer/>

        </div>
        </>
    )
}

export default RootLayout
