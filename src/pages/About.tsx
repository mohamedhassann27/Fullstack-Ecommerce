import { CircleDollarSign, ShoppingBag, Store } from 'lucide-react'
import { FaSackDollar } from "react-icons/fa6";

import img1 from '.././assets/new1.webp'
import img2 from '.././assets/new2.webp'

import CountUpModule from "react-countup";
const CountUp = CountUpModule.default;

function About() {
    const services= [
        {
            icon:<Store className='w-12 h-12 bg-black p-2 text-white group-hover:bg-white group-hover:text-black transition rounded-full'/>,
            number: 10.5,
            text: "Sallers active our site"
        },
        {
            icon:<CircleDollarSign className='w-12 h-12 bg-black p-2 text-white group-hover:bg-white group-hover:text-black transition rounded-full'/>,
            number: 33,
            text: "Mopnthly Produduct Sale"
        },
        {
            icon:<ShoppingBag className='w-12 h-12 bg-black p-2 text-white group-hover:bg-white group-hover:text-black transition rounded-full'/>,
            number: 45.5,
            text: "Customer active in our site"
        },
        {
            icon:<FaSackDollar className='w-12 h-12 bg-black p-2 text-white group-hover:bg-white group-hover:text-black transition rounded-full'/>,
            number: 25,
            text: "Anual gross sale in our site"
        },
    ]
    return (
        <section data-aos="fade-up" data-aos-duration="700" className="py-24 relative">
            <div  className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div data-aos="fade-right" className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-2 flex">
                            <h2 className="text-gray-900 dark:text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                            Our Story</h2>
                            <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p data-aos="fade-up" data-aos-delay="150" className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center mt-2">
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        </div>
                        <button data-aos="zoom-in" data-aos-delay="200" className="sm:w-fit w-full px-3.5 py-2 bg-theme transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] justify-center items-center flex cursor-pointer">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                        </button>
                    </div>
                    <div data-aos="fade-left" className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1  order-last">
                        <div className="pt-15 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                        <img src={img1} className=" rounded-xl object-cover max-h-full max-w-full w-65"  alt="about Us image" />
                        {/* src="https://pagedone.io/asset/uploads/1717741205.png" */}
                        </div>
                        <img className="sm:ml-0 ml-auto rounded-xl object-cover w-65" src={img2} alt="about Us image" />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="150" className="flex py-13 gap-8 max-md:flex-col mx-auto items-center">
                    {services.map((service, index)=>(
                        <div data-aos="zoom-in" data-aos-delay={index * 100} key={index} className="group border py-4 px-6 flex flex-col gap-2 rounded-md items-center max-md:w-[80%] hover:bg-theme hover:text-white transition">
                            {service.icon}
                            {/* <h3 className='text-2xl font-bold'>{service.number}K</h3> */}
                            <p className="text-2xl  font-bold">
                                <CountUp end={service.number} decimals={1}  duration={3.5}/>K
                            </p>
                            <p className='-mt-2'>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default About
