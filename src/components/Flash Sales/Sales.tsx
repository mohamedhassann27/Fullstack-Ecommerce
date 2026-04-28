import useProducts from '@/hooks/useProducts'
import CountDownTimer from './CountDownTimer'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '../ui/button'
import ProductCard from '../shared/ProductCard'
import type { IProduct } from '@/interfaces'
import ProductListSkeleton from '../shared/ProductListSkeleton'

function Sales() {
  const {isLoading, data}= useProducts()
  
  if(isLoading) return <ProductListSkeleton/>

  return (
    <section data-aos="fade-up" data-aos-duration="700" className='flex flex-col gap-5 border-b'>

      <div data-aos="fade-right" className="flex items-center justify-center gap-3 w-fit">
        <div className="h-10 w-5 bg-theme rounded-sm"></div>
        <h3 className='text-theme font-semibold'>Today's</h3>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" className="flex items-end max-md:flex-col max-md:items-center gap-5 max-w-200 justify-between">
        <h2 className='font-bold text-3xl'>Flash Sales</h2>
        <div data-aos="zoom-in" data-aos-delay="200">
          <CountDownTimer />
        </div>
      </div>

      <Carousel
      // opts={{align: "start",}}
      className="w-full py-5 relative max-md:mt-1"
      >
        <CarouselContent className='my-5'>
          
          {data?.slice(4, 14).map((product:IProduct, i:number) => (
            <CarouselItem data-aos="fade-up" data-aos-delay={i * 80} key={product.id} className="basis-1/1 md:basis-1/2 lg:basis-1/4 mx-1.5 max-md:px-3">

              <ProductCard product={product}/>

            </CarouselItem>
          ))}
        </CarouselContent>

        <div data-aos="fade-left" data-aos-delay="200" className="absolute flex gap-5 top-2 max-md:top-3 right-15">
          <CarouselPrevious className='cursor-pointer p-0 w-8! h-8! [&>svg]:w-7! [&>svg]:h-7!'/>
          <CarouselNext className='cursor-pointer p-0 w-8! h-8! [&>svg]:w-7! [&>svg]:h-7!'/>
        </div>
    </Carousel>

    <Button data-aos="zoom-in" data-aos-delay="50" className='bg-theme w-fit py-6 px-10 mx-auto cursor-pointer rounded-sm dark:text-white max-md:-mt-2'>View All Products</Button>

    </section>
  )
}

export default Sales
