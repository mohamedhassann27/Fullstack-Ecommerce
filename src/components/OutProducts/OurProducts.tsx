import { ArrowLeft, ArrowRight, Eye, Heart, } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid, } from 'swiper/modules';
import useProducts from '@/hooks/useProducts';
import { Button } from '../ui/button';
import "swiper/css/grid";
import { useDispatch} from 'react-redux';
import { addProductToCart } from '@/app/features/cartSlice';
import { useNavigate } from 'react-router';
import type { IProduct } from '@/interfaces';
import ProductListSkeleton from '../shared/ProductListSkeleton';
import { toast } from 'sonner';

function OurProducts() {

    const {isLoading, data}= useProducts()

    const dispatch= useDispatch()
    const navigate= useNavigate()

    if(isLoading) return <ProductListSkeleton/>
    
    return (
    <section data-aos="fade-up" data-aos-duration="700" className='flex flex-col gap-5 relative mt-5'>

        <div data-aos="fade-right" className="flex items-center justify-center gap-3 w-fit">
            <div className="h-10 w-5 bg-theme rounded-sm"></div>
            <h3 className='text-theme font-semibold'>Today's</h3>
        </div>

        <div className="flex items-end max-md:flex-col max-md:items-center gap-5 max-w-200 justify-between">
            <h2 data-aos="fade-up" data-aos-delay="100" className='font-bold text-3xl'>Explore Our Products</h2>
        </div>

        <div data-aos="fade-up" data-aos-delay="150" className="py-8 h-full max-xl:w-full">
        <Swiper
            className="mySwiper w-full h-full"
            modules={[Navigation, Pagination, Grid, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            grid={{ rows:2, fill: "row" }}
            nested={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
            }}
            autoplay={{
                delay: 2500, // كل 3 ثواني
                disableOnInteraction: false, // يكمل حتى لو المستخدم ضغط
            }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    grid: { rows: 2 },
                },
                768: {
                    slidesPerView: 3,
                    grid: { rows: 2 },
                },
                1024: {
                    slidesPerView: 5,
                    grid: { rows: 2 },
                },
            }}
        >
            {data?.slice(35,55).map((product:IProduct)=>(
                <SwiperSlide className='w-40 h-full max-md:mt-6'>
                    <div className="bg-white text-black shadow-sm border border-gray-200 rounded-lg p-3 relative">
                    {/* <a href="javascript:void(0)" className="block"> */}
                    <div className="aspect-12/11 bg-gray-100 rounded-lg">
                        <img loading='lazy' src={product.thumbnail} alt="Product 1" className="w-full h-full object-cover hover:scale-105 transition rounded-lg" />
                    </div>
                    <div className="flex gap-2 mt-4">
                        <h5 className="text-base font-semibold text-slate-900 h-12 overflow-hidden">{product.title}</h5>
                        <h6 className="text-base font-bold ml-auto text-theme">${product.price}</h6>
                    </div>
                    <p className="text-slate-600 text-[13px] mt-2 h-4 overflow-hidden">{product.title}</p>
                    {/* </a> */}
                    <div className="flex items-center gap-2 mt-6">
                    <div className="flex flex-col absolute top-7 right-5 gap-2 items-center justify-center " title="Wishlist">
                        <Heart className='bg-white hover:bg-theme hover:text-white rounded-full cursor-pointer text-2xl p-2 w-9 h-9 transition'/>
                        <Eye onClick={()=> navigate(`products/${product.id}`)} className='bg-white hover:bg-theme hover:text-white rounded-full cursor-pointer text-2xl p-2 w-9 h-9 transition'/>
                    </div>

                    <Button onClick={()=>{dispatch(addProductToCart(product)), toast.success('product id added to cart', {position:'top-center'})}} type="button" className="text-sm  px-2 py-6 font-medium cursor-pointer mx-auto w-[95%] bg-black hover:bg-theme transition text-white tracking-wide ml-auto outline-none border-none rounded-md">Add to cart</Button>
                    </div>
                    </div>
                </SwiperSlide>

            ))} 
        </Swiper>
        <div data-aos="fade-left" data-aos-delay="200" className="flex gap-4 top-30 right-2 absolute max-md:top-36">
            <ArrowLeft className='custom-prev text-black dark:text-white shadow-2xl bg-secondary h-10 w-10 p-2 rounded-full cursor-pointer'/>
            <ArrowRight className='custom-next text-black dark:text-white shadow-2xl bg-secondary h-10 w-10 p-2 rounded-full cursor-pointer'/>
        </div>

        </div>
    <Button data-aos="zoom-in" data-aos-delay="50" className='bg-theme w-fit py-6 px-10 mx-auto cursor-pointer rounded-sm dark:text-white'>View All Products</Button>

    </section>
    )
}

export default OurProducts

