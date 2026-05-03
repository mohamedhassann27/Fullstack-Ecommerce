import hero1Img from '../../assets/Hero1.webp'
import hero2Img from '../../assets/Hero2.webp'
import hero3Img from '../../assets/Hero3.webp'
import hero4Img from '../../assets/Hero4.webp'
import hero5Img from '../../assets/Hero5.webp'
import {ArrowRight} from "lucide-react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router'

export default function Hero() {
  // const [isLoading, setIsLoading] = useState(true)

  const categories = [
    "Woman's Fashion",
    "Mens's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Babt's & Toys",
    "Groceries & Pets",
    "Health & Beauty"
  ]

  const images = [hero1Img, hero2Img, hero4Img, hero3Img, hero5Img]

  return (
    <div className='flex max-md:flex-col gap-5 py-0 mx-0 px-0'>

      {/* Sidebar */}
      <div data-aos="fade-right" data-aos-duration="600" className="md:py-12 py-6 border-r max-md:border-b max-md:hidden md:w-[22%]">
        <ul  className='flex-col  space-y-5'>
          {categories.map((link)=> (
            <li data-aos="fade-right" data-aos-delay={400} key={link}><Link to={'/collection'}>{link}</Link></li>
          ))}
        </ul>
      </div>

      {/* Hero */}
      <div  data-aos="fade-up" data-aos-duration="700" className="py-12 max-md:py-5 max-md:mt-6 relative h-70 md:h-120 w-full md:w-[78%] lg:w-[81%]">

        <Swiper
          className={`w-full h-full block hero-swiper`}
          modules={[ Pagination, Autoplay]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={25}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img} className='relative w-full mx-auto'>
              <img
              alt='hero img'
                src={img}
                loading="eager"
                fetchPriority="high"
                className='max-w-full max-h-full h-full object-cover max-md:object-fill w-full'
              />

              <div  data-aos="fade-up" data-aos-delay="200" className="absolute bottom-10 left-20 flex items-center gap-2 max-md:bottom-5 max-md:left-6">
                <a href="#" className='text-white border-b'>Shop now</a>
                <ArrowRight className='text-white' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}