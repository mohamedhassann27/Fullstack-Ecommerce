import { useState } from "react"
import { ModeToggle } from "./ModeToggle"
import { Button } from "../ui/button";
import { Link, NavLink, useNavigate } from "react-router";
import DropdownProfileMenu from "./DropdownProfileMenu";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Heart, LogOut, Search, ShoppingCart } from "lucide-react";


function Navbar () {
    const [open, setOpen] = useState(false)
    const navigate= useNavigate()
    const cartProducts= useSelector((state:RootState)=> state.cart)
    const wishlistProducts= useSelector((state:RootState)=> state.wishlist)
    
    const logoutHandler= ()=>{
        localStorage.clear()
        navigate('/login')
    }

    

    return (
        <nav className="sticky z-10 top-0 flex items-center justify-between py-4 px-3 md:px-5 lg:px-10 xl:px-0 border-b border-gray-300 bg-white dark:bg-background  transition-all">

            <Link to="/" className="text-xl font-bold font">Exclusive</Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:gap-10 items-center">
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/collection'>Collection</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>

            <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                <Search className="text-xl"/>
            </div>
    
            <div className="flex items-center justify-center gap-4 ml-5">
                <ModeToggle/>
                {/* <CiHeart className="text-2xl cursor-pointer"/> */}
                <div className="relative cursor-pointer mx-1">
                    <Heart onClick={()=>navigate('/wishlist')} className="text-[26px]"/>
                    <button className="absolute -top-1.5 -right-1.5 text-xs bg-theme text-white w-4 h-4 rounded-full cursor-pointer">{wishlistProducts.length}</button>
                </div>

                <div className="relative cursor-pointer mr-5">
                    <ShoppingCart onClick={()=>navigate('/cart')} className="text-xl"/>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-theme w-4 h-4 rounded-full cursor-pointer">{cartProducts.length}</button>
                </div>
                {/* <div>
                    <Button onClick={logoutHandler} className="cursor-pointer">Log out</Button>
                </div> */}
                <DropdownProfileMenu/>
            </div>

            {/* Menu Icon SVG */}
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-15 left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden cursor-pointer`}>
                <NavLink to={'/'} className="block">Home</NavLink>
                <NavLink to={"/collection"} className="block">Collection</NavLink>
                <NavLink to={"/about"} className="block">About</NavLink>
                <NavLink to={"/contact"} className="block">Contact</NavLink>
                <Button onClick={logoutHandler} variant="destructive" className="cursor-pointer">
                    <LogOut />
                    Log out
                </Button>
            </div>

        </nav>
    )
}
export default Navbar