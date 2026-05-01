import type { IProduct } from "@/interfaces"
import { Eye, Heart, Star } from 'lucide-react'
import { Button } from "../ui/button"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { addProductToWishlist } from "@/app/features/wishlistSlice"
import { addProductToCart } from "@/app/features/cartSlice"
// import { toast } from "sonner"

function ProductCard({product}:{product:IProduct}) {
    const navigate= useNavigate()
    const dispatch= useDispatch()

    const HandleAddToCart= ()=>{
        dispatch(addProductToCart(product))
        // toast.success("Product is added to cart",  { position: "top-center" })
    }
    const handleAddToWishlist= ()=>{
        dispatch(addProductToWishlist(product))
        // toast.success("Product is added to wishlist",  { position: "top-center" })
    }
    
    return (
        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-3 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
            <div className="aspect-12/11 bg-gray-100 rounded-lg">
                <img src={product.thumbnail} loading='lazy' alt="Product" className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 " />
            </div>
            <h5 className="text-base font-semibold text-slate-900 h-6 overflow-hidden mt-5">{product.title}</h5>
            <p className="text-slate-600 text-[13px] mt-2 h-4 overflow-hidden">{product.category}</p>
            <div className="flex gap-2 mt-4">
                <p className='flex justify-between items-center gap-1 text-slate-600 '> 
                {Array.from({length: product.rating},(_,index)=>(<Star key={index} className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />))}
                ({product.reviews} Reviews)
                </p>
                
                <h6 className="text-base font-bold ml-auto text-theme group-hover:scale-105 transition">${product.price}</h6>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <div className="flex flex-col absolute top-7 right-5 gap-2 items-center justify-center " title="Wishlist">
                <Heart onClick={handleAddToWishlist} className='bg-white hover:bg-theme hover:text-white dark:text-black dark:hover:bg-theme dark:hover:text-white rounded-full cursor-pointer text-2xl p-2 w-9 h-9 transition'/>
                <Eye onClick={()=> navigate(`/products/${product.id}`)} className='bg-white hover:bg-theme hover:text-white dark:text-black dark:hover:bg-theme dark:hover:text-white rounded-full cursor-pointer text-2xl p-2 w-9 h-9 transition'/>
                </div>
                <Button onClick={HandleAddToCart} type="button" className="text-sm px-2 py-6 font-medium cursor-pointer w-full bg-black hover:bg-theme transition-all duration-300 text-white rounded-md group-hover:tracking-wider">Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductCard
