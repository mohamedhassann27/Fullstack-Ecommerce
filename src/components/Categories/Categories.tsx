import useCategories from "@/hooks/useCategories"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import type { ICategory } from "@/interfaces"
import CategoriesSkeleton from "./CategoriesSkeleton"

function Categories() {

    const {isLoading, data}= useCategories()

    if(isLoading) return <CategoriesSkeleton/>

    return (
        <section  data-aos="fade-up" data-aos-duration="700" className='flex flex-col gap-5 border-b'>

            <div data-aos="fade-right" className="flex items-center justify-center gap-3 w-fit">
                <div className="h-10 w-5 bg-theme rounded-sm"></div>
                <h3 className='text-theme font-semibold'>Categories</h3>
            </div>

            <div  data-aos="fade-up" data-aos-delay="100" className="flex items-end max-md:flex-col max-md:items-center gap-5 max-w-200 justify-between">
                <h2 className='font-bold text-3xl max-md:mb-2'>Browse By Category</h2>
            </div>

            <div data-aos="fade-up" data-aos-delay="150" >
              <Carousel
              // opts={{align: "start",}}
              className="w-full py-5 relative"
              >
              <CarouselContent className='my-5 max-md:mb-0'>
                {data?.map((category:ICategory, i:number) => (
                  <CarouselItem data-aos="zoom-in" data-aos-delay={i * 60} key={category.id} className="basis-1/2 md:basis-1/4 lg:basis-1/6 mx-1 max-md:mx-0">

                    <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-3 relative">
                      <a href="javascript:void(0)" className="block">
                        <div className="aspect-12/11 bg-gray-100 rounded-lg p-4 h-25 mx-auto">
                          <img src={category.img} loading='lazy' alt="category" className="w-full h-full object-contain hover:scale-110 transition" />
                        </div>
                        <p className="mx-auto w-fit mt-3 text-black">{category.name}</p>
                      </a>
                      </div>

                  </CarouselItem>
                ))}
              </CarouselContent>
              <div data-aos="fade-left" data-aos-delay="200" className="absolute flex gap-5 top-2 max-md:top-3.5 right-15">
                <CarouselPrevious className='cursor-pointer p-0 w-8! h-8! [&>svg]:w-7! [&>svg]:h-7!'/>
                <CarouselNext className='cursor-pointer p-0 w-8! h-8! [&>svg]:w-7! [&>svg]:h-7!'/>
              </div>
              </Carousel>
            </div>


        </section>
    )
}

export default Categories
