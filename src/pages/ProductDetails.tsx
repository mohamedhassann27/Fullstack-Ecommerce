import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import type { IProduct } from "@/interfaces";
import { Button } from "@/components/ui/button";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import LoadingSpinner from "@/components/shared/LoadingSpinner";
import supabase from "@/supabase";
// import '.'

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const { isLoading, data} = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select()
        .eq("id", id);
      if (error) console.log(error);
      return data;
    },
  });
  console.log(data);
  const productDetails: IProduct = data && data[0];
  console.log(productDetails);

  if(isLoading) return <LoadingSpinner/>

  return (
    <section className="py-15! md:px-12! relative mb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-25 justify-between items-center">
          <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-0 max-lg:max-w-152 max-lg:mx-auto">
            <p className="font-medium text-lg text-theme mb-4">
              Products &nbsp; / &nbsp; {productDetails?.category}
            </p>
            <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900 dark:text-white">
              {productDetails?.title}
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 dark:text-white pr-5 sm:border-r border-gray-200 mr-5">
                ${productDetails?.price}
              </h6>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: productDetails?.rating }, () => (
                    <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
                  ))}
                </div>
                <span className="pl-1 font-normal leading-7 text-gray-500 ">
                  ({productDetails?.reviews}review)
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-6 ">
              {productDetails?.description}
            </p>
            <div className="block w-full">
              <p className="font-medium text-lg leading-8 text-gray-900 mb-4 dark:text-white">
                Bag Color
              </p>
              <div className="text">
                <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6 ">
                  <button
                    data-ui="checked active"
                    className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500 :border-emerald-500"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={20} cy={20} r={20} fill="#10B981" />
                    </svg>
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-amber-400 focus-within:border-amber-400">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={20} cy={20} r={20} fill="#FBBF24" />
                    </svg>
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-red-500 focus-within:border-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <circle cx={20} cy={20} r={20} fill="#F43F5E" />
                    </svg>
                  </button>
                  <button className="p-2.5 border border-gray-200 rounded-full  transition-all duration-300 hover:border-blue-400 focus-within:border-blue-400">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={20} cy={20} r={20} fill="#2563EB" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  <div className="relative">
                    <Button className="font-semibold text-lg py-6 w-full flex items-center justify-center gap-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-theme hover:shadow-indigo-200 cursor-pointer">
                      Add to cart
                    </Button>
                    <BsCart3 className="text-2xl absolute left-10 top-3 text-white" />
                  </div>
                  <div className="relative">
                    <Button className="font-semibold text-lg py-6 w-full flex items-center justify-center gap-3 shadow-sm shadow-transparent transition-all duration-500 hover:bg-theme hover:shadow-indigo-200 cursor-pointer">
                      Add to Favourite
                    </Button>
                    <CiHeart className="text-3xl absolute left-5 top-2.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            className="w-full h-full"
            modules={[Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000, // كل 2 ثواني
              disableOnInteraction: false, // يكمل حتى لو المستخدم ضغط
            }}
          >
            {productDetails?.images.map((img) => (
              <SwiperSlide>
                <img
                  src={img}
                  loading="lazy"
                  alt="product image"
                  className="object-cover w-full h-120 mx-auto rounded-sm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
