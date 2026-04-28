import { Button } from '../ui/button'
import useProducts from '@/hooks/useProducts'
import type { IProduct } from '@/interfaces'
import ProductCard from '../shared/ProductCard'
import ProductListSkeleton from '../shared/ProductListSkeleton'

function BestProducts() {

    const {isLoading, data}= useProducts()

    if(isLoading) return <ProductListSkeleton/>
    return (
        <section  data-aos="fade-up" data-aos-duration="700" className='flex flex-col gap-5'>
            
            <div  data-aos="fade-right" className="flex items-center justify-center gap-3 w-fit">
                <div className="h-10 w-5 bg-theme rounded-sm"></div>
                <h3 className='text-theme font-semibold'>Today's</h3>
            </div>

            <div className="flex max-md:flex-wrap gap-2 justify-between items-center">
                <h2 data-aos="fade-up" data-aos-delay="100" className='font-bold text-3xl max-md:w-full'>Best Selling Products</h2>
                <Button data-aos="zoom-in" data-aos-delay="150" className='bg-theme w-fit py-6 px-10 cursor-pointer rounded-sm dark:text-white max-md:mt-3'>View All</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
                {data?.slice(10,14).map((product:IProduct, index:number)=>(
                    <div data-aos="fade-up" data-aos-delay={index * 80} data-aos-duration="600" key={index}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BestProducts
