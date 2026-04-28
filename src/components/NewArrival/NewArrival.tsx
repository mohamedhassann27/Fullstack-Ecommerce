import GalleryResizable from "./GalleryResizable"

function NewArrival() {
    // const {data}= useProducts()

    return (
        <section data-aos="fade-up" data-aos-duration="700" className='flex flex-col gap-5 relative'>

            <div data-aos="fade-right" className="flex items-center justify-center gap-3 w-fit">
                <div className="h-10 w-5 bg-theme rounded-sm"></div>
                <h3 className='text-theme font-semibold'>Featured</h3>
            </div>

            <div className="flex items-end max-md:flex-col max-md:items-center gap-5 max-w-200 justify-between">
                <h2 data-aos="fade-up" data-aos-delay="100" className='font-bold text-3xl'>New Arrival</h2>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150">
                <GalleryResizable/>
            </div>
            
        </section>
    )
}

export default NewArrival
