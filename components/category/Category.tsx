"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Container from "../shared/Container";
const categories = [
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fashion",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Appliances",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Babies Store",
    image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Babies Store",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Babies Store",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Babies Store",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  
];

const Category = () => {
  return (
      <div className="relative w-full px-10 py-6 bg-gradient-to-b from-[#F3EDC9] to-white/0 ">
     <Container >
       <div className="custom-prev absolute left-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-4 ">
        <SlArrowLeft className="text-[#1b1a1a] text-4xl font-normal"/>
      </div>
      <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer px-4">
         <SlArrowRight className="text-[#1b1a1a] text-4xl font-normal"/>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={2}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1.2, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 4, slidesPerGroup: 2 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative group  rounded-md shadow-sm">
              
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-[180px] object-cover"
              />

              <div className="absolute bottom-3 -left-2 right-3 bg-white/95 flex items-center justify-between px-3 py-2 shadow">
                <span className="text-sm font-medium text-black">
                  {item.title}
                </span>
                <button className="text-[#14B1F0] text-sm font-medium hover:underline">
                  Shop
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="border-2 mt-2"></div>
     </Container>
    </div>
  );
};

export default Category;