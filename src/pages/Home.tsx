import BestProducts from "@/components/BestProducts/BestProducts"
import Categories from "@/components/Categories/Categories"
import Sales from "@/components/Flash Sales/Sales"
import Hero from "@/components/Hero/Hero"
import MusicExperience from "@/components/MusicExperience/MusicExperience"
import NewArrival from "@/components/NewArrival/NewArrival"
import OurProducts from "@/components/OutProducts/OurProducts"
// import { Navigate } from "react-router"

function HomePage() {
    // const isLoggedin= false
    // if(!isLoggedin) return <Navigate to="/login" replace/>
    return (
        <>
            <div className="max-w-7xl mx-auto  px-3 md:px-5 lg:px-10 xl:px-0">
                <Hero/>
                <Sales/>
                <Categories/>
                <BestProducts/>
                <MusicExperience/>
                <OurProducts/>
                <NewArrival/>
            </div>
        </>
    )
}

export default HomePage
